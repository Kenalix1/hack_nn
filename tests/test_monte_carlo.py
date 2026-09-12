import os
import json
import pytest
from pathlib import Path
from backend.scenario_generator import generate_scenarios
from backend.parallel_runner import run_mass_simulation
from backend.analytics import aggregate_results
from tests.scenario_fuzzer import generate_random_scenario

def load_preset_scenario():
    project_root = Path(__file__).parent.parent
    scenario_path = project_root / 'Расчетный модуль' / '03_satellite_outages.json'
    with open(scenario_path, 'r', encoding='utf-8') as f:
        return json.load(f)

# Parametrize with the preset scenario and 2 fuzzed scenarios
@pytest.mark.parametrize("scenario", [
    load_preset_scenario(),
    generate_random_scenario(seed=42),
    generate_random_scenario(seed=123)
])
def test_monte_carlo_analytics(scenario):
    settings_dict = {
        'unit_capex_usd': 650000.0,
        'annual_opex_per_sat_usd': 45000.0,
        'sla_penalty_per_client_usd': 120000.0,
        'processing_delay_ms': 5.0,
        'failure_probability': 0.01,
        'emergency_launch_cost_usd': 15000000.0,
    }
    
    # Use a small number of samples for the test
    num_samples = 10
    scenarios = generate_scenarios(scenario, num_samples, settings_dict)
    
    assert len(scenarios) > 0, "No scenarios generated"
    
    raw_results = run_mass_simulation(scenarios, settings_dict)
    
    assert len(raw_results) == len(scenarios), "Not all scenarios completed"
    
    res = aggregate_results(raw_results)
    
    # Assert that all required metrics are present and valid
    assert 'expected_availability' in res
    assert 0.0 <= res['expected_availability'] <= 1.0
    
    assert 'expected_risk' in res
    assert res['expected_risk'] >= 0
    
    assert 'tco_annual' in res
    assert res['tco_annual'] > 0
    
    assert 'vulnerability_ranking' in res
    assert isinstance(res['vulnerability_ranking'], list)

