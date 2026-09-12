import copy
import random
import math

from backend.correlated_failures import generate_cme_scenarios, generate_cascade_scenarios, generate_gateway_blackout_scenarios

def get_active_sats(scenario):
    stage = scenario['design']['launch_stage']
    sats = scenario['design']['satellites']
    return [s['id'] for s in sats if s['launch_batch'] <= stage]

def copy_with_stage(scenario, stage):
    sc = copy.deepcopy(scenario)
    sc['design']['launch_stage'] = stage
    return sc

def mutate(scenario, failures):
    sc = copy.deepcopy(scenario)
    if 'failures' not in sc:
        sc['failures'] = []
    sc['failures'].extend(failures)
    return sc

def binom_prob(k, n, p):
    return math.comb(n, k) * (p ** k) * ((1 - p) ** (n - k))

def allocate_samples(k, n, max_samples):
    # allocate more samples to more probable k, but ensure minimum samples for other k
    if k <= 5:
        return min(300, max_samples // 10)
    elif k <= 10:
        return min(100, max_samples // 20)
    else:
        return min(20, max_samples // 50)

def benchmark_single_scenario(scenario):
    # Mock benchmark: 0.1 seconds
    return 0.1

def generate_scenarios(base_scenario, time_budget_minutes, settings):
    # 1. Estimate throughput
    throughput = benchmark_single_scenario(base_scenario)
    # Using 8 cores for parallel
    import os
    n_cpu = os.cpu_count() or 8
    max_scenarios = int(time_budget_minutes * 60 / throughput * n_cpu)
    
    scenarios = []
    horizon_s = base_scenario['environment']['horizon_s']
    
    p_daily = settings.get('failure_probability', 0.01)
    
    for stage in [1, 2, 3]:
        stage_scenario = copy_with_stage(base_scenario, stage)
        active_sats = get_active_sats(stage_scenario)
        N_active = len(active_sats)
        
        # Max failure k to consider
        max_k = min(N_active, 24)
        
        for k in range(0, max_k + 1):
            n_samples = allocate_samples(k, N_active, max_scenarios)
            
            for _ in range(n_samples):
                failed = random.sample(active_sats, k)
                failures = []
                for sat_id in failed:
                    t_fail = random.randint(0, horizon_s)
                    failures.append({
                        "satellite_id": sat_id,
                        "start_s": t_fail,
                        "end_s": horizon_s
                    })
                
                prob = binom_prob(k, N_active, p_daily)
                
                scenarios.append({
                    "scenario": mutate(stage_scenario, failures),
                    "k_failed": k,
                    "probability": prob / n_samples, # Normalize probability across samples
                    "stage": stage,
                    "type": "independent"
                })
                
    scenarios.extend(generate_cme_scenarios(base_scenario, p_daily))
    scenarios.extend(generate_cascade_scenarios(base_scenario, p_daily))
    scenarios.extend(generate_gateway_blackout_scenarios(base_scenario))
    
    # Cap scenarios by time budget
    if len(scenarios) > max_scenarios:
        scenarios = random.sample(scenarios, max_scenarios)
        
    return scenarios
