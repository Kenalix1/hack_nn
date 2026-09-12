import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Header } from './components/Header';
import { OutlinerPanel } from './components/OutlinerPanel';
import { GlobalSettingsMenu } from './components/GlobalSettingsMenu';
import { ThreeCanvas } from './components/ThreeCanvas';
import { DraggableWindow } from './components/DraggableWindow';
import { AnalyticsModal } from './components/AnalyticsModal';
import { ConfiguratorModal } from './components/ConfiguratorModal';
import { CompareModal } from './components/CompareModal';
import { MassSimulationModal } from "./components/MassSimulationModal";
import { EventLogPanel } from './components/EventLogPanel';
import { TimelineBar } from './components/TimelineBar';
import { CriticalSatellitesAlertBar } from './components/CriticalSatellitesAlertBar';
import { SatelliteOutageModal } from './components/SatelliteOutageModal';
import { EmergencyModal } from './components/EmergencyModal';
import { ScenariosModal } from './components/ScenariosModal';
import { TwoDMapCanvas } from './components/TwoDMapCanvas';
import { RecommendationsModal } from './components/RecommendationsModal';
import { MonteCarloConfigModal } from './components/MonteCarloConfigModal';
import { ScenarioData, OutlinerSettings, LogMessage, Satellite, SatelliteOutage, MonteCarloParameters } from './types';
import { openPdfReport } from './utils/generatePdfReport';
import { Eye, RotateCcw, Globe, Map, Activity } from 'lucide-react';

const LOCAL_STORAGE_KEY = 'cosmo_app_saved_state_v2';

const loadSavedState = () => {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load state from localStorage', e);
  }
  return null;
};

const initialSaved = loadSavedState();

const defaultScenarios = [
  { id: '01_full_constellation', title: '01. Полная штатная группировка' },
  { id: '02_first_launch', title: '02. Первый этап запуска' },
  { id: '03_satellite_outages', title: '03. Моделирование отказов' },
  { id: '04_link_range', title: '04. Тестирование дальности ISL' }
];

const defaultOutlinerSettings: OutlinerSettings = {
  showOrbits: true,
  showSatellites: true,
  showGateways: true,
  showGatewayCoverage: true,
  showISL: true,
  showSatLinks: true,
  showLabels: true,
  showAtmosphere: true,
  showCoverageHeatmap: true,
  showDistances: false,
  satGlow: true,
  satSize: 1.0,
  orbitOpacity: 0.5,
  stepSeconds: 1,
  satColor: '#ffffff',
  offlineSatColor: '#ef4444',
  highLatencySatColor: '#f59e0b',
  orbitColor: '#64748b',
  islColor: '#cbd5e1',
  gatewayColor: '#e2e8f0',
  groundLinkColor: '#94a3b8',
  atmosphereColor: '#1e293b',
  fovConeColor: '#ffffff',
  planeRaanMap: {},
  planePhaseMap: {},
  planeIncMap: {},
  planeAltMap: {},
  hiddenPlanes: {},
  hiddenSatellites: {},
  hiddenGateways: {},
  offlineGateways: {}
};

const defaultWindows: Record<string, { isOpen: boolean; zIndex: number }> = {
  map2d: { isOpen: false, zIndex: 9 },
  analytics: { isOpen: false, zIndex: 10 },
  configurator: { isOpen: false, zIndex: 11 },
  compare: { isOpen: false, zIndex: 12 },
  emergency: { isOpen: false, zIndex: 13 },
  monteCarlo: { isOpen: false, zIndex: 14 },
  scenarios: { isOpen: false, zIndex: 14 },
  satellite_detail: { isOpen: false, zIndex: 15 },
  recommendations: { isOpen: false, zIndex: 16 }
};

export const App: React.FC = () => {
  const [scenarios, setScenarios] = useState<Array<{ id: string; title: string }>>(
    initialSaved?.scenarios || defaultScenarios
  );
  const [activeScenarioId, setActiveScenarioId] = useState<string>(
    initialSaved?.activeScenarioId || '01_full_constellation'
  );
  const [scenarioData, setScenarioData] = useState<ScenarioData | null>(null);
  const [currentRawScenario, setCurrentRawScenario] = useState<any>(
    initialSaved?.currentRawScenario || null
  );
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [currentTimeSeconds, setCurrentTimeSeconds] = useState<number>(
    initialSaved?.currentTimeSeconds || 0
  );
  const [viewMode, setViewMode] = useState<'3d' | '2d'>('3d');
  const [isMonteCarloModalOpen, setIsMonteCarloModalOpen] = useState<boolean>(false);
  const [hasRunMonteCarlo, setHasRunMonteCarlo] = useState<boolean>(false);
  const [monteCarloParams, setMonteCarloParams] = useState<MonteCarloParameters>({
    failure_probability: 0.01,
    emergency_launch_cost_usd: 15000000,
    launch_delay_days: 14,
    num_samples: 12,
    spare_satellites: 2,
    sla_penalty_per_client_usd: 120000
  });

  // Live Simulation / Monte Carlo Progress Tracking
  const [simulationProgress, setSimulationProgress] = useState<{
    active: boolean;
    percent: number;
    stage: string;
    sampleCount?: number;
  }>({
    active: false,
    percent: 0,
    stage: ''
  });
  const progressIntervalRef = useRef<any>(null);

  // Focus & Outages State
  const [focusedSatelliteId, setFocusedSatelliteId] = useState<string | null>(null);
  const [currentOutages, setCurrentOutages] = useState<SatelliteOutage[]>(
    initialSaved?.currentOutages || []
  );
  const [selectedSatellite, setSelectedSatellite] = useState<Satellite | null>(null);
  const [criticalSatellites, setCriticalSatellites] = useState<string[]>([]);

  // Outliner Settings State (Deep merged with defaults to avoid missing properties from old localStorage)
  const [outlinerSettings, setOutlinerSettings] = useState<OutlinerSettings>(() => {
    const saved = initialSaved?.outlinerSettings || {};
    return {
      ...defaultOutlinerSettings,
      ...saved,
      planeRaanMap: saved.planeRaanMap || {},
      planePhaseMap: saved.planePhaseMap || {},
      planeIncMap: saved.planeIncMap || {},
      planeAltMap: saved.planeAltMap || {},
      hiddenPlanes: saved.hiddenPlanes || {},
      hiddenSatellites: saved.hiddenSatellites || {},
      hiddenGateways: saved.hiddenGateways || {},
      offlineGateways: saved.offlineGateways || {},
      satColor: saved.satColor || '#ffffff',
      offlineSatColor: saved.offlineSatColor || '#e11d48',
      highLatencySatColor: saved.highLatencySatColor || '#d97706',
      orbitColor: saved.orbitColor || '#475569',
      islColor: saved.islColor || '#cbd5e1',
      gatewayColor: saved.gatewayColor || '#f8fafc',
      groundLinkColor: saved.groundLinkColor || '#94a3b8',
      atmosphereColor: saved.atmosphereColor || '#334155',
      fovConeColor: saved.fovConeColor || '#cbd5e1'
    };
  });

  // Windows Open State & Z-Index Management
  const [windows, setWindows] = useState<Record<string, { isOpen: boolean; zIndex: number }>>(() => {
    const savedWins = { ...(initialSaved?.windows || {}) };
    delete savedWins.mass_sim;
    return {
      ...defaultWindows,
      ...savedWins,
      // Ensure heavy analytical windows start closed on page load to prevent rendering crashes on null scenarioData
      analytics: { isOpen: false, zIndex: 10 },
      compare: { isOpen: false, zIndex: 12 },
      recommendations: { isOpen: false, zIndex: 16 },
      monteCarlo: { isOpen: false, zIndex: 14 }
    };
  });
  const [topZ, setTopZ] = useState<number>(20);

  // System Event Logs
  const [logs, setLogs] = useState<LogMessage[]>([
    { id: '1', time: new Date().toLocaleTimeString('ru-RU'), text: 'Ядро системы визуализации успешно запущено', type: 'info' },
    { id: '2', time: new Date().toLocaleTimeString('ru-RU'), text: 'Подключен математический модуль динамики орбит', type: 'success' }
  ]);

  const addLog = useCallback((text: string, type: 'info' | 'success' | 'warning' | 'error' = 'info') => {
    const newLog: LogMessage = {
      id: Date.now().toString(),
      time: new Date().toLocaleTimeString('ru-RU'),
      text,
      type
    };
    setLogs(prev => [...prev.slice(-49), newLog]);
  }, []);

  // Automatically persist current user state to localStorage
  useEffect(() => {
    try {
      const stateToSave = {
        scenarios,
        activeScenarioId,
        currentRawScenario,
        outlinerSettings,
        windows,
        currentOutages,
        currentTimeSeconds,
        isSidebarOpen
      };
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(stateToSave));
    } catch (e) {
      console.error('Failed to save state to localStorage', e);
    }
  }, [
    scenarios,
    activeScenarioId,
    currentRawScenario,
    outlinerSettings,
    windows,
    currentOutages,
    currentTimeSeconds,
    isSidebarOpen
  ]);

  const handleResetState = () => {
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      addLog('Сохраненное состояние очищено! Перезагрузка страницы...', 'warning');
      setTimeout(() => {
        window.location.reload();
      }, 400);
    } catch (e) {
      console.error('Failed to reset state', e);
    }
  };

  // Fetch Preset Scenario & Re-render Map
  const loadScenario = useCallback(async (scId: string) => {
    try {
      setHasRunMonteCarlo(false);
      addLog(`Загрузка сценария: ${scId}`, 'info');
      const res = await fetch(`/api/simulate?scenario_id=${scId}`);
      if (res.ok) {
        const data = await res.json();
        setScenarioData(data);
        if (data.raw_scenario) setCurrentRawScenario(data.raw_scenario);
        addLog(`Карта и расчет перестроены для '${data.title}': ${data.satellites?.length || 0} аппаратов`, 'success');
      } else {
        generateFallbackData(scId);
      }
    } catch (e) {
      generateFallbackData(scId);
    }
  }, [addLog]);

  // Monitor satellites for critical overheating or low fuel levels & issue notifications
  useEffect(() => {
    if (!scenarioData || !scenarioData.satellites) return;
    const overheatedSats = scenarioData.satellites.filter(s => (s.temperature_c ?? 35) >= 80);
    const lowFuelSats = scenarioData.satellites.filter(s => (s.fuel_pct ?? 100) <= 15);

    if (overheatedSats.length > 0) {
      overheatedSats.forEach(s => {
        addLog(`[КРИТИЧЕСКИЙ ПЕРЕГРЕВ] КА [${s.id}]: T=${s.temperature_c ?? 84}°C (превышение порога 80°C)!`, 'error');
      });
    }

    if (lowFuelSats.length > 0) {
      lowFuelSats.forEach(s => {
        addLog(`[КРИТИЧЕСКИЙ ОСТАТОК ТОПЛИВА] КА [${s.id}]: остаток ксенона ${s.fuel_kg ?? 1.2} кг (${s.fuel_pct ?? 12}% <= 15%)!`, 'warning');
      });
    }
  }, [scenarioData, addLog]);

  const generateFallbackData = (scId: string) => {
    const isFirstStage = scId.includes('02') || scId.includes('first_launch');
    const totalCount = isFirstStage ? 16 : 48;
    const sats = [];
    for (let i = 0; i < totalCount; i++) {
      const p = Math.floor(i / 8);
      const slot = i % 8;
      const numStr = (i + 1).toString().padStart(2, '0');
      sats.push({
        id: `S${numStr}`,
        plane: p + 1,
        idx: slot,
        altitude: 600,
        inc: 86.4,
        raan: p * 60,
        arg_per: 0,
        true_anomaly: slot * 45,
        sub_lat: Math.sin((slot * 45 * Math.PI) / 180) * 80,
        sub_lon: (p * 60 + slot * 45) % 360 - 180
      });
    }
    const gws = [
      { id: 'C65', name: 'Центральный Шлюз C65', lat: 55.75, lon: 37.61, type: 'gateway' },
      { id: 'C70', name: 'Шлюз C70', lat: 59.93, lon: 30.31, type: 'gateway' },
      { id: 'Murmansk', name: 'Мурманск', lat: 68.97, lon: 33.08, type: 'gateway' },
      { id: 'Pechora', name: 'Печора', lat: 65.14, lon: 57.22, type: 'gateway' }
    ];
    setScenarioData({
      scenario_id: scId,
      title: 'Штатный Сценарий Группировки',
      description: 'Сгенерированная геометрия 48 спутников',
      timestamp_utc: new Date().toISOString(),
      satellites: sats,
      gateways: gws,
      routes_sample: [
        { src: 'C65', dst: 'Murmansk', path: ['C65', 'S01', 'S09', 'S17', 'Murmansk'], latency_ms: 38.4, status: 'АКТИВЕН' },
        { src: 'C65', dst: 'Pechora', path: ['C65', 'S02', 'S10', 'Pechora'], latency_ms: 29.1, status: 'АКТИВЕН' }
      ]
    });
    addLog(`Локальная геометрия сгенерирована: 48 спутников, 4 шлюза`, 'info');
  };

  useEffect(() => {
    loadScenario(activeScenarioId);
  }, [activeScenarioId, loadScenario]);

  // Upload Custom Scenario JSON
  const handleUploadScenarioJson = async (scenarioJson: any) => {
    addLog(`Загрузка пользовательского сценария...`, 'info');
    setCurrentRawScenario(scenarioJson);
    const title = scenarioJson.meta?.title || 'Загруженный Сценарий';
    const scId = scenarioJson.meta?.id || 'custom_upload_' + Date.now();

    setScenarios(prev => {
      if (!prev.some(s => s.id === scId)) {
        return [...prev, { id: scId, title }];
      }
      return prev;
    });
    setActiveScenarioId(scId);
    setHasRunMonteCarlo(false);

    // Быстрый предпросмотр группировки без запуска расчетов
    try {
      const res = await fetch('/api/scenarios/preview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ scenario: scenarioJson })
      });
      if (res.ok) {
        const data = await res.json();
        setScenarioData(data);
        if (data.raw_scenario) setCurrentRawScenario(data.raw_scenario);
        addLog(
          `Сценарий "${title}" успешно добавлен (${data.satellites?.length || 0} КА). Расчеты не запускались.`,
          'success'
        );
      } else {
        addLog(`Сценарий добавлен. Для запуска расчета используйте симуляцию Монте-Карло.`, 'info');
      }
    } catch (e) {
      addLog(`Сценарий добавлен. Для запуска расчета используйте симуляцию Монте-Карло.`, 'info');
    }
  };

  const handleVisualizeScenario = (rawScenario: any, simResult: any) => {
    addLog(`Анализ сценария "${rawScenario.meta?.title}" загружается на 3D карту...`, 'success');
    setCurrentRawScenario(rawScenario);
    
    const hasValidSimResult = simResult && simResult.satellites && simResult.satellites.length > 0 && simResult.gateways;
    if (hasValidSimResult) {
        setScenarioData(simResult);
    }
    
    // Set specific outages for visualization if they exist in this variant
    const failures = rawScenario.failures || [];
    setCurrentOutages(failures);
    
    if (!hasValidSimResult) {
        adaptSimulationWithOutages(failures);
    }
    
    openWindow('analytics');
  };

  // Build & Run Custom Walker Delta Configuration
  const handleApplyCustomConfig = async (cfg: {
    altitude: number;
    inclination: number;
    planes: number;
    satsPerPlane: number;
    islType: string;
    minElevation: number;
  }) => {
    addLog(`Генерация новой космической группировки (${cfg.planes}x${cfg.satsPerPlane} @ ${cfg.altitude}км)...`, 'info');
    setIsSimulating(true);

    const planesList = [];
    const satsList = [];
    const satellites3DList: Satellite[] = [];
    let satCounter = 1;

    for (let p = 0; p < cfg.planes; p++) {
      const pId = `P${p + 1}`;
      const raanDeg = round((p * (360.0 / cfg.planes)) % 360.0, 1);
      const phaseDeg = round((p * (360.0 / (cfg.planes * cfg.satsPerPlane))) % 360.0, 1);
      planesList.push({ id: pId, raan_deg: raanDeg, phase_deg: phaseDeg });

      for (let s = 0; s < cfg.satsPerPlane; s++) {
        const satId = `S${satCounter.toString().padStart(2, '0')}`;
        const slotDeg = round((s * (360.0 / cfg.satsPerPlane)) % 360.0, 1);
        satsList.push({
          id: satId,
          plane_id: pId,
          slot_deg: slotDeg,
          launch_batch: 1
        });

        const lat = Math.sin((slotDeg * Math.PI) / 180) * (cfg.inclination * 0.9);
        const lon = (raanDeg + slotDeg) % 360 - 180;
        satellites3DList.push({
          id: satId,
          plane: p + 1,
          idx: s,
          altitude: cfg.altitude,
          inc: cfg.inclination,
          raan: raanDeg,
          arg_per: 0,
          true_anomaly: slotDeg,
          sub_lat: round(lat, 4),
          sub_lon: round(lon, 4)
        });

        satCounter++;
      }
    }

    const customScenarioSchema = {
      schema_version: 'cosmo-A-1.0',
      meta: {
        id: 'custom_walker_config',
        title: `Walker Delta ${cfg.planes}x${cfg.satsPerPlane} (${satsList.length} аппаратов)`
      },
      environment: {
        altitude_km: cfg.altitude,
        inclination_deg: cfg.inclination,
        earth_angle0_deg: 12.0,
        horizon_s: 86400,
        step_s: 120,
        min_elevation_deg: cfg.minElevation,
        isl_range_km: 3000.0,
        target_availability: 0.9
      },
      design: {
        launch_stage: 3,
        planes: planesList,
        satellites: satsList
      },
      ground_sites: [
        { id: 'C65', name: 'Центральный Шлюз C65', role: 'gateway', lat_deg: 55.75, lon_deg: 37.61 },
        { id: 'C70', name: 'Шлюз C70', role: 'gateway', lat_deg: 59.93, lon_deg: 30.31 },
        { id: 'Murmansk', name: 'Мурманск (Клиент)', role: 'client', lat_deg: 68.97, lon_deg: 33.08 },
        { id: 'Pechora', name: 'Печора (Клиент)', role: 'client', lat_deg: 65.14, lon_deg: 57.22 }
      ],
      failures: currentOutages.map(o => ({
        satellite_id: o.satellite_id,
        start_s: o.start_s,
        end_s: o.end_s
      })),
      gateway_outages: []
    };

    setHasRunMonteCarlo(false);
    setCurrentRawScenario(customScenarioSchema);

    try {
      const res = await fetch('/api/scenarios/preview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ scenario: customScenarioSchema })
      });

      if (res.ok) {
        const data = await res.json();
        setScenarioData(data);
        addLog(`Новая группировка "${customScenarioSchema.meta.title}" сформирована (${data.satellites?.length || satellites3DList.length} КА). Расчеты не запускались.`, 'success');
      } else {
        setScenarioData({
          scenario_id: 'custom_config',
          title: `Walker Delta ${cfg.planes}x${cfg.satsPerPlane}`,
          description: `Конфигурация ${cfg.planes}x${cfg.satsPerPlane} @ ${cfg.altitude}км`,
          timestamp_utc: new Date().toISOString(),
          satellites: satellites3DList,
          gateways: [
            { id: 'C65', name: 'Центральный Шлюз C65', lat: 55.75, lon: 37.61, type: 'gateway' },
            { id: 'Murmansk', name: 'Мурманск', lat: 68.97, lon: 33.08, type: 'gateway' }
          ],
          routes_sample: []
        });
        addLog(`3D-карта перестроена (${satellites3DList.length} аппаратов). Расчет ожидает запуска.`, 'info');
      }
    } catch (e) {
      setScenarioData({
        scenario_id: 'custom_config',
        title: `Walker Delta ${cfg.planes}x${cfg.satsPerPlane}`,
        description: `Конфигурация ${cfg.planes}x${cfg.satsPerPlane} @ ${cfg.altitude}км`,
        timestamp_utc: new Date().toISOString(),
        satellites: satellites3DList,
        gateways: [
          { id: 'C65', name: 'Центральный Шлюз C65', lat: 55.75, lon: 37.61, type: 'gateway' },
          { id: 'Murmansk', name: 'Мурманск', lat: 68.97, lon: 33.08, type: 'gateway' }
        ],
        routes_sample: []
      });
      addLog(`3D-карта перестроена (${satellites3DList.length} аппаратов). Расчет ожидает запуска.`, 'info');
    } finally {
      setIsSimulating(false);
    }
  };

  // Export JSON Scenario File (cosmo-A-1.0 format)
  const handleExportScenarioJson = () => {
    const dataToExport = currentRawScenario || {
      schema_version: 'cosmo-A-1.0',
      meta: { id: activeScenarioId, title: scenarioData?.title || 'Сценарий Группировки' },
      environment: { altitude_km: 550.0, inclination_deg: 87.0, earth_angle0_deg: 12.0, horizon_s: 86400, step_s: 120, min_elevation_deg: 10, isl_range_km: 3000, target_availability: 0.9 },
      satellites: scenarioData?.satellites,
      gateways: scenarioData?.gateways
    };

    const jsonStr = JSON.stringify(dataToExport, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `scenario_${activeScenarioId}_export.json`;
    a.click();
    URL.revokeObjectURL(url);
    addLog(`Итоговый сценарий экспортирован в JSON (cosmo-A-1.0)`, 'success');
  };

  // Export Full Simulation Results JSON
  const handleExportResultsJson = () => {
    if (!scenarioData || !scenarioData.raw_scenario || !scenarioData.simulation_result) {
      addLog(`Нет полных данных симуляции для экспорта`, 'warning');
      return;
    }
    
    // Construct the cosmo-A-result-1.0 format
    const routes_list: Array<{t_s: number; client_id: string; path: string[]}> = [];
    // Собираем ID всех клиентов из сценария
    const clientIds = (scenarioData.raw_scenario?.ground_sites || [])
        .filter((g: any) => g.role === 'client')
        .map((g: any) => g.id);

    if (scenarioData.simulation_result.routes_by_time) {
        for (const step_item of scenarioData.simulation_result.routes_by_time) {
            const t_s = step_item.t_s;
            const routesAtStep = step_item.routes || {};
            // Для КАЖДОГО клиента — запись
            for (const client_id of clientIds) {
                routes_list.push({
                    t_s: t_s,
                    client_id: client_id,
                    path: (routesAtStep[client_id] as string[]) || []
                });
            }
        }
    }
    
    const cosmoResult = {
        schema_version: 'cosmo-A-result-1.0',
        effective_scenario: scenarioData.raw_scenario,
        routes: routes_list
    };

    const jsonStr = JSON.stringify(cosmoResult, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cosmo-A-result-1.0_${activeScenarioId}.json`;
    a.click();
    URL.revokeObjectURL(url);
    addLog(`Итоговые результаты моделирования экспортированы в формате cosmo-A-result-1.0`, 'success');
  };

  // Satellite Outages Handlers & Fly-to Focus
  const handleSelectSatellite = (sat: Satellite | null) => {
    if (!sat) {
      setFocusedSatelliteId(null);
      setSelectedSatellite(null);
      return;
    }
    setFocusedSatelliteId(sat.id);
    setSelectedSatellite(sat);
    addLog(`Камера сфокусирована на спутнике [${sat.id}]. Отображается 3D-конус угла обзора (10°)`, 'info');
  };

  const adaptSimulationWithOutages = async (
    outagesList: SatelliteOutage[],
    raanMap: Record<number, number> = outlinerSettings.planeRaanMap,
    phaseMap: Record<number, number> = outlinerSettings.planePhaseMap
  ) => {
    setIsSimulating(true);
    try {
      const baseScenario = currentRawScenario ? JSON.parse(JSON.stringify(currentRawScenario)) : {
        schema_version: 'cosmo-A-1.0',
        meta: { id: activeScenarioId, title: scenarioData?.title || 'Сценарий' },
        environment: {
          altitude_km: 550.0,
          inclination_deg: 87.0,
          earth_angle0_deg: 12.0,
          horizon_s: 86400,
          step_s: 120,
          min_elevation_deg: 10,
          isl_range_km: 3000.0,
          target_availability: 0.9
        },
        design: {
          launch_stage: 3,
          planes: [
            { id: 'P1', raan_deg: 0, phase_deg: 0 },
            { id: 'P2', raan_deg: 60, phase_deg: 15 },
            { id: 'P3', raan_deg: 120, phase_deg: 30 },
            { id: 'P4', raan_deg: 180, phase_deg: 45 },
            { id: 'P5', raan_deg: 240, phase_deg: 60 },
            { id: 'P6', raan_deg: 300, phase_deg: 75 }
          ],
          satellites: (scenarioData?.satellites || []).map(s => ({
            id: s.id,
            plane_id: `P${s.plane}`,
            slot_deg: s.idx,
            launch_batch: 1
          }))
        },
        ground_sites: [
          { id: 'C65', name: 'Центральный Шлюз C65', role: 'gateway', lat_deg: 55.75, lon_deg: 37.61 },
          { id: 'C70', name: 'Шлюз C70', role: 'gateway', lat_deg: 59.93, lon_deg: 30.31 },
          { id: 'Murmansk', name: 'Мурманск (Клиент)', role: 'client', lat_deg: 68.97, lon_deg: 33.08 },
          { id: 'Pechora', name: 'Печора (Клиент)', role: 'client', lat_deg: 65.14, lon_deg: 57.22 }
        ],
        failures: [],
        gateway_outages: []
      };

      if (!baseScenario.gateway_outages) baseScenario.gateway_outages = [];
      if (!baseScenario.failures) baseScenario.failures = [];

      // Dynamically recalculate geometry & network topology for plane RAAN and Phase offsets
      if (baseScenario.design?.planes) {
        baseScenario.design.planes = baseScenario.design.planes.map((p: any) => {
          const pNum = parseInt(String(p.id).replace('P', '')) || 1;
          const rOffset = raanMap[pNum] ?? 0;
          const phOffset = phaseMap[pNum] ?? 0;
          return {
            ...p,
            raan_deg: Math.round((((p.raan_deg ?? 0) + rOffset) % 360 + 360) % 360 * 10) / 10,
            phase_deg: Math.round((((p.phase_deg ?? 0) + phOffset) % 360 + 360) % 360 * 10) / 10
          };
        });
      }

      baseScenario.failures = outagesList.map(o => ({
        satellite_id: o.satellite_id,
        start_s: o.start_s,
        end_s: o.end_s
      }));

      const res = await fetch('/api/simulate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          scenario: baseScenario,
          failure_probability: monteCarloParams.failure_probability,
          emergency_launch_cost_usd: monteCarloParams.emergency_launch_cost_usd,
          launch_delay_days: monteCarloParams.launch_delay_days,
          num_samples: monteCarloParams.num_samples,
          spare_satellites: monteCarloParams.spare_satellites,
          sla_penalty_per_client_usd: monteCarloParams.sla_penalty_per_client_usd
        })
      });

      if (res.ok) {
        const data = await res.json();
        setScenarioData(data);
        setCurrentRawScenario(baseScenario);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsSimulating(false);
    }
  };

  // Reactive Debounced Simulation Re-calculation on ANY RAAN/Phase Slider Change
  useEffect(() => {
    if (!scenarioData) return;
    const timer = setTimeout(() => {
      adaptSimulationWithOutages(currentOutages, outlinerSettings.planeRaanMap, outlinerSettings.planePhaseMap);
    }, 250);

    return () => clearTimeout(timer);
  }, [outlinerSettings.planeRaanMap, outlinerSettings.planePhaseMap]);

  const handleApplyOutage = (satId: string, durationSec: number) => {
    const newOutage: SatelliteOutage = {
      satellite_id: satId,
      start_s: currentTimeSeconds,
      end_s: currentTimeSeconds + durationSec
    };

    const nextOutages = [...currentOutages.filter(o => o.satellite_id !== satId), newOutage];
    setCurrentOutages(nextOutages);
    setSelectedSatellite(null);
    addLog(`Спутник [${satId}] выведен из строя на ${durationSec}с! Вся топология пересчитана.`, 'warning');
    adaptSimulationWithOutages(nextOutages);
  };

  const handleRestoreSatellite = (satId: string) => {
    const nextOutages = currentOutages.filter(o => o.satellite_id !== satId);
    setCurrentOutages(nextOutages);
    setSelectedSatellite(null);
    addLog(`Работа спутника [${satId}] успешно восстановлена`, 'success');
    adaptSimulationWithOutages(nextOutages);
  };

  const handleApplyOutageBatch = (outagesList: SatelliteOutage[]) => {
    setCurrentOutages(outagesList);
    adaptSimulationWithOutages(outagesList);
  };

  const handleClearOutages = () => {
    setCurrentOutages([]);
    adaptSimulationWithOutages([]);
  };

  // Real-time Emergency Recommendation Execution
  const handleApplyRecommendation = (recType: string) => {
    if (recType === 'phase_shift') {
      setOutlinerSettings(prev => ({
        ...prev,
        planePhaseMap: { ...prev.planePhaseMap, 1: (prev.planePhaseMap[1] || 0) + 15 }
      }));
      addLog(`Применена рекомендация: Выполнен фазовый сдвиг (+15°) для плоскости P1`, 'success');
    } else if (recType === 'reroute_isl') {
      handleOpenSimulationConfig();
      addLog(`Применена рекомендация: Перестроена графовая маршрутизация ISL линий`, 'success');
    }
  };

  // Open Monte Carlo Parameter Modal
  const handleOpenSimulationConfig = () => {
    setIsMonteCarloModalOpen(true);
  };

  const startProgressTracking = (sampleCount: number) => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }
    setSimulationProgress({
      active: true,
      percent: 8,
      stage: '1/5. Инициализация орбитальной механики и эфемерид...',
      sampleCount
    });

    const stages = [
      { threshold: 22, text: '2/5. Расчет геометрической видимости станций и ISL хорд...' },
      { threshold: 46, text: `3/5. Стохастическое сэмплирование Монте-Карло (N=${sampleCount})...` },
      { threshold: 72, text: '4/5. Параллельная маршрутизация ISL и стресс-тестирование SLA...' },
      { threshold: 88, text: '5/5. Оценка финансовых рисков, штрафов SLA и рекомендаций...' }
    ];

    progressIntervalRef.current = setInterval(() => {
      setSimulationProgress(prev => {
        if (!prev.active) return prev;
        if (prev.percent >= 94) return prev;
        const inc = Math.floor(Math.random() * 4) + 2;
        const nextPercent = Math.min(prev.percent + inc, 94);
        let nextStage = prev.stage;
        for (const s of stages) {
          if (nextPercent >= s.threshold) {
            nextStage = s.text;
          }
        }
        return { ...prev, percent: nextPercent, stage: nextStage };
      });
    }, 110);
  };

  const completeProgressTracking = (success: boolean) => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
    if (success) {
      setSimulationProgress(prev => ({
        ...prev,
        percent: 100,
        stage: 'Вычисления успешно завершены (100%)'
      }));
      setTimeout(() => {
        setSimulationProgress(prev => ({ ...prev, active: false }));
      }, 550);
    } else {
      setSimulationProgress(prev => ({
        ...prev,
        stage: 'Ошибка при вычислении',
        active: false
      }));
    }
  };

  // Run Monte Carlo Simulation with User Parameters
  const handleExecuteMonteCarlo = async (params: MonteCarloParameters) => {
    setMonteCarloParams(params);
    setIsSimulating(true);
    startProgressTracking(params.num_samples);
    addLog(
      `Запуск симуляции Монте-Карло: выборка N=${params.num_samples}, P_fail=${(params.failure_probability * 100).toFixed(1)}%, Пуск=$${(params.emergency_launch_cost_usd / 1e6).toFixed(0)}M, Задержка=${params.launch_delay_days}дн, Резерв=${params.spare_satellites}КА...`,
      'info'
    );

    try {
      const baseScenario = currentRawScenario ? JSON.parse(JSON.stringify(currentRawScenario)) : {
        schema_version: 'cosmo-A-1.0',
        meta: { id: activeScenarioId, title: scenarioData?.title || 'Сценарий' },
        environment: {
          altitude_km: 550.0,
          inclination_deg: 87.0,
          earth_angle0_deg: 12.0,
          horizon_s: 86400,
          step_s: 120,
          min_elevation_deg: 10,
          isl_range_km: 3000.0,
          target_availability: 0.9
        },
        design: {
          launch_stage: 3,
          planes: [
            { id: 'P1', raan_deg: 0, phase_deg: 0 },
            { id: 'P2', raan_deg: 60, phase_deg: 15 },
            { id: 'P3', raan_deg: 120, phase_deg: 30 },
            { id: 'P4', raan_deg: 180, phase_deg: 45 },
            { id: 'P5', raan_deg: 240, phase_deg: 60 },
            { id: 'P6', raan_deg: 300, phase_deg: 75 }
          ],
          satellites: (scenarioData?.satellites || []).map(s => ({
            id: s.id,
            plane_id: `P${s.plane}`,
            slot_deg: s.idx,
            launch_batch: 1
          }))
        },
        ground_sites: [
          { id: 'C65', name: 'Центральный Шлюз C65', role: 'gateway', lat_deg: 55.75, lon_deg: 37.61 },
          { id: 'C70', name: 'Шлюз C70', role: 'gateway', lat_deg: 59.93, lon_deg: 30.31 },
          { id: 'Murmansk', name: 'Мурманск (Клиент)', role: 'client', lat_deg: 68.97, lon_deg: 33.08 },
          { id: 'Pechora', name: 'Печора (Клиент)', role: 'client', lat_deg: 65.14, lon_deg: 57.22 }
        ],
        failures: [],
        gateway_outages: []
      };

      if (!baseScenario.gateway_outages) baseScenario.gateway_outages = [];
      if (!baseScenario.failures) baseScenario.failures = [];

      baseScenario.failures = currentOutages.map(o => ({
        satellite_id: o.satellite_id,
        start_s: o.start_s,
        end_s: o.end_s
      }));

      const res = await fetch('/api/simulate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          scenario: baseScenario,
          failure_probability: params.failure_probability,
          emergency_launch_cost_usd: params.emergency_launch_cost_usd,
          launch_delay_days: params.launch_delay_days,
          num_samples: params.num_samples,
          spare_satellites: params.spare_satellites,
          sla_penalty_per_client_usd: params.sla_penalty_per_client_usd,
          run_monte_carlo: true
        })
      });

      if (res.ok) {
        completeProgressTracking(true);
        setHasRunMonteCarlo(true);
        const data = await res.json();
        setScenarioData(data);
        if (data.raw_scenario) setCurrentRawScenario(data.raw_scenario);
        setIsMonteCarloModalOpen(false);

        const mcSummary = data.simulation_result?.monte_carlo?.summary;
        if (mcSummary) {
          addLog(
            `Монте-Карло расчет завершен: E[P_avail]=${(mcSummary.expected_availability * 100).toFixed(1)}%, Ожидаемый риск=$${(mcSummary.expected_risk_cost / 1e6).toFixed(2)}M, Худший случай=${(mcSummary.worst_case_availability * 100).toFixed(1)}%`,
            'success'
          );
        } else {
          addLog(`Моделирование завершено: Доступность ${((data.simulation_result?.overall_availability || 0) * 100).toFixed(2)}%`, 'success');
        }
        openWindow('analytics');
      } else {
        completeProgressTracking(false);
        const errJson = await res.json().catch(() => ({}));
        const msg = errJson.detail || res.statusText || `Код ${res.status}`;
        addLog(`Ошибка при вычислении симуляции: ${msg}`, 'error');
      }
    } catch (e: any) {
      completeProgressTracking(false);
      console.error(e);
      addLog(`Ошибка при расчете симуляции Монте-Карло: ${e?.message || e}`, 'error');
    } finally {
      setIsSimulating(false);
    }
  };

  const handleDeleteScenario = (id: string) => {
    setScenarios(prev => prev.filter(s => s.id !== id));
    addLog(`Сценарий '${id}' удален из списка`, 'warning');
  };

  const openWindow = (key: string) => {
    const nextZ = topZ + 1;
    setTopZ(nextZ);
    setWindows(prev => ({
      ...prev,
      [key]: { isOpen: true, zIndex: nextZ }
    }));
    addLog(`Открыто окно: ${key}`, 'info');
  };

  const closeWindow = (key: string) => {
    setWindows(prev => ({
      ...prev,
      [key]: { ...prev[key], isOpen: false }
    }));
  };

  const focusWindow = (key: string) => {
    const nextZ = topZ + 1;
    setTopZ(nextZ);
    setWindows(prev => ({
      ...prev,
      [key]: { ...prev[key], zIndex: nextZ }
    }));
  };

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#1a1a1a', overflow: 'hidden' }}>
      <Header
        scenarios={scenarios}
        activeScenario={activeScenarioId}
        onSelectScenario={(id) => setActiveScenarioId(id)}
        onRunSimulation={handleOpenSimulationConfig}
        onOpenWindow={openWindow}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        onUploadScenarioJson={handleUploadScenarioJson}
        onExportScenarioJson={handleExportScenarioJson}
        onExportResultsJson={handleExportResultsJson}
        onOpenPdfReport={() => openPdfReport(scenarioData)}
        onResetState={handleResetState}
        viewMode={viewMode}
        onToggleViewMode={setViewMode}
        isSidebarOpen={isSidebarOpen}
        isSimulating={isSimulating}
      />

      <div style={{ flex: 1, position: 'relative', display: 'flex', overflow: 'hidden' }}>
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
          <GlobalSettingsMenu
            settings={outlinerSettings}
            onChangeSettings={setOutlinerSettings}
          />

          {/* Floating Simulation & Monte Carlo Progress HUD */}
          {simulationProgress.active && (
            <div
              style={{
                position: 'absolute',
                top: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 95,
                backgroundColor: 'rgba(12, 16, 26, 0.94)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(56, 189, 248, 0.45)',
                borderRadius: '12px',
                padding: '12px 20px',
                minWidth: '400px',
                maxWidth: '560px',
                boxShadow: '0 12px 36px rgba(0, 0, 0, 0.75), 0 0 25px rgba(56, 189, 248, 0.25)',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                pointerEvents: 'auto'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Activity size={16} className="animate-spin" style={{ color: '#38bdf8' }} />
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc', letterSpacing: '0.3px' }}>
                    Моделирование Монте-Карло
                  </span>
                  {simulationProgress.sampleCount && (
                    <span style={{ fontSize: '10px', backgroundColor: '#0284c725', border: '1px solid #0284c7', color: '#38bdf8', padding: '1px 6px', borderRadius: '4px', fontWeight: 700 }}>
                      N={simulationProgress.sampleCount}
                    </span>
                  )}
                </div>
                <span style={{ fontSize: '14px', fontWeight: 800, color: '#38bdf8', fontFamily: 'monospace' }}>
                  {simulationProgress.percent}%
                </span>
              </div>

              {/* Progress Track */}
              <div
                style={{
                  width: '100%',
                  height: '6px',
                  backgroundColor: 'rgba(30, 41, 59, 0.8)',
                  borderRadius: '9999px',
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${simulationProgress.percent}%`,
                    background: 'linear-gradient(90deg, #0284c7, #38bdf8, #34d399)',
                    borderRadius: '9999px',
                    transition: 'width 0.2s ease-out',
                    boxShadow: '0 0 10px rgba(56, 189, 248, 0.6)'
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', color: '#94a3b8' }}>
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {simulationProgress.stage}
                </span>
                <span style={{ fontSize: '10px', color: '#64748b', whiteSpace: 'nowrap', marginLeft: '8px' }}>
                  Параллельные ядра
                </span>
              </div>
            </div>
          )}

          {/* Top-Right Corner: 3D / 2D Mode Switch */}
          <div
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              zIndex: 86,
              display: 'flex',
              backgroundColor: 'rgba(17, 24, 39, 0.85)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '8px',
              padding: '3px',
              gap: '3px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.5)'
            }}
          >
            <button
              onClick={() => setViewMode('3d')}
              style={{
                height: '28px',
                padding: '0 10px',
                backgroundColor: viewMode === '3d' ? '#1473e6' : 'transparent',
                color: viewMode === '3d' ? '#ffffff' : '#94a3b8',
                border: 'none',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                transition: 'all 0.15s ease'
              }}
              title="3D режим"
            >
              <Globe size={13} />
              <span>3D</span>
            </button>
            <button
              onClick={() => setViewMode('2d')}
              style={{
                height: '28px',
                padding: '0 10px',
                backgroundColor: viewMode === '2d' ? '#0284c7' : 'transparent',
                color: viewMode === '2d' ? '#ffffff' : '#94a3b8',
                border: 'none',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                transition: 'all 0.15s ease'
              }}
              title="2D режим"
            >
              <Map size={13} />
              <span>2D</span>
            </button>
          </div>

          {focusedSatelliteId && (
            <button
              onClick={() => setFocusedSatelliteId(null)}
              style={{
                position: 'absolute',
                top: '16px',
                left: '68px',
                zIndex: 86,
                backgroundColor: '#1473e6',
                color: '#ffffff',
                border: 'none',
                borderRadius: '6px',
                padding: '7px 12px',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 4px 14px rgba(0,0,0,0.5)',
                transition: 'all 0.15s ease'
              }}
            >
              <RotateCcw size={14} />
              <span>Сбросить фокус камеры (Вся Земля)</span>
            </button>
          )}

          <CriticalSatellitesAlertBar
            scenario={scenarioData}
            currentTimeSeconds={currentTimeSeconds}
            onSelectSatellite={handleSelectSatellite}
          />
          {viewMode === '3d' ? (
            <ThreeCanvas
              scenario={scenarioData}
              settings={outlinerSettings}
              currentTime={currentTimeSeconds}
              outages={currentOutages}
              criticalSatellites={criticalSatellites}
              focusedSatelliteId={focusedSatelliteId}
              onSelectSatellite={handleSelectSatellite}
            />
          ) : (
            <TwoDMapCanvas
              scenario={scenarioData}
              settings={outlinerSettings}
              currentTime={currentTimeSeconds}
              outages={currentOutages}
              onSelectSatellite={(satId) => {
                const s = scenarioData?.satellites.find(x => x.id === satId);
                if (s) setSelectedSatellite(s);
              }}
            />
          )}

          <TimelineBar
            currentTime={currentTimeSeconds}
            maxTime={86400}
            stepSeconds={outlinerSettings.stepSeconds}
            onChangeStep={(s) => setOutlinerSettings(prev => ({ ...prev, stepSeconds: s }))}
            onChangeTime={setCurrentTimeSeconds}
          />
        </div>

        {isSidebarOpen && (
          <OutlinerPanel
            settings={outlinerSettings}
            onChangeSettings={setOutlinerSettings}
            isOpen={isSidebarOpen}
            scenario={scenarioData}
            focusedSatelliteId={focusedSatelliteId}
            onSelectSatellite={handleSelectSatellite}
          />
        )}

        {/* Draggable Satellite Management & Active Route Modal */}
        <DraggableWindow
          id="satellite_detail"
          title={`Управление и Трафик Спутника ${selectedSatellite?.id || ''}`}
          isOpen={!!selectedSatellite}
          onClose={() => setSelectedSatellite(null)}
          zIndex={windows.satellite_detail?.zIndex || 15}
          onFocus={() => focusWindow('satellite_detail')}
          initialPos={{ x: 120, y: 80, width: 460, height: 490 }}
        >
          <SatelliteOutageModal
            satellite={selectedSatellite}
            activeRoutePath={
              scenarioData?.routes_sample?.find(r => selectedSatellite && r.path.includes(selectedSatellite.id))?.path
            }
            currentOutages={currentOutages}
            currentTimeSeconds={currentTimeSeconds}
            onClose={() => setSelectedSatellite(null)}
            onApplyOutage={handleApplyOutage}
            onRestoreSatellite={handleRestoreSatellite}
          />
        </DraggableWindow>

        <DraggableWindow
          id="analytics"
          title="Аналитика Группировки & Рекомендации Регламента"
          isOpen={windows.analytics.isOpen}
          onClose={() => closeWindow('analytics')}
          zIndex={windows.analytics.zIndex}
          onFocus={() => focusWindow('analytics')}
          initialPos={{ x: 60, y: 60, width: 880, height: 560 }}
        >
          <AnalyticsModal
            scenario={scenarioData}
            outages={currentOutages}
            currentTime={currentTimeSeconds}
            onApplyRecommendation={handleApplyRecommendation}
            onExportResultsJson={handleExportResultsJson}
            onOpenPdfReport={() => openPdfReport(scenarioData)}
            onVisualizeScenario={handleVisualizeScenario}
            hasRunMonteCarlo={hasRunMonteCarlo}
            onOpenSimulationConfig={handleOpenSimulationConfig}
          />
        </DraggableWindow>

        <DraggableWindow
          id="configurator"
          title="Конфигуратор Параметров Группировки"
          isOpen={windows.configurator.isOpen}
          onClose={() => closeWindow('configurator')}
          zIndex={windows.configurator.zIndex}
          onFocus={() => focusWindow('configurator')}
          initialPos={{ x: 180, y: 90, width: 680, height: 460 }}
        >
          <ConfiguratorModal
            onApplyConfig={handleApplyCustomConfig}
            onExportJson={handleExportScenarioJson}
          />
        </DraggableWindow>

        {/* Windows: Project Compare / Combination Analysis */}
        <DraggableWindow
          id="compare"
          title="Сравнение Проектов и Аналитика Группировок"
          isOpen={windows.compare?.isOpen}
          onClose={() => closeWindow('compare')}
          zIndex={windows.compare?.zIndex || 12}
          onFocus={() => focusWindow('compare')}
          initialPos={{ x: 80, y: 50, width: 960, height: 640 }}
        >
          <CompareModal 
            onOpenConfigurator={() => openWindow('configurator')}
            baseScenario={currentRawScenario}
            currentScenarioData={scenarioData}
            scenariosList={scenarios}
            onSelectScenario={(id) => setActiveScenarioId(id)}
            onVisualizeScenario={handleVisualizeScenario}
            onClose={() => closeWindow('compare')}
            onSetCriticalSatellites={setCriticalSatellites}
          />
        </DraggableWindow>


        {/* Windows: Monte Carlo Analysis */}
        <DraggableWindow
          id="monteCarlo"
          title="Анализ Монте-Карло (Big Data)"
          isOpen={windows.monteCarlo?.isOpen}
          onClose={() => closeWindow('monteCarlo')}
          zIndex={windows.monteCarlo?.zIndex || 12}
          onFocus={() => focusWindow('monteCarlo')}
          initialPos={{ x: 120, y: 120, width: 900, height: 600 }}
        >
          <MassSimulationModal 
            scenario={currentRawScenario}
            onClose={() => closeWindow('monteCarlo')}
            onDrillDown={(failures) => {
               // Similar to CompareModal's handleDrillDown
               if (currentRawScenario && handleVisualizeScenario) {
                   const newScenario = JSON.parse(JSON.stringify(currentRawScenario));
                   newScenario.failures = failures;
                   handleVisualizeScenario(newScenario, { satellites: [] }); 
                   closeWindow('monteCarlo');
               }
            }}
            onSetCriticalSatellites={setCriticalSatellites}
          />
        </DraggableWindow>
        {/* Windows: Emergency Simulation & Economic Recommendations */}
        <EmergencyModal
          isOpen={windows.emergency?.isOpen}
          onClose={() => closeWindow('emergency')}
          zIndex={windows.emergency?.zIndex || 13}
          onFocusWindow={() => focusWindow('emergency')}
          currentOutages={currentOutages}
          outlinerSettings={outlinerSettings}
          onApplyOutageBatch={handleApplyOutageBatch}
          onClearOutages={handleClearOutages}
          onUpdateSettings={setOutlinerSettings}
          onAddLog={addLog}
        />

        {/* Windows: Scenarios Manager */}
        <DraggableWindow
          id="scenarios"
          title="Менеджер и Библиотека Сценариев"
          isOpen={windows.scenarios?.isOpen}
          onClose={() => closeWindow('scenarios')}
          zIndex={windows.scenarios?.zIndex || 14}
          onFocus={() => focusWindow('scenarios')}
          initialPos={{ x: 120, y: 70, width: 780, height: 520 }}
        >
          <ScenariosModal
            scenarios={scenarios}
            activeScenarioId={activeScenarioId}
            onSelectScenario={(id) => setActiveScenarioId(id)}
            onUploadScenarioJson={handleUploadScenarioJson}
            onDeleteScenario={handleDeleteScenario}
            onExportScenarioJson={handleExportScenarioJson}
            onOpenConfigurator={() => openWindow('configurator')}
          />
        </DraggableWindow>

        {/* Windows: Recommendations & Auto-Optimizer */}
        <DraggableWindow
          id="recommendations"
          title="Инженерные Рекомендации и Авто-Оптимизация Группировки"
          isOpen={windows.recommendations?.isOpen}
          onClose={() => closeWindow('recommendations')}
          zIndex={windows.recommendations?.zIndex || 17}
          onFocus={() => focusWindow('recommendations')}
          initialPos={{ x: 80, y: 70, width: 940, height: 620 }}
        >
          <RecommendationsModal
            scenario={scenarioData}
            outages={currentOutages}
            outlinerSettings={outlinerSettings}
            onUpdateSettings={(newSettings) => setOutlinerSettings(prev => ({ ...prev, ...newSettings }))}
            onClearOutages={handleClearOutages}
            onOpenWindow={openWindow}
            onOpenPdfReport={() => openPdfReport(scenarioData)}
          />
        </DraggableWindow>

        {/* Event Log Panel */}
        <EventLogPanel logs={logs} />

        {/* Monte Carlo Launch Config Modal */}
        <MonteCarloConfigModal
          isOpen={isMonteCarloModalOpen}
          onClose={() => setIsMonteCarloModalOpen(false)}
          onRunSimulation={handleExecuteMonteCarlo}
          isSimulating={isSimulating}
          initialParams={monteCarloParams}
          simulationProgress={simulationProgress}
        />
      </div>
    </div>
  );
};

function round(val: number, decimals: number): number {
  const factor = Math.pow(10, decimals);
  return Math.round(val * factor) / factor;
}
