import json
from pathlib import Path
from backend.calc_engine import compute_step
from backend.geometry import snapshot

def test_snapshot_vs_compute_step():
    data_dir = Path("Расчетный модуль")
    for file_path in data_dir.glob("*.json"):
        with open(file_path, "r", encoding="utf-8") as f:
            scenario = json.load(f)
            
        env = scenario["environment"]
        step = env["step_s"]
        min_elev = env["min_elevation_deg"]
        
        clients = [g for g in scenario["ground_sites"] if g["role"] == "client"]
        gateways = [g for g in scenario["ground_sites"] if g["role"] == "gateway"]
        gateway_ids = [g["id"] for g in gateways]
        
        for t_s in range(0, 300, step): # Test first few steps
            snap = snapshot(scenario, t_s)
            res = compute_step(scenario, t_s, min_elev, clients, gateway_ids)
            
            # Since compute_step directly calls snapshot, they should be the same
            assert res['snap'] == snap
            
            # Additional sanity check: ensure no active gateway has edges if it is in outage
            offline_gateways = {
                f['gateway_id'] 
                for f in scenario.get('gateway_outages', []) 
                if f['start_s'] <= t_s < f['end_s']
            }
            for edge in snap['edges']:
                u, v, _ = edge
                assert u not in offline_gateways
                assert v not in offline_gateways
