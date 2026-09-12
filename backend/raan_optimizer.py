import copy

def modify_planes(base_scenario, raan_offsets, phase_offsets):
    sc = copy.deepcopy(base_scenario)
    planes = sc['design']['planes']
    for i, p in enumerate(planes):
        if i < len(raan_offsets):
            p['raan_deg'] = (p['raan_deg'] + raan_offsets[i]) % 360.0
            p['phase_deg'] = (p['phase_deg'] + phase_offsets[i]) % 360.0
    return sc

def quick_availability_estimate(config):
    # This is a mock function, it should run a coarse/simplified simulation
    # Let's just return a deterministic hash to mock it
    from hashlib import md5
    import json
    s = json.dumps(config['design']['planes'], sort_keys=True)
    val = int(md5(s.encode()).hexdigest(), 16) % 1000
    return val / 1000.0

def optimize_raan_phase(base_scenario, step_deg=10, top_n=5):
    best_configs = []
    planes = base_scenario['design']['planes']
    
    # Simple grid search over planes 2 and 3 offsets relative to plane 1
    # assuming we have at least 3 planes
    if len(planes) < 3:
        return [(1.0, base_scenario)]
        
    for delta_raan_2 in range(0, 180, step_deg):
        for delta_raan_3 in range(delta_raan_2, 180, step_deg):
            for delta_phase_2 in range(0, 360, step_deg):
                for delta_phase_3 in range(0, 360, step_deg):
                    config = modify_planes(base_scenario,
                        raan_offsets=[0, delta_raan_2, delta_raan_3],
                        phase_offsets=[0, delta_phase_2, delta_phase_3]
                    )
                    score = quick_availability_estimate(config)
                    best_configs.append((score, config))
                    
                    if len(best_configs) > top_n * 10:
                        # Prune to keep memory low
                        best_configs.sort(key=lambda x: x[0], reverse=True)
                        best_configs = best_configs[:top_n]
    
    best_configs.sort(key=lambda x: x[0], reverse=True)
    return best_configs[:top_n]
