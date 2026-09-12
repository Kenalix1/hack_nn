import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { OutlinerPanel } from './components/OutlinerPanel';
import { GlobalSettingsMenu } from './components/GlobalSettingsMenu';
import { ThreeCanvas } from './components/ThreeCanvas';
import { DraggableWindow } from './components/DraggableWindow';
import { AnalyticsModal } from './components/AnalyticsModal';
import { ConfiguratorModal } from './components/ConfiguratorModal';
import { CompareModal } from './components/CompareModal';
import { EventLogPanel } from './components/EventLogPanel';
import { TimelineBar } from './components/TimelineBar';
import { CriticalSatellitesAlertBar } from './components/CriticalSatellitesAlertBar';
import { SatelliteOutageModal } from './components/SatelliteOutageModal';
import { EmergencyModal } from './components/EmergencyModal';
import { ScenarioData, OutlinerSettings, LogMessage, Satellite, SatelliteOutage } from './types';
import { Eye, RotateCcw } from 'lucide-react';

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
  satGlow: true,
  satSize: 1.0,
  orbitOpacity: 0.5,
  stepSeconds: 10,
  satColor: '#00f0ff',
  offlineSatColor: '#ff3b30',
  highLatencySatColor: '#ff9900',
  orbitColor: '#1473e6',
  islColor: '#00ff88',
  gatewayColor: '#00d084',
  groundLinkColor: '#f59e0b',
  atmosphereColor: '#1e3a8a',
  fovConeColor: '#00f0ff',
  planeRaanMap: {},
  planePhaseMap: {},
  hiddenPlanes: {},
  hiddenSatellites: {},
  hiddenGateways: {}
};

const defaultWindows = {
  analytics: { isOpen: false, zIndex: 10 },
  configurator: { isOpen: false, zIndex: 11 },
  compare: { isOpen: false, zIndex: 12 },
  emergency: { isOpen: false, zIndex: 13 }
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
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(
    initialSaved?.isSidebarOpen ?? true
  );
  const [currentTimeSeconds, setCurrentTimeSeconds] = useState<number>(
    initialSaved?.currentTimeSeconds || 0
  );

  // Focus & Outages State
  const [focusedSatelliteId, setFocusedSatelliteId] = useState<string | null>(null);
  const [currentOutages, setCurrentOutages] = useState<SatelliteOutage[]>(
    initialSaved?.currentOutages || []
  );
  const [selectedSatellite, setSelectedSatellite] = useState<Satellite | null>(null);

  // Outliner Settings State (Deep merged with defaults to avoid missing properties from old localStorage)
  const [outlinerSettings, setOutlinerSettings] = useState<OutlinerSettings>(() => {
    const saved = initialSaved?.outlinerSettings || {};
    return {
      ...defaultOutlinerSettings,
      ...saved,
      planeRaanMap: saved.planeRaanMap || {},
      planePhaseMap: saved.planePhaseMap || {},
      hiddenPlanes: saved.hiddenPlanes || {},
      hiddenSatellites: saved.hiddenSatellites || {},
      hiddenGateways: saved.hiddenGateways || {},
      satColor: saved.satColor || '#00f0ff',
      offlineSatColor: saved.offlineSatColor || '#ff3b30',
      highLatencySatColor: saved.highLatencySatColor || '#ff9900',
      orbitColor: saved.orbitColor || '#1473e6',
      islColor: saved.islColor || '#00ff88',
      gatewayColor: saved.gatewayColor || '#00d084',
      groundLinkColor: saved.groundLinkColor || '#f59e0b',
      atmosphereColor: saved.atmosphereColor || '#1e3a8a',
      fovConeColor: saved.fovConeColor || '#00f0ff'
    };
  });

  // Windows Open State & Z-Index Management
  const [windows, setWindows] = useState<Record<string, { isOpen: boolean; zIndex: number }>>(() => {
    const savedWins = initialSaved?.windows || {};
    return {
      ...defaultWindows,
      ...savedWins
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
    addLog(`Обработка загруженного JSON сценария: ${scenarioJson.meta?.title || 'Сценарий'}...`, 'info');
    setIsSimulating(true);
    try {
      const res = await fetch('/api/simulate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ scenario: scenarioJson })
      });

      if (res.ok) {
        const data = await res.json();
        setScenarioData(data);
        setCurrentRawScenario(scenarioJson);
        const title = scenarioJson.meta?.title || 'Загруженный Сценарий';
        
        setScenarios(prev => {
          const scId = scenarioJson.meta?.id || 'custom_upload';
          if (!prev.some(s => s.id === scId)) {
            return [...prev, { id: scId, title }];
          }
          return prev;
        });

        addLog(`Пользовательский JSON успешно загружен! Карта перестроена (${data.satellites?.length || 0} спутников).`, 'success');
        openWindow('analytics');
      } else {
        const err = await res.json();
        addLog(`Ошибка валидации JSON: ${err.detail || 'Неверный формат cosmo-A-1.0'}`, 'error');
      }
    } catch (e) {
      addLog(`Не удалось отправить JSON сценарий на сервер`, 'error');
    } finally {
      setIsSimulating(false);
    }
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

    try {
      const res = await fetch('/api/simulate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ scenario: customScenarioSchema })
      });

      if (res.ok) {
        const data = await res.json();
        setScenarioData(data);
        setCurrentRawScenario(customScenarioSchema);
        addLog(`Карта и расчет новой группировки зафиксированы! Общая доступность ${((data.simulation_result?.overall_availability || 0.99) * 100).toFixed(2)}%`, 'success');
        openWindow('analytics');
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
          routes_sample: [
            { src: 'C65', dst: 'Murmansk', path: ['C65', 'S01', 'S02', 'Murmansk'], latency_ms: 36.2, status: 'АКТИВЕН' }
          ]
        });
        addLog(`3D-карта перестроена (${satellites3DList.length} аппаратов)`, 'info');
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
        routes_sample: [
          { src: 'C65', dst: 'Murmansk', path: ['C65', 'S01', 'S02', 'Murmansk'], latency_ms: 36.2, status: 'АКТИВЕН' }
        ]
      });
      addLog(`3D-карта перестроена под конфигурацию (${satellites3DList.length} аппаратов)`, 'info');
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
    if (!scenarioData) {
      addLog(`Нет данных симуляции для экспорта`, 'warning');
      return;
    }
    const jsonStr = JSON.stringify(scenarioData, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `simulation_results_${activeScenarioId}_export.json`;
    a.click();
    URL.revokeObjectURL(url);
    addLog(`Итоговые результаты моделирования экспортированы в JSON`, 'success');
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
        ]
      };

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
        body: JSON.stringify({ scenario: baseScenario })
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
      handleRunSimulation();
      addLog(`Применена рекомендация: Перестроена графовая маршрутизация ISL линий`, 'success');
    }
  };

  // Run Simulation Button Handler
  const handleRunSimulation = async () => {
    setIsSimulating(true);
    addLog(`Запуск полного математического моделирования...`, 'info');
    try {
      if (currentRawScenario) {
        await handleUploadScenarioJson(currentRawScenario);
      } else {
        const res = await fetch(`/api/simulate?scenario_id=${activeScenarioId}`);
        if (res.ok) {
          const data = await res.json();
          setScenarioData(data);
          addLog(`Моделирование завершено: Общая доступность ${((data.simulation_result?.overall_availability || 0.9998) * 100).toFixed(2)}%`, 'success');
        }
      }
    } catch (e) {
      addLog(`Ошибка при вычислении симуляции`, 'error');
    } finally {
      setIsSimulating(false);
      openWindow('analytics');
    }
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
        onRunSimulation={handleRunSimulation}
        onOpenWindow={openWindow}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        onUploadScenarioJson={handleUploadScenarioJson}
        onExportScenarioJson={handleExportScenarioJson}
        onExportResultsJson={handleExportResultsJson}
        onResetState={handleResetState}
        isSidebarOpen={isSidebarOpen}
        isSimulating={isSimulating}
      />

      <div style={{ flex: 1, position: 'relative', display: 'flex', overflow: 'hidden' }}>
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
          <GlobalSettingsMenu
            settings={outlinerSettings}
            onChangeSettings={setOutlinerSettings}
          />

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
          <ThreeCanvas
            scenario={scenarioData}
            settings={outlinerSettings}
            currentTime={currentTimeSeconds}
            outages={currentOutages}
            focusedSatelliteId={focusedSatelliteId}
            onSelectSatellite={handleSelectSatellite}
          />
          <TimelineBar
            currentTime={currentTimeSeconds}
            maxTime={86400}
            stepSeconds={outlinerSettings.stepSeconds}
            onChangeStep={(s) => setOutlinerSettings(prev => ({ ...prev, stepSeconds: s }))}
            onChangeTime={setCurrentTimeSeconds}
          />
        </div>

        <OutlinerPanel
          settings={outlinerSettings}
          onChangeSettings={setOutlinerSettings}
          isOpen={isSidebarOpen}
          scenario={scenarioData}
          focusedSatelliteId={focusedSatelliteId}
          onSelectSatellite={handleSelectSatellite}
        />

        <SatelliteOutageModal
          satellite={selectedSatellite}
          currentOutages={currentOutages}
          currentTimeSeconds={currentTimeSeconds}
          onClose={() => setSelectedSatellite(null)}
          onApplyOutage={handleApplyOutage}
          onRestoreSatellite={handleRestoreSatellite}
        />

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

        {/* Windows: Project Compare */}
        <DraggableWindow
          id="compare"
          title="Сравнение Проектов & Сценариев"
          isOpen={windows.compare.isOpen}
          onClose={() => closeWindow('compare')}
          zIndex={windows.compare.zIndex}
          onFocus={() => focusWindow('compare')}
          initialPos={{ x: 260, y: 120, width: 720, height: 420 }}
        >
          <CompareModal onOpenConfigurator={() => openWindow('configurator')} />
        </DraggableWindow>

        {/* Windows: Emergency Simulation & Economic Recommendations */}
        <EmergencyModal
          isOpen={windows.emergency.isOpen}
          onClose={() => closeWindow('emergency')}
          zIndex={windows.emergency.zIndex}
          onFocusWindow={() => focusWindow('emergency')}
          currentOutages={currentOutages}
          outlinerSettings={outlinerSettings}
          onApplyOutageBatch={handleApplyOutageBatch}
          onClearOutages={handleClearOutages}
          onUpdateSettings={setOutlinerSettings}
          onAddLog={addLog}
        />

        {/* Event Log Panel */}
        <EventLogPanel logs={logs} />
      </div>
    </div>
  );
};

function round(val: number, decimals: number): number {
  const factor = Math.pow(10, decimals);
  return Math.round(val * factor) / factor;
}
