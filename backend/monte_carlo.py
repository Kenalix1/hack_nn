import random
import copy
import math
import concurrent.futures
from typing import List, Dict, Any
from backend.calc_engine import run_simulation

def generate_monte_carlo_scenarios(base_scenario: Dict[str, Any], settings: Dict[str, Any], num_samples: int = 10) -> List[Dict[str, Any]]:
    """
    Generates a set of scenario variations using Monte Carlo sampling.
    """
    satellites = base_scenario.get("design", {}).get("satellites", [])
    total_sats = len(satellites)
    horizon_s = base_scenario.get("environment", {}).get("horizon_s", 86400)
    
    p_fail_daily = settings.get("failure_probability", 0.01)
    
    scenarios = []
    
    # Variant 0: Optimistic
    sc0 = copy.deepcopy(base_scenario)
    if "meta" not in sc0: sc0["meta"] = {}
    sc0["meta"]["title"] = "Оптимистичный сценарий (Без отказов)"
    sc0["meta"]["id"] = "mc_optimistic"
    sc0["failures"] = []
    sc0["_mc_prob"] = (1.0 - p_fail_daily) ** total_sats
    sc0["_mc_type"] = "optimistic"
    sc0["_mc_failed_count"] = 0
    scenarios.append(sc0)
    
    # Generate variations
    for i in range(1, num_samples):
        sc = copy.deepcopy(base_scenario)
        if "meta" not in sc: sc["meta"] = {}
        
        # Determine how many fail based on binomial distribution approximation or random
        if i == 1:
            fail_count = int(total_sats * 0.1) or 1
        elif i == 2:
            fail_count = int(total_sats * 0.25) or 1
        elif i == 3:
            fail_count = int(total_sats * 0.5) or 1
        else:
            fail_count = int(random.expovariate(1.5) * (total_sats / 3))
            if fail_count > total_sats: fail_count = total_sats
            
        failed_sats = random.sample(satellites, fail_count) if fail_count > 0 else []
        failures = []
        
        for sat in failed_sats:
            start_fail = random.randint(0, horizon_s // 2)
            failures.append({
                "satellite_id": sat["id"],
                "start_s": start_fail,
                "end_s": horizon_s
            })
            
        sc["failures"] = failures
        sc["meta"]["id"] = f"mc_var_{i}"
        sc["meta"]["title"] = f"Вариант {i}: Отказ {fail_count} КА ({int((fail_count/max(1,total_sats))*100)}%)"
        
        if fail_count == 0:
            prob = (1.0 - p_fail_daily) ** total_sats
        else:
            prob = (math.comb(total_sats, fail_count) * 
                   (p_fail_daily ** fail_count) * 
                   ((1.0 - p_fail_daily) ** (total_sats - fail_count)))
            
        sc["_mc_prob"] = prob
        sc["_mc_type"] = "failure"
        sc["_mc_failed_count"] = fail_count
        scenarios.append(sc)
        
    return scenarios

def analyze_combinations(base_scenario: Dict[str, Any], settings: Dict[str, Any]) -> List[Dict[str, Any]]:
    scenarios = generate_monte_carlo_scenarios(base_scenario, settings, num_samples=10)
    
    results = []
    
    def process_scenario(sc):
        res = run_simulation(sc, settings)
        
        failed_count = sc.get("_mc_failed_count", 0)
        prob = sc.get("_mc_prob", 0.0)
        
        remediation_cost = 0
        remediation_delay_s = 0
        remediation_plan = "Штатная работа"
        
        if failed_count > 0:
            total_sats = len(sc.get("design", {}).get("satellites", []))
            if failed_count / max(1, total_sats) > 0.15:
                launches_needed = math.ceil(failed_count / 16)
                remediation_cost = launches_needed * settings.get("emergency_launch_cost_usd", 15000000.0)
                remediation_delay_days = settings.get("launch_delay_days", 14)
                
                unmet_clients = res["economic_analysis"]["unmet_clients_count"]
                sla_penalty = settings.get("sla_penalty_per_client_usd", 120000.0)
                delay_penalty = unmet_clients * sla_penalty * (remediation_delay_days / 365.0)
                
                remediation_plan = f"Экстренный запуск ({launches_needed} ракет). Задержка {remediation_delay_days} дней."
                res["economic_analysis"]["total_annual_cost_usd"] += remediation_cost + delay_penalty
            else:
                remediation_plan = "Программная реконфигурация орбит. Запуски не требуются."
                
        total_cost = res["economic_analysis"]["total_annual_cost_usd"]
        risk_expectation = prob * total_cost
        
        return {
            "scenario_meta": sc["meta"],
            "mc_type": sc["_mc_type"],
            "mc_prob": prob,
            "mc_failed_count": failed_count,
            "remediation_plan": remediation_plan,
            "remediation_cost": remediation_cost,
            "risk_expectation": risk_expectation,
            "overall_availability": res["overall_availability"],
            "all_targets_met": res["all_targets_met"],
            "total_annual_cost_usd": total_cost,
            "simulation_result": res,
            "raw_scenario": sc
        }
    
    for sc in scenarios:
        results.append(process_scenario(sc))
        
    results.sort(key=lambda x: x["mc_prob"], reverse=True)
    return results
