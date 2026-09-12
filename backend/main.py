from __future__ import annotations
import os
import sys
import glob
import json
import math
from pathlib import Path
from typing import Dict, Any, List, Optional
from fastapi import FastAPI, HTTPException, UploadFile, File, Depends
from fastapi.responses import HTMLResponse, JSONResponse, Response, FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from sqlalchemy.orm import Session

from backend import geometry
from backend.calc_engine import run_simulation, export_cosmo_result
from backend.database import get_db, engine
from backend import models, crud
from backend.monte_carlo import analyze_combinations

models.Base.metadata.create_all(bind=engine)

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

class SettingsUpdate(BaseModel):
    unit_capex_usd: float = None
    annual_opex_per_sat_usd: float = None
    sla_penalty_per_client_usd: float = None
    processing_delay_ms: float = None
    failure_probability: float = None
    emergency_launch_cost_usd: float = None
    launch_delay_days: int = None

@app.get("/api/settings")
def api_get_settings(db: Session = Depends(get_db)):
    settings = crud.get_settings(db)
    return {
        "unit_capex_usd": settings.unit_capex_usd,
        "annual_opex_per_sat_usd": settings.annual_opex_per_sat_usd,
        "sla_penalty_per_client_usd": settings.sla_penalty_per_client_usd,
        "processing_delay_ms": settings.processing_delay_ms,
        "failure_probability": settings.failure_probability,
        "emergency_launch_cost_usd": settings.emergency_launch_cost_usd,
        "launch_delay_days": settings.launch_delay_days,
    }

@app.put("/api/settings")
def api_update_settings(updates: SettingsUpdate, db: Session = Depends(get_db)):
    updated_dict = {k: v for k, v in updates.dict().items() if v is not None}
    settings = crud.update_settings(db, updated_dict)
    return {
        "unit_capex_usd": settings.unit_capex_usd,
        "annual_opex_per_sat_usd": settings.annual_opex_per_sat_usd,
        "sla_penalty_per_client_usd": settings.sla_penalty_per_client_usd,
        "processing_delay_ms": settings.processing_delay_ms,
        "failure_probability": settings.failure_probability,
        "emergency_launch_cost_usd": settings.emergency_launch_cost_usd,
        "launch_delay_days": settings.launch_delay_days,
    }

@app.get("/api/scenarios")
def get_presets(db: Session = Depends(get_db)):
    res = []
    # Fetch from local files
    for filename, sc in PRESETS.items():
        res.append({
            "id": filename,
            "title": sc.get("meta", {}).get("title", filename),
            "launch_stage": sc.get("design", {}).get("launch_stage"),
            "satellites_count": len(sc.get("design", {}).get("satellites", [])),
            "isl_range_km": sc.get("environment", {}).get("isl_range_km"),
            "source": "preset"
        })
    # Fetch from DB
    logs = crud.get_all_scenario_logs(db)
    for log in logs:
        sc = log.raw_scenario
        res.append({
            "id": log.id,
            "title": log.title,
            "launch_stage": sc.get("design", {}).get("launch_stage"),
            "satellites_count": len(sc.get("design", {}).get("satellites", [])),
            "isl_range_km": sc.get("environment", {}).get("isl_range_km"),
            "overall_availability": log.overall_availability,
            "total_annual_cost_usd": log.total_annual_cost_usd,
            "source": "database"
        })
    return res

@app.get("/api/scenarios/{filename}")
def get_preset_detail(filename: str, db: Session = Depends(get_db)):
    if filename in PRESETS:
        return PRESETS[filename]
    log = crud.get_scenario_log(db, filename)
    if log:
        return log.raw_scenario
    raise HTTPException(status_code=404, detail="Scenario not found")

@app.get("/api/scenarios/{filename}/export")
def export_preset_result(filename: str, db: Session = Depends(get_db)):
    log = crud.get_scenario_log(db, filename)
    if log and log.simulation_result:
        return export_cosmo_result(log.raw_scenario, log.simulation_result)
    
    # If not in DB, it might be a preset. We'll simulate it on the fly.
    if filename in PRESETS:
        scenario = PRESETS[filename]
        settings_db = crud.get_settings(db)
        settings_dict = {
            'unit_capex_usd': settings_db.unit_capex_usd,
            'annual_opex_per_sat_usd': settings_db.annual_opex_per_sat_usd,
            'sla_penalty_per_client_usd': settings_db.sla_penalty_per_client_usd,
            'processing_delay_ms': settings_db.processing_delay_ms,
        }
        result = run_simulation(scenario, settings_dict)
        return export_cosmo_result(scenario, result)
        
    raise HTTPException(status_code=404, detail="Scenario result not found")

@app.post("/api/simulate")
def simulate(req: SimulateRequest, db: Session = Depends(get_db)):
    try:
        scenario = req.scenario
        geometry.validate(scenario)
        
        settings_db = crud.get_settings(db)
        settings_dict = {
            'unit_capex_usd': settings_db.unit_capex_usd,
            'annual_opex_per_sat_usd': settings_db.annual_opex_per_sat_usd,
            'sla_penalty_per_client_usd': settings_db.sla_penalty_per_client_usd,
            'processing_delay_ms': settings_db.processing_delay_ms,
        }
        
        result = run_simulation(scenario, settings_dict)
        
        scenario_id = scenario.get("meta", {}).get("id", "custom_uploaded")
        title = scenario.get("meta", {}).get("title", "Пользовательский Сценарий")
        
        # Save to DB
        crud.create_scenario_log(
            db=db,
            log_id=scenario_id,
            title=title,
            raw_scenario=scenario,
            simulation_result=result,
            overall_availability=result["overall_availability"],
            all_targets_met=result["all_targets_met"],
            total_annual_cost_usd=result["economic_analysis"]["total_annual_cost_usd"]
        )
        
        # Rest of response formatting
        snap0 = result["snapshots"][0] if result.get("snapshots") else {}
        sat_design_map = {sat['id']: sat for sat in scenario.get('design', {}).get('satellites', [])}
        launch_stage = scenario.get('design', {}).get('launch_stage', 3)
        
        sats_list = []
        for s in snap0.get("satellites", []):
            sid = s["id"]
            orig_sat = sat_design_map.get(sid, {})
            batch = orig_sat.get("launch_batch", 1)
            if batch > launch_stage:
                continue
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

            sat_status = result.get('satellites_status', {}).get(sid, {})
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
                "sub_lon": round(sub_lon, 4),
                "temperature_c": sat_status.get("temperature_c", 35.0),
                "overheated": sat_status.get("overheated", False),
                "fuel_kg": sat_status.get("fuel_kg", 9.8),
                "fuel_pct": sat_status.get("fuel_pct", 98.0)
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
                    # using settings processing_delay_ms
                    hop_count = len(active_entry["path"]) - 2 if len(active_entry["path"]) > 2 else 0
                    base_latency = (cs.get("avg_distance_km") or 1200) / 300.0
                    total_latency = base_latency + (hop_count * settings_dict["processing_delay_ms"])
                    
                    routes_sample.append({
                        "src": cs["id"],
                        "dst": active_entry["path"][-1] if len(active_entry["path"]) > 1 else "GW",
                        "path": active_entry["path"],
                        "latency_ms": round(total_latency, 1),
                        "status": "АКТИВЕН"
                    })

        return {
            "scenario_id": scenario_id,
            "title": title,
            "description": f"Пользовательская конфигурация ({len(sats_list)} спутников)",
            "timestamp_utc": "2026-09-11T22:40:00Z",
            "satellites": sats_list,
            "gateways": gws_list,
            "routes_sample": routes_sample,
            "raw_scenario": scenario,
            "simulation_result": result
        }
    except Exception as e:
        import traceback
        traceback.print_exc()
        raise HTTPException(status_code=400, detail=f"Simulation error: {str(e)}")

@app.get("/api/simulate")
def simulate_get(scenario_id: str = "01_full_constellation", db: Session = Depends(get_db)):
    # This acts as a wrapper around the POST request for testing via browser
    matched_key = None
    for key in PRESETS.keys():
        if key == scenario_id or key.replace(".json", "") == scenario_id:
            matched_key = key
            break
            
    if not matched_key:
        # Check DB
        log = crud.get_scenario_log(db, scenario_id)
        if log:
            scenario = log.raw_scenario
        else:
            scenario = list(PRESETS.values())[0] if PRESETS else {}
    else:
        scenario = PRESETS[matched_key]
        
    return simulate(SimulateRequest(scenario=scenario), db)

@app.post("/api/compare")
def compare_scenarios(req: CompareRequest, db: Session = Depends(get_db)):
    try:
        if len(req.scenarios) < 2:
            raise HTTPException(status_code=400, detail="Provide at least 2 scenarios for comparison")
            
        settings_db = crud.get_settings(db)
        settings_dict = {
            'unit_capex_usd': settings_db.unit_capex_usd,
            'annual_opex_per_sat_usd': settings_db.annual_opex_per_sat_usd,
            'sla_penalty_per_client_usd': settings_db.sla_penalty_per_client_usd,
            'processing_delay_ms': settings_db.processing_delay_ms,
        }
        
        results = []
        for i, sc in enumerate(req.scenarios):
            geometry.validate(sc)
            res = run_simulation(sc, settings_dict)
            results.append({
                "index": i,
                "meta": sc.get("meta", {"id": f"var_{i+1}", "title": f"Вариант {i+1}"}),
                "environment": sc.get("environment"),
                "launch_stage": sc.get("design", {}).get("launch_stage"),
                "overall_availability": res["overall_availability"],
                "all_targets_met": res["all_targets_met"],
                "client_summaries": res["client_summaries"],
                "vulnerability": res["vulnerability"],
                "economic_analysis": res["economic_analysis"]
            })
            
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

class AnalyzeRequest(BaseModel):
    scenario: dict
    failure_probability: float = 0.01
    emergency_launch_cost_usd: float = 15000000.0
    launch_delay_days: int = 14

@app.post("/api/analyze_combinations")
def api_analyze_combinations(req: AnalyzeRequest, db: Session = Depends(get_db)):
    try:
        scenario = req.scenario
        geometry.validate(scenario)
        
        settings_db = crud.get_settings(db)
        settings_dict = {
            'unit_capex_usd': settings_db.unit_capex_usd,
            'annual_opex_per_sat_usd': settings_db.annual_opex_per_sat_usd,
            'sla_penalty_per_client_usd': settings_db.sla_penalty_per_client_usd,
            'processing_delay_ms': settings_db.processing_delay_ms,
            'failure_probability': req.failure_probability,
            'emergency_launch_cost_usd': req.emergency_launch_cost_usd,
            'launch_delay_days': req.launch_delay_days,
        }
        
        results = analyze_combinations(scenario, settings_dict)
        return {"combinations": results}
    except Exception as e:
        import traceback
        traceback.print_exc()
        raise HTTPException(status_code=400, detail=f"Combination analysis error: {str(e)}")

dist_assets = BASE_DIR / "frontend" / "dist" / "assets"
if dist_assets.exists():
    app.mount("/assets", StaticFiles(directory=str(dist_assets)), name="assets")

@app.get("/{filename}.gltf")
def get_gltf_model(filename: str):
    dist_file = BASE_DIR / "frontend" / "dist" / f"{filename}.gltf"
    if dist_file.exists():
        return FileResponse(dist_file, media_type="model/gltf+json")
    root_file = BASE_DIR / f"{filename}.gltf"
    if root_file.exists():
        return FileResponse(root_file, media_type="model/gltf+json")
    pub_file = BASE_DIR / "frontend" / "public" / f"{filename}.gltf"
    if pub_file.exists():
        return FileResponse(pub_file, media_type="model/gltf+json")
    raise HTTPException(status_code=404, detail="Model not found")

@app.get("/{filename}.obj")
def get_obj_model(filename: str):
    dist_file = BASE_DIR / "frontend" / "dist" / f"{filename}.obj"
    if dist_file.exists():
        return FileResponse(dist_file, media_type="text/plain")
    root_file = BASE_DIR / f"{filename}.obj"
    if root_file.exists():
        return FileResponse(root_file, media_type="text/plain")
    pub_file = BASE_DIR / "frontend" / "public" / f"{filename}.obj"
    if pub_file.exists():
        return FileResponse(pub_file, media_type="text/plain")
    raise HTTPException(status_code=404, detail="Model not found")

# =====================================================================
# Mass Simulation Endpoints
# =====================================================================

import uuid
import asyncio
from fastapi.responses import StreamingResponse
from fastapi import Query
from backend.scenario_generator import generate_scenarios
from backend.raan_optimizer import optimize_raan_phase
from backend.parallel_runner import run_mass_simulation
from backend.analytics import aggregate_results

mass_sim_tasks = {}

@app.post("/api/mass_simulate")
def mass_simulate(
    req: SimulateRequest,
    max_scenarios: int = Query(default=500, ge=10, le=10000),
    include_raan_opt: bool = Query(default=False),
    failure_probability: float = Query(default=None),
    emergency_launch_cost_usd: float = Query(default=None),
    db: Session = Depends(get_db)
):
    task_id = str(uuid.uuid4())
    scenario = req.scenario
    
    settings_db = crud.get_settings(db)
    settings_dict = {
        'unit_capex_usd': settings_db.unit_capex_usd,
        'annual_opex_per_sat_usd': settings_db.annual_opex_per_sat_usd,
        'sla_penalty_per_client_usd': settings_db.sla_penalty_per_client_usd,
        'processing_delay_ms': settings_db.processing_delay_ms,
        'failure_probability': failure_probability if failure_probability is not None else (settings_db.failure_probability or 0.01),
        'emergency_launch_cost_usd': emergency_launch_cost_usd if emergency_launch_cost_usd is not None else (settings_db.emergency_launch_cost_usd or 15000000.0),
    }
    
    mass_sim_tasks[task_id] = {
        "status": "running",
        "progress": {"completed": 0, "total": 0, "eta_seconds": 0},
        "results": None,
        "scenarios": [] # Used for drill-down later
    }
    
    # Run in background
    def background_task():
        try:
            base_scenarios = [scenario]
            if include_raan_opt:
                opt_configs = optimize_raan_phase(scenario)
                base_scenarios = [cfg for score, cfg in opt_configs]
            
            all_generated = []
            for bs in base_scenarios:
                all_generated.extend(generate_scenarios(bs, max_scenarios // len(base_scenarios), settings_dict))
                
            mass_sim_tasks[task_id]["progress"]["total"] = len(all_generated)
            
            def on_progress(completed, total, result):
                mass_sim_tasks[task_id]["progress"]["completed"] = completed
                # Simple ETA: elapsed / completed * remaining
                
            raw_results = run_mass_simulation(all_generated, settings_dict, on_progress)
            
            mass_sim_tasks[task_id]["results"] = aggregate_results(raw_results)
            mass_sim_tasks[task_id]["raw_results"] = raw_results
            mass_sim_tasks[task_id]["status"] = "completed"
        except Exception as e:
            mass_sim_tasks[task_id]["status"] = "error"
            mass_sim_tasks[task_id]["error"] = str(e)
            
    import threading
    threading.Thread(target=background_task).start()
    
    return {"task_id": task_id}

@app.get("/api/mass_simulate/{task_id}/progress")
async def get_progress(task_id: str):
    if task_id not in mass_sim_tasks:
        raise HTTPException(status_code=404, detail="Task not found")
        
    async def event_generator():
        while True:
            task = mass_sim_tasks[task_id]
            if task["status"] == "completed":
                yield f"data: {json.dumps({'status': 'completed', 'progress': task['progress']})}\n\n"
                break
            elif task["status"] == "error":
                yield f"data: {json.dumps({'status': 'error', 'error': task['error']})}\n\n"
                break
            else:
                yield f"data: {json.dumps({'status': 'running', 'progress': task['progress']})}\n\n"
            await asyncio.sleep(1)
            
    return StreamingResponse(event_generator(), media_type="text/event-stream")

@app.get("/api/mass_simulate/{task_id}/results")
def get_mass_results(task_id: str):
    if task_id not in mass_sim_tasks:
        raise HTTPException(status_code=404, detail="Task not found")
    task = mass_sim_tasks[task_id]
    if task["status"] != "completed":
        raise HTTPException(status_code=400, detail="Task not completed yet")
    return task["results"]

class FilterRequest(BaseModel):
    weights: dict
    thresholds: dict

@app.post("/api/mass_simulate/{task_id}/filter")
def filter_results_endpoint(task_id: str, filters: FilterRequest):
    if task_id not in mass_sim_tasks:
        raise HTTPException(status_code=404, detail="Task not found")
    task = mass_sim_tasks[task_id]
    if task["status"] != "completed":
        raise HTTPException(status_code=400, detail="Task not completed yet")
        
    raw = task["raw_results"]
    filtered = []
    
    thresh_avail = filters.thresholds.get("availability", 0.0)
    thresh_cost = filters.thresholds.get("cost", float('inf'))
    
    w_avail = filters.weights.get("availability", 0.5)
    w_cost = filters.weights.get("cost", 0.3)
    w_outage = filters.weights.get("outage", 0.2)
    
    for r in raw:
        if r["availability"] < thresh_avail: continue
        if r["total_cost"] > thresh_cost: continue
        
        # Max availability is 1.0. Max cost maybe 1e8.
        # Simple normalization for scoring
        score = w_avail * r["availability"] - w_cost * (r["total_cost"] / 1e8) - w_outage * (r["max_outage_s"] / 86400)
        filtered.append({
            "score": score,
            "availability": r["availability"],
            "total_cost": r["total_cost"],
            "max_outage_s": r["max_outage_s"],
            "k_failed": r["k_failed"],
            "stage": r["stage"],
            "failed_satellites": r.get("failed_satellites", [])
        })
        
    filtered.sort(key=lambda x: x["score"], reverse=True)
    return {"filtered_results": filtered[:100]} # Return top 100

@app.get("/", response_class=HTMLResponse)
def index_page():
    dist_index = BASE_DIR / "frontend" / "dist" / "index.html"
    if dist_index.exists():
        return HTMLResponse(content=dist_index.read_text(encoding='utf-8'))
    
    dev_index = BASE_DIR / "frontend" / "index.html"
    if dev_index.exists():
        return HTMLResponse(content=dev_index.read_text(encoding='utf-8'))
    
    return HTMLResponse(content="<h1>CosmoHack Web Interface</h1><p>Frontend distribution file not found.</p>")
