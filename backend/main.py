from __future__ import annotations
import os
import sys
import glob
import json
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

@app.post("/api/simulate")
def simulate(req: SimulateRequest):
    try:
        scenario = req.scenario
        geometry.validate(scenario)
        result = run_simulation(scenario)
        return result
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

@app.get("/", response_class=HTMLResponse)
def index_page():
    index_file = BASE_DIR / "frontend" / "index.html"
    if index_file.exists():
        return HTMLResponse(content=index_file.read_text(encoding='utf-8'))
    return HTMLResponse(content="<h1>CosmoHack Web Interface</h1><p>Frontend file index.html not found.</p>")
