from __future__ import annotations
import os
import sys
import glob
import json
import math
from pathlib import Path
from typing import Dict, Any, List, Optional
from fastapi import FastAPI, HTTPException, UploadFile, File
from fastapi.responses import HTMLResponse, JSONResponse, Response
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

sys.path.append(str(Path(__file__).parent.parent / "Расчетный модуль"))
import geometry
from backend.calc_engine import run_simulation, export_cosmo_result

app = FastAPI(title="CosmoHack 2026 - Constellation Resiliency Service")

BASE_DIR = Path(__file__).parent.parent

def find_scenario_dir() -> Path:
    for d in BASE_DIR.iterdir():
        if d.is_dir() and 'Расчет' in d.name:
            return d
    return BASE_DIR / "Расчетный модуль"

SCENARIO_DIR = find_scenario_dir()

def load_preset_scenarios() -> Dict[str, dict]:
    presets = {}
    preset_names = {
        '01_full_constellation.json': 'Полная группировка (48 аппаратов)',
        '02_first_launch.json': 'Первая очередь запуска (16 аппаратов)',
        '03_satellite_outages.json': 'Сценарий с отказами 10 спутников',
        '04_link_range.json': 'Ограниченная дальность ISL (2000 км)'
    }
    
    for filename, default_title in preset_names.items():
        file_path = SCENARIO_DIR / filename
        if file_path.exists():
            try:
                scenario = geometry.load(file_path)
                if 'meta' not in scenario or not scenario['meta'].get('title'):
                    scenario['meta'] = {
                        'id': filename.replace('.json', ''),
                        'title': default_title
                    }
                presets[filename] = scenario
            except Exception as e:
                print(f"Error loading preset {filename}: {e}")
    return presets

PRESETS = load_preset_scenarios()

class SimulateRequest(BaseModel):
    scenario: Dict[str, Any]

class CompareRequest(BaseModel):
    scenarios: List[Dict[str, Any]]

@app.get("/api/scenarios")
def get_presets():
    return [
        {
            "id": filename,
            "title": sc.get("meta", {}).get("title", filename),
            "launch_stage": sc.get("design", {}).get("launch_stage"),
            "satellites_count": len(sc.get("design", {}).get("satellites", [])),
            "isl_range_km": sc.get("environment", {}).get("isl_range_km")
        }
        for filename, sc in PRESETS.items()
    ]

@app.get("/api/scenarios/{filename}")
def get_preset_detail(filename: str):
    if filename not in PRESETS:
        raise HTTPException(status_code=404, detail="Preset scenario not found")
    return PRESETS[filename]

@app.get("/api/simulate")
def simulate_get(scenario_id: str = "01_full_constellation"):
    try:
        # Match scenario by preset key or filename
        matched_key = None
        for key in PRESETS.keys():
            if key == scenario_id or key.replace(".json", "") == scenario_id:
                matched_key = key
                break
        
        if not matched_key:
            matched_key = list(PRESETS.keys())[0]
            
        scenario = PRESETS[matched_key]
        geometry.validate(scenario)
        result = run_simulation(scenario)
        
        # Build satellites list for 3D view
        snap0 = result["snapshots"][0] if result.get("snapshots") else {}
        sat_design_map = {sat['id']: sat for sat in scenario.get('design', {}).get('satellites', [])}
        
        sats_list = []
        for s in snap0.get("satellites", []):
            sid = s["id"]
            x = s.get("x_km", 0.0)
            y = s.get("y_km", 0.0)
            z = s.get("z_km", 0.0)
            r = math.sqrt(x*x + y*y + z*z)
            
            if r > 0:
                sub_lat = math.degrees(math.asin(max(-1.0, min(1.0, z / r))))
                sub_lon = math.degrees(math.atan2(y, x))
                alt_km = r - 6371.0
            else:
                sub_lat, sub_lon, alt_km = 0.0, 0.0, 600.0

            orig_sat = sat_design_map.get(sid, {})
            p_str = str(orig_sat.get("plane_id", "P1")).replace("P", "")
            plane_num = int(p_str) if p_str.isdigit() else 1

            sats_list.append({
                "id": sid,
                "plane": plane_num,
                "idx": int(orig_sat.get("slot_deg", 0)),
                "altitude": alt_km,
                "inc": scenario.get("environment", {}).get("inclination_deg", 86.4),
                "raan": 0,
                "arg_per": 0,
                "true_anomaly": 0,
                "sub_lat": round(sub_lat, 4),
                "sub_lon": round(sub_lon, 4)
            })
            
        gws_list = []
        for g in scenario.get("ground_sites", []):
            gws_list.append({
                "id": g["id"],
                "name": g.get("name", g["id"]),
                "lat": g["lat_deg"],
                "lon": g["lon_deg"],
                "type": g.get("role", "gateway")
            })
            
        routes_sample = []
        if result.get("client_summaries"):
            for cs in result["client_summaries"]:
                time_series = cs.get("time_series", [])
                active_entry = next((e for e in time_series if e.get("connected") and e.get("path")), None)
                if active_entry:
                    routes_sample.append({
                        "src": cs["id"],
                        "dst": active_entry["path"][-1] if len(active_entry["path"]) > 1 else "GW",
                        "path": active_entry["path"],
                        "latency_ms": round((cs.get("avg_distance_km") or 1200) / 300.0, 1),
                        "status": "АКТИВЕН"
                    })

        return {
            "scenario_id": scenario_id,
            "title": scenario.get("meta", {}).get("title", scenario_id),
            "description": f"Развертывание {scenario.get('design', {}).get('launch_stage', 'полное')}",
            "timestamp_utc": "2026-09-11T22:30:00Z",
            "satellites": sats_list,
            "gateways": gws_list,
            "routes_sample": routes_sample,
            "raw_scenario": scenario,
            "simulation_result": result
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Simulation error: {str(e)}")

@app.post("/api/simulate")
def simulate(req: SimulateRequest):
    try:
        scenario = req.scenario
        geometry.validate(scenario)
        result = run_simulation(scenario)
        
        snap0 = result["snapshots"][0] if result.get("snapshots") else {}
        sat_design_map = {sat['id']: sat for sat in scenario.get('design', {}).get('satellites', [])}
        
        sats_list = []
        for s in snap0.get("satellites", []):
            sid = s["id"]
            x = s.get("x_km", 0.0)
            y = s.get("y_km", 0.0)
            z = s.get("z_km", 0.0)
            r = math.sqrt(x*x + y*y + z*z)
            
            if r > 0:
                sub_lat = math.degrees(math.asin(max(-1.0, min(1.0, z / r))))
                sub_lon = math.degrees(math.atan2(y, x))
                alt_km = r - 6371.0
            else:
                sub_lat, sub_lon, alt_km = 0.0, 0.0, 600.0

            orig_sat = sat_design_map.get(sid, {})
            p_str = str(orig_sat.get("plane_id", "P1")).replace("P", "")
            plane_num = int(p_str) if p_str.isdigit() else 1

            sats_list.append({
                "id": sid,
                "plane": plane_num,
                "idx": int(orig_sat.get("slot_deg", 0)),
                "altitude": round(alt_km, 2),
                "inc": scenario.get("environment", {}).get("inclination_deg", 86.4),
                "raan": 0,
                "arg_per": 0,
                "true_anomaly": 0,
                "sub_lat": round(sub_lat, 4),
                "sub_lon": round(sub_lon, 4)
            })
            
        gws_list = []
        for g in scenario.get("ground_sites", []):
            gws_list.append({
                "id": g["id"],
                "name": g.get("name", g["id"]),
                "lat": g["lat_deg"],
                "lon": g["lon_deg"],
                "type": g.get("role", "gateway")
            })
            
        routes_sample = []
        if result.get("client_summaries"):
            for cs in result["client_summaries"]:
                time_series = cs.get("time_series", [])
                active_entry = next((e for e in time_series if e.get("connected") and e.get("path")), None)
                if active_entry:
                    routes_sample.append({
                        "src": cs["id"],
                        "dst": active_entry["path"][-1] if len(active_entry["path"]) > 1 else "GW",
                        "path": active_entry["path"],
                        "latency_ms": round((cs.get("avg_distance_km") or 1200) / 300.0, 1),
                        "status": "АКТИВЕН"
                    })

        return {
            "scenario_id": scenario.get("meta", {}).get("id", "custom_uploaded"),
            "title": scenario.get("meta", {}).get("title", "Пользовательский Сценарий"),
            "description": f"Пользовательская конфигурация ({len(sats_list)} спутников)",
            "timestamp_utc": "2026-09-11T22:40:00Z",
            "satellites": sats_list,
            "gateways": gws_list,
            "routes_sample": routes_sample,
            "raw_scenario": scenario,
            "simulation_result": result
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Simulation error: {str(e)}")

@app.post("/api/export")
def export_result(req: SimulateRequest):
    try:
        scenario = req.scenario
        geometry.validate(scenario)
        result = run_simulation(scenario)
        cosmo_export = export_cosmo_result(scenario, result)
        return cosmo_export
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Export error: {str(e)}")

@app.post("/api/compare")
def compare_scenarios(req: CompareRequest):
    try:
        if len(req.scenarios) < 2:
            raise HTTPException(status_code=400, detail="Provide at least 2 scenarios for comparison")
            
        results = []
        for i, sc in enumerate(req.scenarios):
            geometry.validate(sc)
            res = run_simulation(sc)
            results.append({
                "index": i,
                "meta": sc.get("meta", {"id": f"var_{i+1}", "title": f"Вариант {i+1}"}),
                "environment": sc.get("environment"),
                "launch_stage": sc.get("design", {}).get("launch_stage"),
                "overall_availability": res["overall_availability"],
                "all_targets_met": res["all_targets_met"],
                "client_summaries": res["client_summaries"],
                "vulnerability": res["vulnerability"]
            })
            
        # Generate automated recommendations
        best_variant = max(results, key=lambda x: x["overall_availability"])
        recommendations = []
        
        if best_variant["all_targets_met"]:
            recommendations.append(
                f"Рекомендуется конфигурация '{best_variant['meta'].get('title')}', так как она обеспечивают целевую доступность ≥ 90% для всех наземных пунктов."
            )
        else:
            recommendations.append(
                f"Наибольшую доступность ({best_variant['overall_availability']*100:.1f}%) обеспечивает вариант '{best_variant['meta'].get('title')}', однако для достижения 90% на всех пунктах требуется увеличенная очередь запуска или дополнительная плотность орбитальных плоскостей."
            )
            
        return {
            "variants": results,
            "best_variant_index": best_variant["index"],
            "recommendations": recommendations
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Comparison error: {str(e)}")

# Mount static assets from frontend/dist/assets if available
dist_assets = BASE_DIR / "frontend" / "dist" / "assets"
if dist_assets.exists():
    app.mount("/assets", StaticFiles(directory=str(dist_assets)), name="assets")

@app.get("/", response_class=HTMLResponse)
def index_page():
    dist_index = BASE_DIR / "frontend" / "dist" / "index.html"
    if dist_index.exists():
        return HTMLResponse(content=dist_index.read_text(encoding='utf-8'))
    
    dev_index = BASE_DIR / "frontend" / "index.html"
    if dev_index.exists():
        return HTMLResponse(content=dev_index.read_text(encoding='utf-8'))
    
    return HTMLResponse(content="<h1>CosmoHack Web Interface</h1><p>Frontend distribution file not found.</p>")
