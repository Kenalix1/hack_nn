from concurrent.futures import ProcessPoolExecutor, as_completed
import os

from backend.calc_engine import run_simulation

def compute_capex(scenario, settings):
    N_sat = len(scenario['design'].get('satellites', []))
    capex = N_sat * settings.get('unit_capex_usd', 650000.0)
    import math
    capex += math.ceil(N_sat / 16) * settings.get('emergency_launch_cost_usd', 15000000.0)
    return capex

def compute_recovery_cost(scenario_entry, settings):
    k_failed = scenario_entry.get('k_failed', 0)
    if k_failed == 0:
        return 0
    N_active = len([s for s in scenario_entry['scenario']['design'].get('satellites', []) 
                    if s['launch_batch'] <= scenario_entry['scenario']['design'].get('launch_stage', 3)])
    
    if k_failed > 0.15 * N_active:
        import math
        cost = k_failed * settings.get('unit_capex_usd', 650000.0)
        cost += math.ceil(k_failed / 16) * settings.get('emergency_launch_cost_usd', 15000000.0)
        return cost
    else:
        return 50000.0 # refacing cost

def compute_sla_penalty(sim_result, settings):
    penalty = 0
    sla_usd = settings.get('sla_penalty_per_client_usd', 120000.0)
    for c in sim_result.get('client_summaries', []):
        if not c.get('target_met', False):
            penalty += sla_usd
    return penalty

def compute_total_cost(scenario_entry, sim_result, settings):
    rec = compute_recovery_cost(scenario_entry, settings)
    sla = compute_sla_penalty(sim_result, settings)
    return rec + sla

def run_single_scenario(scenario_entry, settings):
    scenario = scenario_entry["scenario"]
    sim_result = run_simulation(scenario, settings)
    
    routes = []
    if "routes_by_time" in sim_result:
        for rt in sim_result["routes_by_time"]:
            for cid, path in rt.get("routes", {}).items():
                routes.append({
                    "t_s": rt["t_s"],
                    "client_id": cid,
                    "path": path
                })
    
    return {
        "k_failed": scenario_entry["k_failed"],
        "probability": scenario_entry["probability"],
        "stage": scenario_entry["stage"],
        "type": scenario_entry["type"],
        "failed_satellites": [f["satellite_id"] for f in scenario.get("failures", [])],
        
        "availability": sim_result["overall_availability"],
        "max_outage_s": max([c["max_outage_s"] for c in sim_result.get("client_summaries", [])] + [0]),
        "total_cost": compute_total_cost(scenario_entry, sim_result, settings),
        
        "capex": compute_capex(scenario, settings),
        "recovery_cost": compute_recovery_cost(scenario_entry, settings),
        "sla_penalty": compute_sla_penalty(sim_result, settings),
        "expected_risk": scenario_entry["probability"] * compute_total_cost(scenario_entry, sim_result, settings),
        
        "routes": routes
    }

def run_mass_simulation(scenarios, settings, on_progress=None):
    results = []
    total = len(scenarios)
    completed = 0
    
    with ProcessPoolExecutor(max_workers=os.cpu_count()) as pool:
        futures = {
            pool.submit(run_single_scenario, sc, settings): sc
            for sc in scenarios
        }
        
        for future in as_completed(futures):
            result = future.result()
            results.append(result)
            completed += 1
            
            if on_progress:
                on_progress(completed, total, result)
                
    return results
