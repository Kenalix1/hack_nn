from __future__ import annotations
import sys
import os
from pathlib import Path
import json
import math
import networkx as nx
import numpy as np

# Ensure geometry module from 'Расчетный модуль' can be imported
sys.path.append(str(Path(__file__).parent.parent / "Расчетный модуль"))
import geometry

def run_simulation(scenario: dict) -> dict:
    """
    Executes full time-series simulation for scenario over horizon_s with step_s.
    Computes topology, routes, outage breakdown, client metrics, and vulnerability stats.
    """
    geometry.validate(scenario)
    
    env = scenario['environment']
    design = scenario['design']
    ground_sites = scenario['ground_sites']
    horizon = env['horizon_s']
    step = env['step_s']
    min_elev = env['min_elevation_deg']
    
    clients = [g for g in ground_sites if g['role'] == 'client']
    gateways = [g for g in ground_sites if g['role'] == 'gateway']
    client_ids = [c['id'] for c in clients]
    gateway_ids = [g['id'] for g in gateways]
    
    time_steps = list(range(0, horizon, step))
    total_steps = len(time_steps)
    
    # Store results per timestamp
    snapshots = []
    # Store routes per timestamp & client: {t_s: {client_id: path}}
    routes_by_time = []
    
    # Client metric tracking
    client_stats = {
        c['id']: {
            'client_info': c,
            'visible_steps': 0,
            'connected_steps': 0,
            'outage_causes': {'no_visible_sat': 0, 'isl_disconnected': 0, 'gateway_unreachable': 0},
            'hop_counts': [],
            'path_lengths': [],
            'time_series': [] # {t_s, visible_sats, path, connected, cause}
        }
        for c in clients
    }
    
    satellite_usage_count = {}
    
    for t_s in time_steps:
        snap = geometry.snapshot(scenario, t_s)
        snapshots.append(snap)
        
        # Build graph for routing
        G = nx.Graph()
        
        # Add satellite nodes
        active_sats = {sat['id'] for sat in snap['satellites'] if sat['active']}
        for sat_id in active_sats:
            G.add_node(sat_id, type='sat')
            
        # Add ground nodes
        for g in ground_sites:
            G.add_node(g['id'], type=g['role'])
            
        # Add edges from snap
        # Note: edges format in snapshot: [node1, node2, distance_km]
        for u, v, dist in snap['edges']:
            # Ground sites cannot relay, but can connect to satellites
            G.add_edge(u, v, weight=dist)
            
        # Check active gateways at t_s
        offline_gateways = {
            f['gateway_id'] 
            for f in scenario.get('gateway_outages', []) 
            if f['start_s'] <= t_s < f['end_s']
        }
        active_gateways = [gw_id for gw_id in gateway_ids if gw_id not in offline_gateways]
        
        step_routes = {}
        
        for c in clients:
            cid = c['id']
            elevations = snap['elevation_deg'].get(cid, {})
            visible_sats = [sid for sid, el in elevations.items() if el >= min_elev and sid in active_sats]
            has_visibility = len(visible_sats) > 0
            
            if has_visibility:
                client_stats[cid]['visible_steps'] += 1
                
            best_path = None
            best_length = float('inf')
            
            if has_visibility and active_gateways:
                # Find shortest path from client to any active gateway
                # Ground sites are not allowed to be intermediate hops!
                # We do this by searching paths where intermediate nodes are satellites.
                for gw in active_gateways:
                    if G.has_node(cid) and G.has_node(gw) and nx.has_path(G, cid, gw):
                        try:
                            # Shortest path by hop count or distance
                            p = nx.shortest_path(G, source=cid, target=gw, weight='weight')
                            # Verify no other ground site is in intermediate nodes
                            intermediate = p[1:-1]
                            if all(G.nodes[node]['type'] == 'sat' for node in intermediate):
                                length = nx.path_weight(G, p, weight='weight')
                                if length < best_length:
                                    best_length = length
                                    best_path = p
                        except (nx.NetworkXNoPath, nx.NodeNotFound):
                            pass
                            
            if best_path:
                client_stats[cid]['connected_steps'] += 1
                client_stats[cid]['hop_counts'].append(len(best_path) - 1)
                client_stats[cid]['path_lengths'].append(best_length)
                step_routes[cid] = best_path
                
                # Track satellite usage for vulnerability analysis
                for sid in best_path[1:-1]:
                    satellite_usage_count[sid] = satellite_usage_count.get(sid, 0) + 1
                    
                cause = None
            else:
                step_routes[cid] = []
                if not has_visibility:
                    cause = 'no_visible_sat'
                elif not active_gateways:
                    cause = 'gateway_unreachable'
                else:
                    cause = 'isl_disconnected'
                    
                client_stats[cid]['outage_causes'][cause] += 1
                
            client_stats[cid]['time_series'].append({
                't_s': t_s,
                'visible_sats': visible_sats,
                'path': step_routes[cid],
                'connected': best_path is not None,
                'cause': cause
            })
            
        routes_by_time.append({
            't_s': t_s,
            'routes': step_routes
        })
        
    # Process summary metrics for each client
    client_summaries = []
    target_avail = env['target_availability']
    
    for cid, data in client_stats.items():
        vis_ratio = data['visible_steps'] / total_steps
        conn_ratio = data['connected_steps'] / total_steps
        
        # Calculate outage intervals and max outage duration
        outage_intervals = []
        in_outage = False
        current_start = 0
        current_cause = None
        
        for entry in data['time_series']:
            if not entry['connected']:
                if not in_outage:
                    in_outage = True
                    current_start = entry['t_s']
                    current_cause = entry['cause']
            else:
                if in_outage:
                    in_outage = False
                    end_s = entry['t_s']
                    dur = end_s - current_start
                    outage_intervals.append({
                        'start_s': current_start,
                        'end_s': end_s,
                        'duration_s': dur,
                        'cause': current_cause
                    })
        if in_outage:
            end_s = horizon
            dur = end_s - current_start
            outage_intervals.append({
                'start_s': current_start,
                'end_s': end_s,
                'duration_s': dur,
                'cause': current_cause
            })
            
        max_outage_s = max([int(i['duration_s']) for i in outage_intervals], default=0)
        avg_hops = float(np.mean(data['hop_counts'])) if data['hop_counts'] else None
        avg_dist = float(np.mean(data['path_lengths'])) if data['path_lengths'] else None
        
        client_summaries.append({
            'id': cid,
            'name': data['client_info'].get('name', cid),
            'lat_deg': data['client_info']['lat_deg'],
            'lon_deg': data['client_info']['lon_deg'],
            'visibility_ratio': round(vis_ratio, 4),
            'availability_ratio': round(conn_ratio, 4),
            'target_availability': target_avail,
            'target_met': conn_ratio >= target_avail,
            'max_outage_s': max_outage_s,
            'outage_count': len(outage_intervals),
            'outage_intervals': outage_intervals,
            'outage_causes': data['outage_causes'],
            'avg_hops': round(avg_hops, 2) if avg_hops is not None else None,
            'avg_distance_km': round(avg_dist, 1) if avg_dist is not None else None,
            'time_series': data['time_series']
        })
        
    # Vulnerability Analysis
    top_used_satellites = sorted(
        [{'satellite_id': k, 'route_appearances': v} for k, v in satellite_usage_count.items()],
        key=lambda x: x['route_appearances'],
        reverse=True
    )
    
    # Overall summary
    overall_availability = round(float(np.mean([c['availability_ratio'] for c in client_summaries])), 4)
    all_targets_met = all(c['target_met'] for c in client_summaries)
    
    return {
        'scenario_meta': scenario.get('meta', {}),
        'environment': env,
        'design': design,
        'overall_availability': overall_availability,
        'all_targets_met': all_targets_met,
        'client_summaries': client_summaries,
        'vulnerability': {
            'top_used_satellites': top_used_satellites[:10]
        },
        'time_steps': time_steps,
        'routes_by_time': routes_by_time,
        'snapshots': snapshots
    }

def export_cosmo_result(scenario: dict, simulation_result: dict) -> dict:
    """
    Formats the simulation result into standard cosmo-A-result-1.0 JSON format.
    """
    routes_list = []
    for step_item in simulation_result['routes_by_time']:
        t_s = step_item['t_s']
        for client_id, path in step_item['routes'].items():
            routes_list.append({
                't_s': t_s,
                'client_id': client_id,
                'path': path
            })
            
    return {
        'schema_version': 'cosmo-A-result-1.0',
        'effective_scenario': scenario,
        'routes': routes_list
    }
