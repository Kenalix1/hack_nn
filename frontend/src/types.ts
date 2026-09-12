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
  monte_carlo?: MonteCarloData;
}

export interface MonteCarloScenarioResult {
  scenario_meta: { id: string; title: string };
  mc_type: string;
  mc_prob: number;
  mc_failed_count: number;
  failed_sat_ids?: string[];
  remediation_plan: string;
  remediation_cost: number;
  remediation_delay_days?: number;
  risk_expectation: number;
  overall_availability: number;
  all_targets_met: boolean;
  total_annual_cost_usd: number;
  simulation_result?: any;
  raw_scenario?: any;
  severity_tier?: 'best' | 'worst' | 'moderate';
  severity_label?: string;
  is_best_case?: boolean;
  is_worst_case?: boolean;
  title?: string;
  failed_count?: number;
}

export interface MonteCarloCaseDetail {
  title: string;
  overall_availability: number;
  failed_count: number;
  failed_sat_ids?: string[];
  total_cost_usd: number;
  remediation_cost: number;
  remediation_plan: string;
  raw_scenario?: any;
  simulation_result?: any;
  scenario_meta?: { id: string; title: string };
  mc_failed_count?: number;
}

export interface MonteCarloParameters {
  failure_probability: number;
  emergency_launch_cost_usd: number;
  launch_delay_days: number;
  num_samples: number;
  spare_satellites: number;
  sla_penalty_per_client_usd?: number;
}

export interface MonteCarloSummary {
  expected_availability: number;
  worst_case_availability: number;
  expected_risk_cost: number;
  total_expected_cost: number;
  sla_breach_probability: number;
  critical_satellites: Array<{
    satellite_id: string;
    fail_count: number;
    impact_score: number;
  }>;
  parameters: MonteCarloParameters;
  best_case?: MonteCarloCaseDetail;
  worst_case?: MonteCarloCaseDetail;
}

export interface MonteCarloData {
  summary: MonteCarloSummary;
  combinations: MonteCarloScenarioResult[];
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
  showGatewayCoverage?: boolean;
  showISL: boolean;
  showSatLinks: boolean;
  showLabels: boolean;
  showAtmosphere: boolean;
  showCoverageHeatmap?: boolean;
  showTrafficLoad?: boolean;
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
  planeIncMap?: Record<number, number>;
  planeAltMap?: Record<number, number>;
  hiddenPlanes?: Record<number, boolean>;
  hiddenSatellites?: Record<string, boolean>;
  hiddenGateways?: Record<string, boolean>;
  offlineGateways?: Record<string, boolean>;
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
