#!/usr/bin/env python3
import sys
import os
import json
import argparse
import base64
from pathlib import Path

# Add the project root to python path
sys.path.insert(0, str(Path(__file__).parent.parent))

from backend.scenario_generator import generate_scenarios
from backend.parallel_runner import run_mass_simulation
from backend.analytics import aggregate_results

def generate_report(scenario_path: str, samples: int, output_file: str):
    import matplotlib
    matplotlib.use('Agg')
    import matplotlib.pyplot as plt

    with open(scenario_path, 'r', encoding='utf-8') as f:
        base_scenario = json.load(f)
        
    print(f"Generating Monte Carlo scenarios (samples: {samples})...")
    settings_dict = {
        'unit_capex_usd': 650000.0,
        'annual_opex_per_sat_usd': 45000.0,
        'sla_penalty_per_client_usd': 120000.0,
        'processing_delay_ms': 5.0,
        'failure_probability': 0.01,
        'emergency_launch_cost_usd': 15000000.0,
    }
    
    scenarios = generate_scenarios(base_scenario, samples, settings_dict)
    
    print(f"Running mass simulation ({len(scenarios)} combinations)...")
    def on_progress(completed, total, result):
        if completed % 10 == 0 or completed == total:
            sys.stdout.write(f"\rProgress: {completed}/{total}")
            sys.stdout.flush()
            
    raw_results = run_mass_simulation(scenarios, settings_dict, on_progress)
    print("\nSimulations completed. Aggregating results...")
    
    res = aggregate_results(raw_results)
    
    # Text info
    avail = res['expected_availability'] * 100
    risk = res['expected_risk']
    tco = res['tco_annual']
    
    vuln_ranking = res['vulnerability_ranking']
    top_vuln_md = ""
    for v in vuln_ranking[:5]:
        top_vuln_md += f"* **[{v['satellite_id']}]**: {v['avg_impact']*-100:.2f}% доступности при отказе\n"
        
    print(f"\nExpected availability: {avail:.2f}%")
    print(f"Expected financial risk: ${risk:,.0f}")
    print(f"TCO: ${tco:,.0f}")
    
    # Plot histograms
    avail_data = [r['availability']*100 for r in raw_results]
    cost_data = [r['total_cost']/1e6 for r in raw_results]
    
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 5))
    
    ax1.hist(avail_data, bins=20, color='skyblue', edgecolor='black')
    ax1.set_title('Распределение доступности')
    ax1.set_xlabel('Доступность (%)')
    ax1.set_ylabel('Частота')
    
    ax2.hist(cost_data, bins=20, color='salmon', edgecolor='black')
    ax2.set_title('Распределение фин. рисков')
    ax2.set_xlabel('Стоимость (млн. $)')
    ax2.set_ylabel('Частота')
    
    plt.tight_layout()
    chart_path = "mc_chart.png"
    plt.savefig(chart_path)
    plt.close()
    
    with open(chart_path, "rb") as image_file:
        encoded_string = base64.b64encode(image_file.read()).decode()
        
    img_data_uri = f"data:image/png;base64,{encoded_string}"
    
    md_content = f"""# Отчет по симуляции Monte Carlo

**Сценарий:** `{os.path.basename(scenario_path)}`
**Количество попыток:** {samples}

## Основные показатели
- **Ожидаемая доступность:** {avail:.2f}%
- **Ожидаемый финансовый риск:** ${risk:,.0f}
- **ТСО (Годовая стоимость владения):** ${tco:,.0f}

## Топ Уязвимых Спутников
{top_vuln_md}

## Графики распределений
![Гистограммы]({img_data_uri})

"""
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(md_content)
        
    print(f"\nReport generated successfully: {output_file}")
    
    if os.path.exists(chart_path):
        os.remove(chart_path)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Generate Monte Carlo Report")
    parser.add_argument("--scenario", type=str, required=True, help="Path to scenario JSON file")
    parser.add_argument("--samples", type=int, default=200, help="Number of Monte Carlo samples")
    parser.add_argument("--output", type=str, default="monte_carlo_report.md", help="Output markdown file")
    
    args = parser.parse_args()
    generate_report(args.scenario, args.samples, args.output)
