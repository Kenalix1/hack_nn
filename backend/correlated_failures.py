import random
import copy

def generate_cme_scenarios(base_scenario, p_daily=0.01):
    scenarios = []
    
    # Probability of CME event
    p_cme = 1e-3
    
    stage = base_scenario['design']['launch_stage']
    sats = base_scenario['design']['satellites']
    active_sats = [s for s in sats if s['launch_batch'] <= stage]
    
    # Identify planes
    planes = list(set([s['plane_id'] for s in active_sats]))
    horizon_s = base_scenario['environment']['horizon_s']
    
    for plane in planes:
        plane_sats = [s['id'] for s in active_sats if s['plane_id'] == plane]
        if not plane_sats:
            continue
            
        failures = []
        t_fail = random.randint(0, horizon_s) # all fail at the same time
        for sat_id in plane_sats:
            failures.append({
                "satellite_id": sat_id,
                "start_s": t_fail,
                "end_s": horizon_s
            })
            
        sc = copy.deepcopy(base_scenario)
        if 'failures' not in sc:
            sc['failures'] = []
        sc['failures'].extend(failures)
        
        scenarios.append({
            "scenario": sc,
            "k_failed": len(plane_sats),
            "probability": p_cme / len(planes),
            "stage": stage,
            "type": "cme_plane_outage"
        })
        
    return scenarios

def generate_cascade_scenarios(base_scenario, p_daily=0.01):
    # Simplified cascade generation
    scenarios = []
    
    stage = base_scenario['design']['launch_stage']
    sats = base_scenario['design']['satellites']
    active_sats = [s['id'] for s in sats if s['launch_batch'] <= stage]
    
    horizon_s = base_scenario['environment']['horizon_s']
    
    if len(active_sats) < 2:
        return scenarios
        
    # Generate a few cascade scenarios (e.g., adjacent satellites failing)
    for _ in range(5):
        t_fail = random.randint(0, horizon_s // 2)
        
        # Pick a random satellite
        start_sat = random.choice(active_sats)
        # Pick 2-4 more random satellites to simulate cascade
        k_cascade = random.randint(2, min(5, len(active_sats)))
        
        failed = set([start_sat])
        failures = [{
            "satellite_id": start_sat,
            "start_s": t_fail,
            "end_s": horizon_s
        }]
        
        current_t = t_fail
        while len(failed) < k_cascade:
            next_sat = random.choice(active_sats)
            if next_sat not in failed:
                failed.add(next_sat)
                current_t += random.randint(300, 3600) # cascades happen after some time
                if current_t > horizon_s:
                    current_t = horizon_s
                failures.append({
                    "satellite_id": next_sat,
                    "start_s": current_t,
                    "end_s": horizon_s
                })
                
        sc = copy.deepcopy(base_scenario)
        if 'failures' not in sc:
            sc['failures'] = []
        sc['failures'].extend(failures)
        
        scenarios.append({
            "scenario": sc,
            "k_failed": k_cascade,
            "probability": (p_daily ** k_cascade) * 3.0, # arbitrarily higher probability than independent
            "stage": stage,
            "type": "cascade"
        })
        
    return scenarios

def generate_gateway_blackout_scenarios(base_scenario):
    scenarios = []
    p_gw = 5e-3
    horizon_s = base_scenario['environment']['horizon_s']
    
    gateways = [g['id'] for g in base_scenario.get('ground_sites', []) if g.get('role') == 'gateway']
    stage = base_scenario['design']['launch_stage']
    
    for gw in gateways:
        t_start = random.randint(0, horizon_s // 2)
        t_end = random.randint(t_start + 3600, horizon_s)
        
        sc = copy.deepcopy(base_scenario)
        if 'gateway_outages' not in sc:
            sc['gateway_outages'] = []
            
        sc['gateway_outages'].append({
            "gateway_id": gw,
            "start_s": t_start,
            "end_s": t_end
        })
        
        scenarios.append({
            "scenario": sc,
            "k_failed": 0, # 0 sats failed
            "probability": p_gw / len(gateways),
            "stage": stage,
            "type": "gateway_blackout"
        })
        
    return scenarios
