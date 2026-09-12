from collections import defaultdict
import numpy as np

def build_histogram(results, key, bins=10):
    values = [r[key] for r in results]
    if not values:
        return []
    counts, bin_edges = np.histogram(values, bins=bins)
    return [{"bin_start": float(bin_edges[i]), "bin_end": float(bin_edges[i+1]), "count": int(counts[i])} for i in range(len(counts))]

def aggregate_stratum(results_iter):
    results = list(results_iter)
    if not results:
        return None
    availabilities = [r["availability"] for r in results]
    costs = [r["total_cost"] for r in results]
    outages = [r["max_outage_s"] for r in results]
    return {
        "count": len(results),
        "avg_availability": float(np.mean(availabilities)),
        "min_availability": float(np.min(availabilities)),
        "avg_cost": float(np.mean(costs)),
        "avg_outage": float(np.mean(outages))
    }

def dominates(a, b, objectives):
    # Returns true if a dominates b (a is better or equal in all, and strictly better in at least one)
    # Objectives: availability (maximize), total_cost (minimize), max_outage_s (minimize)
    
    better_or_eq = True
    strictly_better = False
    
    if a["availability"] < b["availability"]: better_or_eq = False
    elif a["availability"] > b["availability"]: strictly_better = True
        
    if a["total_cost"] > b["total_cost"]: better_or_eq = False
    elif a["total_cost"] < b["total_cost"]: strictly_better = True
        
    if a["max_outage_s"] > b["max_outage_s"]: better_or_eq = False
    elif a["max_outage_s"] < b["max_outage_s"]: strictly_better = True
        
    return better_or_eq and strictly_better

def compute_pareto_front(results, objectives=["availability", "total_cost", "max_outage_s"]):
    pareto = []
    for r in results:
        dominated = False
        for other in results:
            if dominates(other, r, objectives):
                dominated = True
                break
        if not dominated:
            pareto.append(r)
    return pareto

def compute_vulnerability_ranking(results):
    sat_impact = defaultdict(list)
    
    baseline = next((r for r in results if r["k_failed"] == 0), None)
    baseline_avail = baseline["availability"] if baseline else 1.0
    
    for r in results:
        if r["k_failed"] == 1 and r["failed_satellites"]:
            sat_id = r["failed_satellites"][0]
            impact = baseline_avail - r["availability"]
            sat_impact[sat_id].append(impact)
            
    ranking = [
        {"satellite_id": sid, "avg_impact": float(np.mean(impacts)), "max_impact": float(np.max(impacts))}
        for sid, impacts in sat_impact.items()
    ]
    ranking.sort(key=lambda x: x["avg_impact"], reverse=True)
    return ranking

def weighted_mean(results, key, weight_key="probability"):
    total_weight = sum(r[weight_key] for r in results)
    if total_weight == 0:
        return 0
    return sum(r[key] * r[weight_key] for r in results) / total_weight

def compute_tco(results):
    if not results:
        return 0
    r0 = results[0]
    annual_opex = 48 * 45000.0 # simplified
    capex = r0.get("capex", 0)
    expected_risk = sum(r.get("expected_risk", 0) for r in results)
    return capex + annual_opex + expected_risk

def aggregate_results(results):
    return {
        "availability_distribution": build_histogram(results, "availability"),
        "cost_distribution": build_histogram(results, "total_cost"),
        "outage_distribution": build_histogram(results, "max_outage_s"),
        
        "by_failure_count": {
            k: aggregate_stratum(filter(lambda r: r["k_failed"] == k, results))
            for k in set(r["k_failed"] for r in results)
        },
        
        "by_stage": {
            stage: aggregate_stratum(filter(lambda r: r["stage"] == stage, results))
            for stage in [1, 2, 3]
        },
        
        "pareto_front": compute_pareto_front(results),
        "vulnerability_ranking": compute_vulnerability_ranking(results),
        
        "expected_availability": weighted_mean(results, "availability"),
        "expected_cost": weighted_mean(results, "total_cost"),
        "expected_risk": sum(r.get("expected_risk", 0) for r in results),
        "tco_annual": compute_tco(results)
    }
