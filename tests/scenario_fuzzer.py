import random

def generate_random_scenario(seed=None):
    if seed is not None:
        random.seed(seed)
        
    planes_count = random.randint(1, 6)
    sats_per_plane = random.randint(5, 30)
    total_sats = planes_count * sats_per_plane
    
    altitude = random.uniform(400.0, 1200.0)
    inclination = random.uniform(45.0, 98.0)
    isl_range = random.uniform(1500.0, 5000.0)
    
    scenario = {
        "schema_version": "cosmo-A-1.0",
        "meta": {
            "id": f"fuzzed_p{planes_count}_s{sats_per_plane}",
            "title": f"Fuzzed Constellation ({planes_count}x{sats_per_plane})"
        },
        "environment": {
            "altitude_km": altitude,
            "inclination_deg": inclination,
            "earth_angle0_deg": 12.0,
            "horizon_s": 86400,
            "step_s": 120,
            "min_elevation_deg": 10.0,
            "isl_range_km": isl_range,
            "target_availability": 0.9
        },
        "design": {
            "launch_stage": 3,
            "planes": [],
            "satellites": []
        },
        "ground_sites": [],
        "failures": [],
        "gateway_outages": []
    }
    
    # Generate planes
    for p in range(1, planes_count + 1):
        scenario["design"]["planes"].append({
            "id": f"P{p}",
            "raan_deg": (360.0 / planes_count) * (p - 1),
            "phase_deg": random.uniform(0, 360.0 / sats_per_plane)
        })
        
        # Generate satellites for plane
        for s in range(1, sats_per_plane + 1):
            scenario["design"]["satellites"].append({
                "id": f"S{p}_{s}",
                "plane_id": f"P{p}",
                "slot_deg": (360.0 / sats_per_plane) * (s - 1),
                "launch_batch": random.randint(1, 3)
            })
            
    # Generate random gateways
    gateways_count = random.randint(1, 3)
    for g in range(1, gateways_count + 1):
        scenario["ground_sites"].append({
            "id": f"GW{g}",
            "name": f"Random Gateway {g}",
            "role": "gateway",
            "lat_deg": random.uniform(-60.0, 80.0),
            "lon_deg": random.uniform(-180.0, 180.0)
        })
        
    # Generate random clients
    clients_count = random.randint(3, 10)
    for c in range(1, clients_count + 1):
        scenario["ground_sites"].append({
            "id": f"C{c}",
            "name": f"Random Client {c}",
            "role": "client",
            "lat_deg": random.uniform(40.0, 85.0), # typically northern latitudes for the hackathon context
            "lon_deg": random.uniform(30.0, 170.0)
        })
        
    return scenario
