"""
RAAN/Phase Optimizer — coarse-grained grid search.

Вместо 4D brute-force с MD5-хешем:
- 2D grid search (RAAN для P2 и P3, phase = 0)
- Реальная coarse-grained оценка доступности через geometry.snapshot + NetworkX
- 8 контрольных точек вместо 720 → ~36 расчётов за секунды
"""
from __future__ import annotations
import copy
import math
import networkx as nx
from backend import geometry


def coarse_availability(scenario: dict, n_checks: int = 8) -> float:
    """
    Быстрая оценка доступности: прогоняем n_checks равномерно
    распределённых snapshot'ов, строим граф, проверяем наличие пути
    client→gateway. Возвращает среднюю долю (client, t) с путём.
    """
    env = scenario['environment']
    design = scenario['design']
    horizon = env['horizon_s']
    min_elev = env['min_elevation_deg']

    clients = [g for g in scenario['ground_sites'] if g['role'] == 'client']
    gateways = [g for g in scenario['ground_sites'] if g['role'] == 'gateway']
    gateway_ids = {g['id'] for g in gateways}

    if not clients or not gateways:
        return 0.0

    # Равномерно распределённые точки по горизонту
    step = max(1, horizon // n_checks)
    check_times = list(range(0, horizon, step))

    total_checks = 0
    connected_checks = 0

    for t_s in check_times:
        snap = geometry.snapshot(scenario, t_s)
        active_sats = {s['id'] for s in snap['satellites'] if s['active']}

        # Строим граф
        G = nx.Graph()
        for sid in active_sats:
            G.add_node(sid, type='sat')
        for g in scenario['ground_sites']:
            G.add_node(g['id'], type=g['role'])
        for u, v, dist in snap['edges']:
            G.add_edge(u, v, weight=dist)

        # Проверяем offline шлюзы
        offline_gws = {
            f['gateway_id']
            for f in scenario.get('gateway_outages', [])
            if f['start_s'] <= t_s < f['end_s']
        }
        active_gws = [gid for gid in gateway_ids if gid not in offline_gws]

        for c in clients:
            cid = c['id']
            total_checks += 1

            # Проверяем видимость
            elevations = snap['elevation_deg'].get(cid, {})
            visible = [sid for sid, el in elevations.items()
                       if el >= min_elev and sid in active_sats]
            if not visible or not active_gws:
                continue

            # Проверяем наличие пути до любого шлюза
            for gw in active_gws:
                if G.has_node(cid) and G.has_node(gw) and nx.has_path(G, cid, gw):
                    connected_checks += 1
                    break  # хотя бы один шлюз — достаточно

    return connected_checks / max(1, total_checks)


def modify_planes(base_scenario: dict,
                  raan_offsets: list[float],
                  phase_offsets: list[float]) -> dict:
    """Создаёт копию сценария с модифицированными углами плоскостей."""
    sc = copy.deepcopy(base_scenario)
    for i, p in enumerate(sc['design']['planes']):
        if i < len(raan_offsets):
            p['raan_deg'] = (p['raan_deg'] + raan_offsets[i]) % 360.0
        if i < len(phase_offsets):
            p['phase_deg'] = (p['phase_deg'] + phase_offsets[i]) % 360.0
    return sc


def optimize_raan_phase(base_scenario: dict,
                        step_deg: int = 30,
                        top_n: int = 5) -> list[tuple[float, dict]]:
    """
    Grid search по RAAN для плоскостей P2 и P3.
    Фиксируем P1 (RAAN=0, Phase=0).
    Phase для P2/P3 варьируем с крупным шагом.

    Возвращает top_n лучших конфигураций: [(score, scenario), ...]
    """
    planes = base_scenario['design']['planes']
    n_planes = len(planes)

    if n_planes < 2:
        score = coarse_availability(base_scenario)
        return [(score, copy.deepcopy(base_scenario))]

    best_params: list[tuple[float, list[float], list[float]]] = []

    # Для каждой дополнительной плоскости (кроме P1) — варьируем RAAN
    # Phase фиксируем для скорости
    raan_range = list(range(0, 180, step_deg))
    phase_range = [0.0]

    if n_planes == 2:
        for dr2 in raan_range:
            for dp2 in phase_range:
                raan_offsets = [0.0, float(dr2)]
                phase_offsets = [0.0, dp2]
                sc = modify_planes(base_scenario, raan_offsets, phase_offsets)
                score = coarse_availability(sc)
                best_params.append((score, raan_offsets, phase_offsets))
    elif n_planes >= 3:
        for dr2 in raan_range:
            for dr3 in raan_range:
                for dp2 in phase_range:
                    raan_offsets = [0.0, float(dr2), float(dr3)]
                    phase_offsets = [0.0, dp2, 0.0]
                    sc = modify_planes(base_scenario, raan_offsets, phase_offsets)
                    score = coarse_availability(sc)
                    best_params.append((score, raan_offsets, phase_offsets))

    # Сортируем и берём top_n
    best_params.sort(key=lambda x: x[0], reverse=True)
    best_params = best_params[:top_n]

    results = []
    for score, raan_offs, phase_offs in best_params:
        sc = modify_planes(base_scenario, raan_offs, phase_offs)
        results.append((score, sc))

    return results
