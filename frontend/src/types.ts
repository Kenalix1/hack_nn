export interface Satellite {
  id: string;
  plane: number;
  idx: number;
  altitude: number;
  inc: number;
  raan: number;
  arg_per: number;
  true_anomaly: number;
  sub_lat: number;
  sub_lon: number;
  active?: boolean;
  temperature_c?: number;
  overheated?: boolean;
  fuel_kg?: number;
  fuel_max_kg?: number;
  fuel_pct?: number;
  battery_pct?: number;
  is_in_sunlight?: boolean;
  solar_power_w?: number;
}

export interface Gateway {
  id: string;
  name: string;
  lat: number;
  lon: number;
  type: string;
}

export interface ClientSummary {
  id: string;
  name: string;
  lat_deg: number;
  lon_deg: number;
  visibility_ratio: number;
  availability_ratio: number;
  target_availability: number;
  target_met: boolean;
  max_outage_s: number;
  outage_count: number;
  outage_causes: {
    no_visible_sat: number;
    isl_disconnected: number;
    gateway_unreachable: number;
  };
  avg_hops: number | null;
  avg_distance_km: number | null;
  time_series?: Array<{
    t_s: number;
    path: string[];
    connected: boolean;
    cause: string | null;
  }>;
}

export interface EconomicAnalysisData {
  unit_capex_usd: number;
  annual_opex_usd: number;
  annual_sla_penalties_usd: number;
  total_capex_usd: number;
  total_annual_cost_usd: number;
  unmet_clients_count: number;
  economic_recommendations: string[];
}

export interface SimulationResultData {
  total_satellites: number;
  active_satellites: number;
  overall_availability: number;
  all_targets_met: boolean;
  client_summaries: ClientSummary[];
  vulnerability: {
    top_used_satellites: Array<{ satellite_id: string; route_appearances: number }>;
  };
  economic_analysis?: EconomicAnalysisData;
  satellites_status?: Record<string, {
    satellite_id: string;
    temperature_c: number;
    overheated: boolean;
    fuel_kg: number;
    fuel_pct: number;
  }>;
  critical_alerts?: CriticalAlert[];
  time_steps: number[];
  routes_by_time: Array<{
    t_s: number;
    routes: Record<string, string[]>;
  }>;
  recommendations?: string[];
}

export interface CriticalAlert {
  satellite_id: string;
  type: 'overheat' | 'low_fuel';
  severity: 'critical' | 'warning';
  title: string;
  message: string;
}

export interface SatelliteOutage {
  satellite_id: string;
  start_s: number;
  end_s: number;
}

export interface ScenarioData {
  scenario_id: string;
  title: string;
  description: string;
  timestamp_utc: string;
  satellites: Satellite[];
  gateways: Gateway[];
  outages?: SatelliteOutage[];
  raw_scenario?: any;
  routes_sample: Array<{
    src: string;
    dst: string;
    path: string[];
    latency_ms: number;
    status: string;
  }>;
  simulation_result?: SimulationResultData;
}

export interface OutlinerSettings {
  showOrbits: boolean;
  showSatellites: boolean;
  showGateways: boolean;
  showISL: boolean;
  showSatLinks: boolean;
  showLabels: boolean;
  showAtmosphere: boolean;
  showCoverageHeatmap?: boolean;
  showDistances?: boolean;
  satGlow: boolean;
  satSize: number;
  orbitOpacity: number;
  stepSeconds: number;
  activeColorTheme?: string;
  satColor: string;
  offlineSatColor: string;
  highLatencySatColor: string;
  orbitColor: string;
  islColor: string;
  gatewayColor: string;
  groundLinkColor: string;
  atmosphereColor: string;
  fovConeColor: string;
  planeRaanMap: Record<number, number>;
  planePhaseMap: Record<number, number>;
}

export interface WindowState {
  x: number;
  y: number;
  width: number;
  height: number;
  isMaximized: boolean;
  isMinimized: boolean;
  zIndex: number;
}

export interface LogMessage {
  id: string;
  time: string;
  text: string;
  type: 'info' | 'success' | 'warning' | 'error';
}
