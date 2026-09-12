import React, { useState, useEffect, useMemo } from 'react';
import {
  GitCompare,
  ArrowRight,
  Settings,
  CheckCircle2,
  XCircle,
  Clock,
  ShieldCheck,
  Globe,
  AlertTriangle,
  Zap,
  DollarSign,
  Activity,
  Play,
  BarChart3,
  Layers,
  ArrowUpDown,
  Radio,
  TrendingUp,
  TrendingDown,
  Sparkles,
  Sliders,
  ExternalLink
} from 'lucide-react';
import { ScenarioData } from '../types';

interface CompareModalProps {
  onOpenConfigurator?: () => void;
  baseScenario?: any;
  currentScenarioData?: ScenarioData | null;
  scenariosList?: Array<{ id: string; title: string }>;
  onSelectScenario?: (id: string) => void;
  onVisualizeScenario?: (scenarioJson: any, simResult: any) => void;
  onClose?: () => void;
  onSetCriticalSatellites?: (sats: string[]) => void;
}

export const CompareModal: React.FC<CompareModalProps> = ({
  onOpenConfigurator,
  baseScenario,
  currentScenarioData,
  scenariosList = [],
  onSelectScenario,
  onVisualizeScenario,
  onClose,
  onSetCriticalSatellites
}) => {
  const [activeTab, setActiveTab] = useState<'compare' | 'combinations'>('compare');

  // Comparison State
  const defaultAId = currentScenarioData?.scenario_id || scenariosList[0]?.id || '01_full_constellation';
  const defaultBId = scenariosList.find(s => s.id !== defaultAId)?.id || '02_first_launch';

  const [selectedAId, setSelectedAId] = useState<string>(defaultAId);
  const [selectedBId, setSelectedBId] = useState<string>(defaultBId);

  const [dataA, setDataA] = useState<ScenarioData | null>(currentScenarioData || null);
  const [dataB, setDataB] = useState<ScenarioData | null>(null);
  const [loadingB, setLoadingB] = useState<boolean>(false);
  const [selectedTerminalChart, setSelectedTerminalChart] = useState<string>('ALL');

  // Failure Combinations State
  const [combinations, setCombinations] = useState<any[]>([]);
  const [combSummary, setCombSummary] = useState<any | null>(null);
  const [loadingComb, setLoadingComb] = useState<boolean>(false);
  const [errorComb, setErrorComb] = useState<string | null>(null);
  const [isConfiguringComb, setIsConfiguringComb] = useState<boolean>(true);
  const [failureProb, setFailureProb] = useState<number>(0.01);
  const [launchCost, setLaunchCost] = useState<number>(15000000);
  const [launchDelay, setLaunchDelay] = useState<number>(14);
  const [spareSats, setSpareSats] = useState<number>(0);
  const [slaPenalty, setSlaPenalty] = useState<number>(30000);
  const [numSamples, setNumSamples] = useState<number>(24);
  const [combFilter, setCombFilter] = useState<'all' | 'worst' | 'best'>('all');
  const [combProgress, setCombProgress] = useState<{ percent: number; stage: string }>({
    percent: 0,
    stage: ''
  });

  const bestComb = useMemo(() => {
    if (combSummary?.best_case) return combSummary.best_case;
    if (combinations.length === 0) return null;
    return [...combinations].sort((a, b) => b.overall_availability - a.overall_availability)[0];
  }, [combSummary, combinations]);

  const worstComb = useMemo(() => {
    if (combSummary?.worst_case) return combSummary.worst_case;
    if (combinations.length === 0) return null;
    return [...combinations].sort((a, b) => a.overall_availability - b.overall_availability)[0];
  }, [combSummary, combinations]);

  const filteredCombinations = useMemo(() => {
    if (combFilter === 'worst') {
      return [...combinations].sort((a, b) => a.overall_availability - b.overall_availability);
    }
    if (combFilter === 'best') {
      return [...combinations].sort((a, b) => b.overall_availability - a.overall_availability);
    }
    return combinations;
  }, [combinations, combFilter]);

  // Sync Data A when currentScenarioData changes or selectedAId matches
  useEffect(() => {
    if (currentScenarioData && (currentScenarioData.scenario_id === selectedAId || `${selectedAId}.json` === currentScenarioData.scenario_id)) {
      setDataA(currentScenarioData);
    } else {
      const cleanId = selectedAId.replace('.json', '');
      fetch(`/api/simulate?scenario_id=${cleanId}`)
        .then(res => res.json())
        .then(json => setDataA(json))
        .catch(err => console.error('Failed to load scenario A:', err));
    }
  }, [selectedAId, currentScenarioData]);

  // Load Data B when selectedBId changes
  useEffect(() => {
    if (!selectedBId) return;
    const cleanId = selectedBId.replace('.json', '');
    setLoadingB(true);
    fetch(`/api/simulate?scenario_id=${cleanId}`)
      .then(res => res.json())
      .then(json => {
        setDataB(json);
        setLoadingB(false);
      })
      .catch(err => {
        console.error('Failed to load scenario B:', err);
        setLoadingB(false);
      });
  }, [selectedBId]);

  const handleSwap = () => {
    const tmpId = selectedAId;
    const tmpData = dataA;
    setSelectedAId(selectedBId);
    setSelectedBId(tmpId);
    setDataA(dataB);
    setDataB(tmpData);
  };

  const handleStartAnalysis = () => {
    if (!baseScenario) {
      setErrorComb("Не загружен базовый сценарий для анализа.");
      return;
    }

    setIsConfiguringComb(false);
    setLoadingComb(true);
    setCombProgress({
      percent: 10,
      stage: '1/5. Инициализация орбитальной группировки...'
    });

    const stages = [
      { threshold: 25, text: '2/5. Определение видимости станций и геометрии ISL хорд...' },
      { threshold: 50, text: `3/5. Стохастическая генерация выборки отказов (N=${numSamples})...` },
      { threshold: 75, text: '4/5. Многопоточная маршрутизация пакетов и расчет SLA...' },
      { threshold: 90, text: '5/5. Оценка финансовых рисков, штрафов SLA и ранжирование...' }
    ];

    const interval = setInterval(() => {
      setCombProgress(prev => {
        if (prev.percent >= 94) return prev;
        const inc = Math.floor(Math.random() * 4) + 2;
        const nextPercent = Math.min(prev.percent + inc, 94);
        let nextStage = prev.stage;
        for (const s of stages) {
          if (nextPercent >= s.threshold) nextStage = s.text;
        }
        return { percent: nextPercent, stage: nextStage };
      });
    }, 110);

    fetch('/api/analyze_combinations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        scenario: baseScenario,
        failure_probability: failureProb,
        emergency_launch_cost_usd: launchCost,
        launch_delay_days: launchDelay,
        spare_satellites: spareSats,
        sla_penalty_per_client_usd: slaPenalty,
        num_samples: numSamples
      })
    })
      .then(res => {
        if (!res.ok) throw new Error("Ошибка при генерации сценариев");
        return res.json();
      })
      .then(data => {
        clearInterval(interval);
        setCombProgress({ percent: 100, stage: 'Вычисления успешно завершены (100%)' });
        setTimeout(() => {
          setCombinations(data.combinations || []);
          setCombSummary(data.summary || null);
          setLoadingComb(false);
        }, 400);
      })
      .catch(err => {
        clearInterval(interval);
        console.error('Error fetching combinations', err);
        setErrorComb(err.message);
        setLoadingComb(false);
      });
  };

  // Extract comparison metrics
  const compMetrics = useMemo(() => {
    if (!dataA) return null;

    const rawAvailA = dataA.simulation_result?.overall_availability ?? 0.98;
    const availA = rawAvailA > 1 ? rawAvailA : rawAvailA * 100;
    const rawAvailB = dataB?.simulation_result?.overall_availability ?? 0.50;
    const availB = rawAvailB > 1 ? rawAvailB : rawAvailB * 100;
    const deltaAvail = availA - availB;

    const satsA = dataA.satellites?.length || 48;
    const satsB = dataB?.satellites?.length || 16;
    const deltaSats = satsA - satsB;

    const costA = dataA.simulation_result?.economic_analysis?.total_annual_cost_usd ?? 2160000;
    const costB = dataB?.simulation_result?.economic_analysis?.total_annual_cost_usd ?? 1080000;
    const deltaCost = costA - costB;

    const clientsA = dataA.simulation_result?.client_summaries || [];
    const clientsB = dataB?.simulation_result?.client_summaries || [];

    const maxOutageA = Math.max(...clientsA.map(c => c.max_outage_s || 0), 0);
    const maxOutageB = Math.max(...clientsB.map(c => c.max_outage_s || 0), 0);
    const deltaOutageMin = Math.round((maxOutageA - maxOutageB) / 60);

    const unmetA = clientsA.filter(c => !c.target_met).length;
    const unmetB = clientsB.filter(c => !c.target_met).length;

    // Detect parameter differences
    const envA = dataA.raw_scenario?.environment || {};
    const envB = dataB?.raw_scenario?.environment || {};
    const designA = dataA.raw_scenario?.design || {};
    const designB = dataB?.raw_scenario?.design || {};

    const paramDiffs: Array<{ param: string; valA: string; valB: string }> = [];

    if (designA.launch_stage !== designB.launch_stage) {
      paramDiffs.push({
        param: 'Очередь запуска (Этап)',
        valA: `Этап ${designA.launch_stage ?? 3} (${(designA.launch_stage ?? 3) * 16} КА)`,
        valB: `Этап ${designB.launch_stage ?? 1} (${(designB.launch_stage ?? 1) * 16} КА)`
      });
    }

    if (envA.isl_range_km !== envB.isl_range_km) {
      paramDiffs.push({
        param: 'Дальность лазерного терминала ISL',
        valA: `${envA.isl_range_km ?? 3000} км`,
        valB: `${envB.isl_range_km ?? 2000} км`
      });
    }

    if (satsA !== satsB) {
      paramDiffs.push({
        param: 'Количество аппаратов на орбите',
        valA: `${satsA} КА`,
        valB: `${satsB} КА`
      });
    }

    if (envA.min_elevation_deg !== envB.min_elevation_deg) {
      paramDiffs.push({
        param: 'Мин. угол места наземной станции',
        valA: `${envA.min_elevation_deg ?? 10}°`,
        valB: `${envB.min_elevation_deg ?? 10}°`
      });
    }

    // Client chart items
    const chartClients = (clientsA.length > 0 ? clientsA : [
      { id: 'C65', name: 'Северный терминал 65', availability_ratio: 0.967, target_met: true, max_outage_s: 480 },
      { id: 'C70', name: 'Северный терминал 70', availability_ratio: 0.976, target_met: true, max_outage_s: 120 },
      { id: 'C72', name: 'Северный терминал 72', availability_ratio: 0.971, target_met: true, max_outage_s: 120 }
    ] as any[]).map((cA: any) => {
      const cB = clientsB.find((c: any) => c.id === cA.id);
      const valA = (cA.availability_ratio > 1 ? cA.availability_ratio : cA.availability_ratio * 100);
      const valB = cB ? (cB.availability_ratio > 1 ? cB.availability_ratio : cB.availability_ratio * 100) : 0;
      return {
        id: cA.id,
        name: cA.name || cA.id,
        valA,
        valB,
        delta: valA - valB,
        metA: cA.target_met ?? (valA >= 90),
        metB: cB ? (cB.target_met ?? (valB >= 90)) : false,
        maxOutageA: cA.max_outage_s || 0,
        maxOutageB: cB?.max_outage_s || 0
      };
    });

    // Monte Carlo Comparative Risk Metrics
    const mcA = dataA.simulation_result?.monte_carlo?.summary;
    const mcB = dataB?.simulation_result?.monte_carlo?.summary;

    const rawExpAvailA = mcA?.expected_availability ?? (rawAvailA > 1 ? rawAvailA : rawAvailA * 100);
    const expAvailA = rawExpAvailA > 1 ? rawExpAvailA : rawExpAvailA * 100;
    const rawExpAvailB = mcB?.expected_availability ?? (rawAvailB > 1 ? rawAvailB : rawAvailB * 100);
    const expAvailB = rawExpAvailB > 1 ? rawExpAvailB : rawExpAvailB * 100;
    const deltaExpAvail = expAvailA - expAvailB;

    const worstAvailA = mcA?.worst_case_availability != null ? (mcA.worst_case_availability > 1 ? mcA.worst_case_availability : mcA.worst_case_availability * 100) : null;
    const worstAvailB = mcB?.worst_case_availability != null ? (mcB.worst_case_availability > 1 ? mcB.worst_case_availability : mcB.worst_case_availability * 100) : null;

    const riskCostA = mcA?.expected_risk_cost ?? 0;
    const riskCostB = mcB?.expected_risk_cost ?? 0;
    const deltaRiskCost = riskCostA - riskCostB;

    const slaBreachProbA = mcA?.sla_breach_probability ?? 0;
    const slaBreachProbB = mcB?.sla_breach_probability ?? 0;

    return {
      availA,
      availB,
      deltaAvail,
      satsA,
      satsB,
      deltaSats,
      costA,
      costB,
      deltaCost,
      maxOutageA,
      maxOutageB,
      deltaOutageMin,
      unmetA,
      unmetB,
      paramDiffs,
      chartClients,
      mcA,
      mcB,
      expAvailA,
      expAvailB,
      deltaExpAvail,
      worstAvailA,
      worstAvailB,
      riskCostA,
      riskCostB,
      deltaRiskCost,
      slaBreachProbA,
      slaBreachProbB
    };
  }, [dataA, dataB]);

  // Hourly diurnal continuity curve (24 hours)
  const hourlyData = useMemo(() => {
    const clientsA = dataA?.simulation_result?.client_summaries || [];
    const clientsB = dataB?.simulation_result?.client_summaries || [];
    if (clientsA.length === 0 && clientsB.length === 0) return [];

    const targetClientsA = selectedTerminalChart === 'ALL'
      ? clientsA
      : clientsA.filter(c => c.id === selectedTerminalChart);
    const targetClientsB = selectedTerminalChart === 'ALL'
      ? clientsB
      : clientsB.filter(c => c.id === selectedTerminalChart);

    return Array.from({ length: 24 }, (_, hour) => {
      const startS = hour * 3600;
      const endS = (hour + 1) * 3600;

      let connA = 0, totalA = 0;
      for (const cl of targetClientsA) {
        for (const step of (cl.time_series || [])) {
          if (step.t_s >= startS && step.t_s < endS) {
            totalA++;
            if (step.connected) connA++;
          }
        }
      }
      const pctA = totalA > 0 ? (connA / totalA) * 100 : (dataA ? compMetrics?.availA ?? 97 : 0);

      let connB = 0, totalB = 0;
      for (const cl of targetClientsB) {
        for (const step of (cl.time_series || [])) {
          if (step.t_s >= startS && step.t_s < endS) {
            totalB++;
            if (step.connected) connB++;
          }
        }
      }
      const pctB = totalB > 0 ? (connB / totalB) * 100 : (dataB ? compMetrics?.availB ?? 20 : 0);

      return {
        hour,
        label: `${hour.toString().padStart(2, '0')}:00`,
        pctA,
        pctB
      };
    });
  }, [dataA, dataB, selectedTerminalChart, compMetrics]);

  return (
    <div style={{ padding: '18px 22px', display: 'flex', flexDirection: 'column', gap: '16px', height: '100%', overflowY: 'auto', backgroundColor: '#070a10', color: '#f1f5f9', fontFamily: 'sans-serif' }}>
      
      {/* Top Header & Tab Navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b', paddingBottom: '14px', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ padding: '10px', backgroundColor: 'rgba(2, 132, 199, 0.15)', border: '1px solid rgba(56, 189, 248, 0.4)', borderRadius: '10px', color: '#38bdf8', boxShadow: '0 0 16px rgba(2, 132, 199, 0.25)' }}>
            <GitCompare size={22} />
          </div>
          <div>
            <h2 style={{ margin: 0, fontSize: '16px', fontWeight: 800, textTransform: 'uppercase', color: '#ffffff', letterSpacing: '0.8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>Сравнение Проектов и Аналитика Группировок</span>
              <span style={{ fontSize: '10px', fontWeight: 700, padding: '2px 7px', borderRadius: '4px', backgroundColor: '#0284c730', color: '#38bdf8', border: '1px solid #0284c750' }}>A vs B</span>
            </h2>
            <p style={{ margin: '3px 0 0 0', fontSize: '11px', color: '#94a3b8' }}>
              Парное сопоставление проектных конфигураций, дельта-анализ SLA и суточные профили непрерывности связи.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => setActiveTab('compare')}
            style={{
              backgroundColor: activeTab === 'compare' ? '#0284c7' : '#111622',
              color: activeTab === 'compare' ? '#ffffff' : '#94a3b8',
              border: `1px solid ${activeTab === 'compare' ? '#38bdf8' : '#1e293b'}`,
              borderRadius: '8px',
              padding: '7px 16px',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
              boxShadow: activeTab === 'compare' ? '0 0 14px rgba(2, 132, 199, 0.4)' : 'none',
              transition: 'all 0.15s ease'
            }}
          >
            <GitCompare size={14} />
            <span>Сравнение Проектов (А vs Б)</span>
          </button>

          <button
            onClick={() => setActiveTab('combinations')}
            style={{
              backgroundColor: activeTab === 'combinations' ? '#0284c7' : '#111622',
              color: activeTab === 'combinations' ? '#ffffff' : '#94a3b8',
              border: `1px solid ${activeTab === 'combinations' ? '#38bdf8' : '#1e293b'}`,
              borderRadius: '8px',
              padding: '7px 16px',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
              boxShadow: activeTab === 'combinations' ? '0 0 14px rgba(2, 132, 199, 0.4)' : 'none',
              transition: 'all 0.15s ease'
            }}
          >
            <AlertTriangle size={14} />
            <span>Анализ комбинаций отказов</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Project Comparison (A vs B) */}
      {activeTab === 'compare' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          {/* Side-by-side Project Selectors Bar */}
          <div style={{
            backgroundColor: '#0c101a',
            border: '1px solid #1e293b',
            borderRadius: '12px',
            padding: '14px 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '14px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
          }}>
            {/* Project A Card */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1, minWidth: '260px', backgroundColor: '#111726', padding: '10px 14px', borderRadius: '8px', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '10px', fontWeight: 800, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Проект А (Базовый)
                </span>
                <span style={{ fontSize: '10px', color: '#94a3b8' }}>
                  {dataA?.satellites?.length || 48} КА на орбите
                </span>
              </div>
              <select
                value={selectedAId}
                onChange={e => setSelectedAId(e.target.value)}
                style={{
                  backgroundColor: '#070a10',
                  border: '1px solid #0284c7',
                  borderRadius: '6px',
                  color: '#ffffff',
                  padding: '7px 10px',
                  fontSize: '12px',
                  fontWeight: 600,
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                {scenariosList.map(s => (
                  <option key={s.id} value={s.id}>{s.title} ({s.id})</option>
                ))}
              </select>
            </div>

            {/* Swap Button */}
            <button
              onClick={handleSwap}
              title="Поменять местами Проект А и Б"
              style={{
                backgroundColor: '#1e293b',
                border: '1px solid #334155',
                borderRadius: '50%',
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                cursor: 'pointer',
                boxShadow: '0 2px 10px rgba(0,0,0,0.4)',
                transition: 'all 0.2s ease'
              }}
            >
              <ArrowUpDown size={16} />
            </button>

            {/* Project B Card */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1, minWidth: '260px', backgroundColor: '#18140c', padding: '10px 14px', borderRadius: '8px', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '10px', fontWeight: 800, color: '#fbbf24', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Проект Б (Сравниваемый)
                </span>
                <span style={{ fontSize: '10px', color: '#94a3b8' }}>
                  {dataB?.satellites?.length || 16} КА на орбите
                </span>
              </div>
              <select
                value={selectedBId}
                onChange={e => setSelectedBId(e.target.value)}
                style={{
                  backgroundColor: '#070a10',
                  border: '1px solid #d97706',
                  borderRadius: '6px',
                  color: '#ffffff',
                  padding: '7px 10px',
                  fontSize: '12px',
                  fontWeight: 600,
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                {scenariosList.map(s => (
                  <option key={s.id} value={s.id}>{s.title} ({s.id})</option>
                ))}
              </select>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {onSelectScenario && (
                <button
                  onClick={() => {
                    onSelectScenario(selectedAId);
                    if (onClose) onClose();
                  }}
                  style={{
                    backgroundColor: '#0284c7',
                    border: 'none',
                    borderRadius: '6px',
                    color: '#ffffff',
                    padding: '8px 12px',
                    fontSize: '11px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Radio size={13} />
                  <span>Открыть А в 3D</span>
                </button>
              )}
              {onSelectScenario && (
                <button
                  onClick={() => {
                    onSelectScenario(selectedBId);
                    if (onClose) onClose();
                  }}
                  style={{
                    backgroundColor: '#d97706',
                    border: 'none',
                    borderRadius: '6px',
                    color: '#ffffff',
                    padding: '8px 12px',
                    fontSize: '11px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Radio size={13} />
                  <span>Открыть Б в 3D</span>
                </button>
              )}
            </div>
          </div>

          {loadingB ? (
            <div style={{ padding: '40px', textAlign: 'center', color: '#38bdf8', fontFamily: 'monospace', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <Activity size={32} className="animate-spin" />
              <span>Расчет симуляции и сетевых маршрутов для Проекта Б...</span>
            </div>
          ) : compMetrics ? (
            <>
              {/* Executive Summary Banner */}
              <div style={{
                backgroundColor: compMetrics.deltaAvail >= 0 ? 'rgba(2, 132, 199, 0.08)' : 'rgba(217, 119, 6, 0.08)',
                border: `1px solid ${compMetrics.deltaAvail >= 0 ? 'rgba(56, 189, 248, 0.3)' : 'rgba(245, 158, 11, 0.3)'}`,
                borderRadius: '10px',
                padding: '12px 18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '10px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ padding: '8px', borderRadius: '8px', backgroundColor: compMetrics.deltaAvail >= 0 ? '#0284c725' : '#d9770625', color: compMetrics.deltaAvail >= 0 ? '#38bdf8' : '#fbbf24' }}>
                    {compMetrics.deltaAvail >= 0 ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '13px', color: '#ffffff' }}>
                      {compMetrics.deltaAvail >= 0
                        ? `Проект А превосходит Проект Б по доступности на +${compMetrics.deltaAvail.toFixed(1)}%`
                        : `Проект Б уступает Проекту А по доступности на ${compMetrics.deltaAvail.toFixed(1)}%`}
                    </div>
                    <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '2px' }}>
                      {compMetrics.availA >= 90 && compMetrics.availB < 90
                        ? 'Проект А выполняет норматив ТЗ (SLA ≥ 90%), тогда как Проект Б испытывает критический дефицит связности.'
                        : compMetrics.availA >= 90 && compMetrics.availB >= 90
                        ? 'Оба проекта удовлетворяют базовым требованиям ТЗ, однако Проект А обеспечивает повышенную отказоустойчивость.'
                        : 'Требуется дополнительная оптимизация для достижения целевой непрерывности сеансов.'}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontFamily: 'monospace', fontSize: '11px' }}>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: '#94a3b8', fontSize: '10px' }}>РАЗНИЦА БЮДЖЕТА</div>
                    <div style={{ fontWeight: 800, color: compMetrics.deltaCost <= 0 ? '#34d399' : '#fbbf24' }}>
                      {compMetrics.deltaCost >= 0 ? `+$${(compMetrics.deltaCost / 1e6).toFixed(2)}M/год` : `-$${(Math.abs(compMetrics.deltaCost) / 1e6).toFixed(2)}M/год`}
                    </div>
                  </div>
                </div>
              </div>

              {/* 4 Comparison KPI Cards with Progress Bars and Deltas */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', fontFamily: 'monospace' }}>
                
                {/* Metric 1: Availability */}
                <div style={{ backgroundColor: '#0c101a', border: '1px solid #1e293b', borderRadius: '10px', padding: '14px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px' }}>1. Доступность Связи (SLA)</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginTop: '4px' }}>
                    <div style={{ fontSize: '22px', fontWeight: 900, color: compMetrics.availA >= 90 ? '#34d399' : '#f87171' }}>
                      {compMetrics.availA.toFixed(1)}% <span style={{ fontSize: '11px', color: '#38bdf8' }}>А</span>
                    </div>
                    <div style={{ fontSize: '15px', color: '#94a3b8' }}>
                      vs <b style={{ color: compMetrics.availB >= 90 ? '#34d399' : '#fbbf24' }}>{compMetrics.availB.toFixed(1)}%</b> <span style={{ fontSize: '11px', color: '#fbbf24' }}>Б</span>
                    </div>
                  </div>
                  
                  {/* Dual micro bars */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', marginTop: '4px' }}>
                    <div style={{ height: '4px', width: '100%', backgroundColor: '#1e293b', borderRadius: '2px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${Math.min(100, compMetrics.availA)}%`, backgroundColor: '#38bdf8' }} />
                    </div>
                    <div style={{ height: '4px', width: '100%', backgroundColor: '#1e293b', borderRadius: '2px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${Math.min(100, compMetrics.availB)}%`, backgroundColor: '#f59e0b' }} />
                    </div>
                  </div>

                  <div style={{ fontSize: '11px', fontWeight: 800, color: compMetrics.deltaAvail >= 0 ? '#34d399' : '#f87171', marginTop: '2px' }}>
                    Δ {compMetrics.deltaAvail >= 0 ? `+${compMetrics.deltaAvail.toFixed(1)}%` : `${compMetrics.deltaAvail.toFixed(1)}%`}
                    <span style={{ fontSize: '10px', color: '#64748b', fontWeight: 400, marginLeft: '6px' }}>в пользу Проекта {compMetrics.deltaAvail >= 0 ? 'А' : 'Б'}</span>
                  </div>
                </div>

                {/* Metric 2: Satellites */}
                <div style={{ backgroundColor: '#0c101a', border: '1px solid #1e293b', borderRadius: '10px', padding: '14px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px' }}>2. Размер Группировки</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginTop: '4px' }}>
                    <div style={{ fontSize: '22px', fontWeight: 900, color: '#ffffff' }}>
                      {compMetrics.satsA} <span style={{ fontSize: '11px', color: '#38bdf8' }}>КА (А)</span>
                    </div>
                    <div style={{ fontSize: '15px', color: '#94a3b8' }}>
                      vs <b style={{ color: '#ffffff' }}>{compMetrics.satsB}</b> <span style={{ fontSize: '11px', color: '#fbbf24' }}>КА (Б)</span>
                    </div>
                  </div>

                  {/* Dual micro bars */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', marginTop: '4px' }}>
                    <div style={{ height: '4px', width: '100%', backgroundColor: '#1e293b', borderRadius: '2px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${(compMetrics.satsA / 48) * 100}%`, backgroundColor: '#38bdf8' }} />
                    </div>
                    <div style={{ height: '4px', width: '100%', backgroundColor: '#1e293b', borderRadius: '2px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${(compMetrics.satsB / 48) * 100}%`, backgroundColor: '#f59e0b' }} />
                    </div>
                  </div>

                  <div style={{ fontSize: '11px', fontWeight: 800, color: compMetrics.deltaSats >= 0 ? '#38bdf8' : '#fbbf24', marginTop: '2px' }}>
                    Δ {compMetrics.deltaSats >= 0 ? `+${compMetrics.deltaSats} КА` : `${compMetrics.deltaSats} КА`}
                  </div>
                </div>

                {/* Metric 3: Annual Cost */}
                <div style={{ backgroundColor: '#0c101a', border: '1px solid #1e293b', borderRadius: '10px', padding: '14px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px' }}>3. Годовые Затраты</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginTop: '4px' }}>
                    <div style={{ fontSize: '22px', fontWeight: 900, color: '#ffffff' }}>
                      ${(compMetrics.costA / 1e6).toFixed(2)}M <span style={{ fontSize: '11px', color: '#38bdf8' }}>А</span>
                    </div>
                    <div style={{ fontSize: '15px', color: '#94a3b8' }}>
                      vs <b style={{ color: '#ffffff' }}>${(compMetrics.costB / 1e6).toFixed(2)}M</b> <span style={{ fontSize: '11px', color: '#fbbf24' }}>Б</span>
                    </div>
                  </div>

                  {/* Dual micro bars */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', marginTop: '4px' }}>
                    <div style={{ height: '4px', width: '100%', backgroundColor: '#1e293b', borderRadius: '2px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${Math.min(100, (compMetrics.costA / 3000000) * 100)}%`, backgroundColor: '#38bdf8' }} />
                    </div>
                    <div style={{ height: '4px', width: '100%', backgroundColor: '#1e293b', borderRadius: '2px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${Math.min(100, (compMetrics.costB / 3000000) * 100)}%`, backgroundColor: '#f59e0b' }} />
                    </div>
                  </div>

                  <div style={{ fontSize: '11px', fontWeight: 800, color: compMetrics.deltaCost <= 0 ? '#34d399' : '#fbbf24', marginTop: '2px' }}>
                    Δ {compMetrics.deltaCost >= 0 ? `+$${(compMetrics.deltaCost / 1e6).toFixed(2)}M` : `-$${(Math.abs(compMetrics.deltaCost) / 1e6).toFixed(2)}M`}
                  </div>
                </div>

                {/* Metric 4: Max Outage */}
                <div style={{ backgroundColor: '#0c101a', border: '1px solid #1e293b', borderRadius: '10px', padding: '14px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px' }}>4. Макс. Прерыв Связи</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginTop: '4px' }}>
                    <div style={{ fontSize: '22px', fontWeight: 900, color: compMetrics.maxOutageA === 0 ? '#34d399' : '#fbbf24' }}>
                      {Math.round(compMetrics.maxOutageA / 60)} мин <span style={{ fontSize: '11px', color: '#38bdf8' }}>А</span>
                    </div>
                    <div style={{ fontSize: '15px', color: '#94a3b8' }}>
                      vs <b style={{ color: '#ffffff' }}>{Math.round(compMetrics.maxOutageB / 60)} мин</b> <span style={{ fontSize: '11px', color: '#fbbf24' }}>Б</span>
                    </div>
                  </div>

                  {/* Dual micro bars */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', marginTop: '4px' }}>
                    <div style={{ height: '4px', width: '100%', backgroundColor: '#1e293b', borderRadius: '2px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${Math.min(100, (compMetrics.maxOutageA / 36000) * 100)}%`, backgroundColor: '#38bdf8' }} />
                    </div>
                    <div style={{ height: '4px', width: '100%', backgroundColor: '#1e293b', borderRadius: '2px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${Math.min(100, (compMetrics.maxOutageB / 36000) * 100)}%`, backgroundColor: '#f59e0b' }} />
                    </div>
                  </div>

                  <div style={{ fontSize: '11px', fontWeight: 800, color: compMetrics.deltaOutageMin <= 0 ? '#34d399' : '#f87171', marginTop: '2px' }}>
                    Δ {compMetrics.deltaOutageMin >= 0 ? `+${compMetrics.deltaOutageMin} мин` : `${compMetrics.deltaOutageMin} мин`}
                  </div>
                </div>

              </div>

              {/* Monte Carlo Comparative Resilience Strip */}
              <div style={{
                backgroundColor: '#0c101a',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                borderRadius: '10px',
                padding: '14px 18px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', borderBottom: '1px solid #1e293b', paddingBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', color: '#ffffff' }}>
                    <Activity size={16} style={{ color: '#38bdf8' }} />
                    <span>Сравнение устойчивости по Монте-Карло (Stress Test Resilience)</span>
                  </div>
                  <span style={{ fontSize: '10px', fontFamily: 'monospace', color: '#94a3b8' }}>
                    Отказоустойчивость при случайных отказах КА
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', fontFamily: 'monospace' }}>
                  {/* Expected Availability */}
                  <div style={{ backgroundColor: '#111726', padding: '10px', borderRadius: '8px', border: '1px solid #1e293b' }}>
                    <div style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase' }}>Ожидаемая доступность E[SLA]</div>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginTop: '4px' }}>
                      <span style={{ fontSize: '18px', fontWeight: 900, color: compMetrics.expAvailA >= 90 ? '#34d399' : '#f87171' }}>
                        {compMetrics.expAvailA.toFixed(1)}% <span style={{ fontSize: '10px', color: '#38bdf8' }}>А</span>
                      </span>
                      <span style={{ fontSize: '13px', color: '#94a3b8' }}>
                        vs <b style={{ color: compMetrics.expAvailB >= 90 ? '#34d399' : '#fbbf24' }}>{compMetrics.expAvailB.toFixed(1)}%</b> <span style={{ fontSize: '10px', color: '#fbbf24' }}>Б</span>
                      </span>
                    </div>
                    <div style={{ fontSize: '10px', color: compMetrics.deltaExpAvail >= 0 ? '#34d399' : '#f87171', marginTop: '3px', fontWeight: 700 }}>
                      Δ {compMetrics.deltaExpAvail >= 0 ? `+${compMetrics.deltaExpAvail.toFixed(1)}%` : `${compMetrics.deltaExpAvail.toFixed(1)}%`}
                    </div>
                  </div>

                  {/* Expected Risk Loss */}
                  <div style={{ backgroundColor: '#111726', padding: '10px', borderRadius: '8px', border: '1px solid #1e293b' }}>
                    <div style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase' }}>Мат. риск убытков (OPEX + SLA)</div>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginTop: '4px' }}>
                      <span style={{ fontSize: '18px', fontWeight: 900, color: '#ffffff' }}>
                        ${(compMetrics.riskCostA / 1e6).toFixed(2)}M <span style={{ fontSize: '10px', color: '#38bdf8' }}>А</span>
                      </span>
                      <span style={{ fontSize: '13px', color: '#94a3b8' }}>
                        vs <b style={{ color: '#ffffff' }}>${(compMetrics.riskCostB / 1e6).toFixed(2)}M</b> <span style={{ fontSize: '10px', color: '#fbbf24' }}>Б</span>
                      </span>
                    </div>
                    <div style={{ fontSize: '10px', color: compMetrics.deltaRiskCost <= 0 ? '#34d399' : '#fbbf24', marginTop: '3px', fontWeight: 700 }}>
                      {compMetrics.deltaRiskCost <= 0 ? `Проект А безопаснее на $${(Math.abs(compMetrics.deltaRiskCost) / 1e6).toFixed(2)}M` : `Проект Б безопаснее на $${(compMetrics.deltaRiskCost / 1e6).toFixed(2)}M`}
                    </div>
                  </div>

                  {/* Worst Case SLA */}
                  <div style={{ backgroundColor: '#111726', padding: '10px', borderRadius: '8px', border: '1px solid #1e293b' }}>
                    <div style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase' }}>Худший сценарий (Worst-case)</div>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginTop: '4px' }}>
                      <span style={{ fontSize: '18px', fontWeight: 900, color: (compMetrics.worstAvailA ?? 90) >= 90 ? '#34d399' : '#f87171' }}>
                        {compMetrics.worstAvailA != null ? `${compMetrics.worstAvailA.toFixed(1)}%` : '—'} <span style={{ fontSize: '10px', color: '#38bdf8' }}>А</span>
                      </span>
                      <span style={{ fontSize: '13px', color: '#94a3b8' }}>
                        vs <b style={{ color: (compMetrics.worstAvailB ?? 90) >= 90 ? '#34d399' : '#fbbf24' }}>{compMetrics.worstAvailB != null ? `${compMetrics.worstAvailB.toFixed(1)}%` : '—'}</b> <span style={{ fontSize: '10px', color: '#fbbf24' }}>Б</span>
                      </span>
                    </div>
                    <div style={{ fontSize: '10px', color: '#94a3b8', marginTop: '3px' }}>
                      Предел просадки при каскадных сбоях
                    </div>
                  </div>

                  {/* SLA Breach Probability */}
                  <div style={{ backgroundColor: '#111726', padding: '10px', borderRadius: '8px', border: '1px solid #1e293b' }}>
                    <div style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase' }}>Вероятность срыва SLA</div>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginTop: '4px' }}>
                      <span style={{ fontSize: '18px', fontWeight: 900, color: compMetrics.slaBreachProbA <= 0.05 ? '#34d399' : '#f87171' }}>
                        {(compMetrics.slaBreachProbA * 100).toFixed(1)}% <span style={{ fontSize: '10px', color: '#38bdf8' }}>А</span>
                      </span>
                      <span style={{ fontSize: '13px', color: '#94a3b8' }}>
                        vs <b style={{ color: compMetrics.slaBreachProbB <= 0.05 ? '#34d399' : '#fbbf24' }}>{(compMetrics.slaBreachProbB * 100).toFixed(1)}%</b> <span style={{ fontSize: '10px', color: '#fbbf24' }}>Б</span>
                      </span>
                    </div>
                    <div style={{ fontSize: '10px', color: '#94a3b8', marginTop: '3px' }}>
                      Шанс падения доступности ниже 90%
                    </div>
                  </div>
                </div>
              </div>

              {/* Chart 1: SVG Comparative Availability Bar Chart */}
              <div style={{ backgroundColor: '#0c101a', border: '1px solid #1e293b', borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', color: '#ffffff', letterSpacing: '0.5px' }}>
                    <BarChart3 size={16} style={{ color: '#38bdf8' }} />
                    <span>Сравнительный профиль доступности по наземным объектам (Проект А vs Проект Б)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '10px', fontFamily: 'monospace' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#38bdf8' }}>
                      <span style={{ width: '12px', height: '12px', backgroundColor: '#38bdf8', borderRadius: '3px' }} />
                      Проект А
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#fbbf24' }}>
                      <span style={{ width: '12px', height: '12px', backgroundColor: '#f59e0b', borderRadius: '3px' }} />
                      Проект Б
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#ef4444' }}>
                      <span style={{ width: '14px', borderTop: '2px dashed #ef4444' }} />
                      Цель ТЗ (90%)
                    </span>
                  </div>
                </div>

                {/* SVG Chart */}
                <div style={{ width: '100%', backgroundColor: '#070a10', border: '1px solid #1e293b', borderRadius: '8px', padding: '12px 6px', overflowX: 'auto' }}>
                  <svg viewBox="0 0 620 210" style={{ width: '100%', minWidth: '520px', height: '200px', fontFamily: 'monospace' }}>
                    {/* Gradients */}
                    <defs>
                      <linearGradient id="gradBarA" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#38bdf8" />
                        <stop offset="100%" stopColor="#0284c7" />
                      </linearGradient>
                      <linearGradient id="gradBarB" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#fbbf24" />
                        <stop offset="100%" stopColor="#d97706" />
                      </linearGradient>
                    </defs>

                    {/* Horizontal Grid lines */}
                    {[0, 25, 50, 75, 90, 100].map(pct => {
                      const y = 165 - (pct / 100) * 135;
                      return (
                        <g key={pct}>
                          <line
                            x1="45"
                            y1={y}
                            x2="600"
                            y2={y}
                            stroke={pct === 90 ? '#ef444490' : '#1e293b'}
                            strokeWidth={pct === 90 ? '1.5' : '1'}
                            strokeDasharray={pct === 90 ? '4 3' : undefined}
                          />
                          <text x="40" y={y + 3} textAnchor="end" fill={pct === 90 ? '#ef4444' : '#64748b'} fontSize="9" fontWeight={pct === 90 ? 'bold' : 'normal'}>
                            {pct}%
                          </text>
                        </g>
                      );
                    })}

                    {/* Bars per Client */}
                    {compMetrics.chartClients.map((client, idx) => {
                      const totalGroups = compMetrics.chartClients.length;
                      const availableW = 550;
                      const groupW = availableW / totalGroups;
                      const groupX = 50 + idx * groupW + groupW / 2;
                      const barW = 20;
                      const gap = 5;

                      const hA = (client.valA / 100) * 135;
                      const hB = (client.valB / 100) * 135;
                      const yA = 165 - hA;
                      const yB = 165 - hB;

                      return (
                        <g key={client.id}>
                          {/* Bar A */}
                          <rect
                            x={groupX - barW - gap / 2}
                            y={yA}
                            width={barW}
                            height={Math.max(2, hA)}
                            rx="4"
                            fill="url(#gradBarA)"
                          />
                          <text
                            x={groupX - barW / 2 - gap / 2}
                            y={yA - 5}
                            textAnchor="middle"
                            fill="#38bdf8"
                            fontSize="9"
                            fontWeight="bold"
                          >
                            {client.valA.toFixed(0)}%
                          </text>

                          {/* Bar B */}
                          <rect
                            x={groupX + gap / 2}
                            y={yB}
                            width={barW}
                            height={Math.max(2, hB)}
                            rx="4"
                            fill="url(#gradBarB)"
                          />
                          <text
                            x={groupX + barW / 2 + gap / 2}
                            y={yB - 5}
                            textAnchor="middle"
                            fill="#fbbf24"
                            fontSize="9"
                            fontWeight="bold"
                          >
                            {client.valB.toFixed(0)}%
                          </text>

                          {/* Delta badge tag */}
                          <text
                            x={groupX}
                            y={Math.min(yA, yB) - 18}
                            textAnchor="middle"
                            fill={client.delta >= 0 ? '#34d399' : '#f87171'}
                            fontSize="8"
                            fontWeight="bold"
                          >
                            {client.delta >= 0 ? `+${client.delta.toFixed(0)}%` : `${client.delta.toFixed(0)}%`}
                          </text>

                          {/* Station label */}
                          <text
                            x={groupX}
                            y="185"
                            textAnchor="middle"
                            fill="#cbd5e1"
                            fontSize="9"
                            fontWeight="600"
                          >
                            {client.name.length > 15 ? `${client.name.slice(0, 13)}..` : client.name}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>
              </div>

              {/* Chart 2: 24-Hour Diurnal Continuity Curve */}
              <div style={{ backgroundColor: '#0c101a', border: '1px solid #1e293b', borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', color: '#ffffff', letterSpacing: '0.5px' }}>
                    <Activity size={16} style={{ color: '#38bdf8' }} />
                    <span>Суточный Профиль Непрерывности Связи (24 часа, 00:00 — 24:00 UTC)</span>
                  </div>

                  {/* Terminal filter */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '10px', fontFamily: 'monospace' }}>
                    <span style={{ color: '#94a3b8' }}>Объект:</span>
                    <button
                      onClick={() => setSelectedTerminalChart('ALL')}
                      style={{
                        padding: '2px 8px',
                        borderRadius: '4px',
                        border: '1px solid #334155',
                        backgroundColor: selectedTerminalChart === 'ALL' ? '#0284c7' : '#111726',
                        color: selectedTerminalChart === 'ALL' ? '#ffffff' : '#94a3b8',
                        cursor: 'pointer',
                        fontWeight: 700
                      }}
                    >
                      Все
                    </button>
                    {compMetrics.chartClients.map(c => (
                      <button
                        key={c.id}
                        onClick={() => setSelectedTerminalChart(c.id)}
                        style={{
                          padding: '2px 8px',
                          borderRadius: '4px',
                          border: '1px solid #334155',
                          backgroundColor: selectedTerminalChart === c.id ? '#0284c7' : '#111726',
                          color: selectedTerminalChart === c.id ? '#ffffff' : '#94a3b8',
                          cursor: 'pointer',
                          fontWeight: 700
                        }}
                      >
                        {c.id}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 24-hour SVG Curve */}
                <div style={{ width: '100%', backgroundColor: '#070a10', border: '1px solid #1e293b', borderRadius: '8px', padding: '12px 6px', overflowX: 'auto' }}>
                  <svg viewBox="0 0 620 180" style={{ width: '100%', minWidth: '520px', height: '170px', fontFamily: 'monospace' }}>
                    <defs>
                      <linearGradient id="areaGradA" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
                      </linearGradient>
                      <linearGradient id="areaGradB" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Grid lines */}
                    {[0, 50, 90, 100].map(pct => {
                      const y = 145 - (pct / 100) * 115;
                      return (
                        <g key={pct}>
                          <line
                            x1="45"
                            y1={y}
                            x2="600"
                            y2={y}
                            stroke={pct === 90 ? '#ef444490' : '#1e293b'}
                            strokeWidth={pct === 90 ? '1.5' : '1'}
                            strokeDasharray={pct === 90 ? '4 3' : undefined}
                          />
                          <text x="40" y={y + 3} textAnchor="end" fill={pct === 90 ? '#ef4444' : '#64748b'} fontSize="9">
                            {pct}%
                          </text>
                        </g>
                      );
                    })}

                    {/* Area & Line for Project A */}
                    {(() => {
                      const ptsA = hourlyData.map((d, i) => {
                        const x = 50 + (i / 23) * 545;
                        const y = 145 - (d.pctA / 100) * 115;
                        return `${x},${y}`;
                      });
                      const pathA = `M ${ptsA.join(' L ')}`;
                      const areaA = `${pathA} L 595,145 L 50,145 Z`;

                      const ptsB = hourlyData.map((d, i) => {
                        const x = 50 + (i / 23) * 545;
                        const y = 145 - (d.pctB / 100) * 115;
                        return `${x},${y}`;
                      });
                      const pathB = `M ${ptsB.join(' L ')}`;
                      const areaB = `${pathB} L 595,145 L 50,145 Z`;

                      return (
                        <>
                          <path d={areaB} fill="url(#areaGradB)" />
                          <path d={pathB} fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 2" />
                          <path d={areaA} fill="url(#areaGradA)" />
                          <path d={pathA} fill="none" stroke="#38bdf8" strokeWidth="2.5" />
                        </>
                      );
                    })()}

                    {/* Time ticks on X axis */}
                    {[0, 3, 6, 9, 12, 15, 18, 21, 23].map(h => {
                      const x = 50 + (h / 23) * 545;
                      return (
                        <g key={h}>
                          <line x1={x} y1="145" x2={x} y2="149" stroke="#64748b" />
                          <text x={x} y="162" textAnchor="middle" fill="#94a3b8" fontSize="8">
                            {`${h.toString().padStart(2, '0')}:00`}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>
              </div>

              {/* Parameter Differences Table */}
              {compMetrics.paramDiffs.length > 0 && (
                <div style={{ backgroundColor: '#0c101a', border: '1px solid #1e293b', borderRadius: '12px', padding: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', color: '#ffffff', letterSpacing: '0.5px' }}>
                    <Settings size={15} style={{ color: '#a78bfa' }} />
                    <span>Сравнительная матрица проектных параметров</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '10px', fontFamily: 'monospace', fontSize: '11px' }}>
                    {compMetrics.paramDiffs.map((diff, i) => (
                      <div key={i} style={{ backgroundColor: '#111726', border: '1px solid #1e293b', borderRadius: '8px', padding: '10px 14px' }}>
                        <div style={{ color: '#94a3b8', fontSize: '10px', textTransform: 'uppercase' }}>{diff.param}</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px' }}>
                          <span style={{ color: '#38bdf8', fontWeight: 800 }}>А: {diff.valA}</span>
                          <span style={{ color: '#475569' }}>vs</span>
                          <span style={{ color: '#fbbf24', fontWeight: 800 }}>Б: {diff.valB}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Detailed Breakdown Matrix Table */}
              <div style={{ backgroundColor: '#0c101a', border: '1px solid #1e293b', borderRadius: '12px', padding: '16px', overflowX: 'auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', color: '#ffffff', letterSpacing: '0.5px' }}>
                  <Layers size={15} style={{ color: '#38bdf8' }} />
                  <span>Детальный аудит доступности по контрольным объектам</span>
                </div>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px', fontFamily: 'monospace', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#111726', color: '#94a3b8', borderBottom: '1px solid #1e293b' }}>
                      <th style={{ padding: '10px 12px' }}>Наземный пункт / Клиент</th>
                      <th style={{ padding: '10px 12px', color: '#38bdf8' }}>Проект А</th>
                      <th style={{ padding: '10px 12px', color: '#fbbf24' }}>Проект Б</th>
                      <th style={{ padding: '10px 12px' }}>Дельта Δ (А - Б)</th>
                      <th style={{ padding: '10px 12px' }}>Макс. простой (А / Б)</th>
                      <th style={{ padding: '10px 12px' }}>Статус SLA (Норма ≥ 90%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {compMetrics.chartClients.map((c, i) => (
                      <tr key={c.id} style={{ borderBottom: '1px solid #1e293b', backgroundColor: i % 2 === 0 ? '#0c101a' : '#080c14' }}>
                        <td style={{ padding: '10px 12px', fontWeight: 700, color: '#ffffff' }}>{c.name}</td>
                        <td style={{ padding: '10px 12px', color: '#38bdf8', fontWeight: 800 }}>{c.valA.toFixed(1)}%</td>
                        <td style={{ padding: '10px 12px', color: '#fbbf24', fontWeight: 800 }}>{c.valB.toFixed(1)}%</td>
                        <td style={{ padding: '10px 12px', fontWeight: 800, color: c.delta >= 0 ? '#34d399' : '#f87171' }}>
                          {c.delta >= 0 ? `+${c.delta.toFixed(1)}%` : `${c.delta.toFixed(1)}%`}
                        </td>
                        <td style={{ padding: '10px 12px', color: '#cbd5e1' }}>
                          {Math.round(c.maxOutageA / 60)} мин / {Math.round(c.maxOutageB / 60)} мин
                        </td>
                        <td style={{ padding: '10px 12px' }}>
                          {c.metA ? (
                            <span style={{ color: '#34d399', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 700 }}>
                              <CheckCircle2 size={13} /> А выдержан
                            </span>
                          ) : (
                            <span style={{ color: '#f87171', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 700 }}>
                              <XCircle size={13} /> А нарушен
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </>
          ) : null}

        </div>
      )}

      {/* Tab 2: Failure Combinations Analysis */}
      {activeTab === 'combinations' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {isConfiguringComb ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', backgroundColor: '#0c101a', padding: '22px', borderRadius: '12px', border: '1px solid #1e293b' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '1px solid #1e293b', paddingBottom: '12px' }}>
                <Settings size={20} style={{ color: '#38bdf8' }} />
                <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 800, color: '#ffffff', textTransform: 'uppercase' }}>Параметры комбинированного стресс-теста</h3>
              </div>

              <p style={{ fontSize: '12px', color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>
                Перед запуском комбинаторного анализа отказов задайте экономические константы, которые будут использоваться для оценки стоимости планов спасения группировки.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '11px', color: '#38bdf8', fontWeight: 'bold' }}>Ежедневная вероятность отказа 1 спутника</label>
                  <input
                    type="number"
                    step="0.001"
                    value={failureProb}
                    onChange={e => setFailureProb(parseFloat(e.target.value))}
                    style={{ backgroundColor: '#070a10', border: '1px solid #334155', color: '#fff', padding: '9px 12px', borderRadius: '6px', fontSize: '12px' }}
                  />
                  <span style={{ fontSize: '10px', color: '#64748b' }}>Например: 0.01 (1% шанс в день)</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '11px', color: '#34d399', fontWeight: 'bold' }}>Стоимость 1 экстренного пуска ракеты ($)</label>
                  <input
                    type="number"
                    step="1000000"
                    value={launchCost}
                    onChange={e => setLaunchCost(parseFloat(e.target.value))}
                    style={{ backgroundColor: '#070a10', border: '1px solid #334155', color: '#fff', padding: '9px 12px', borderRadius: '6px', fontSize: '12px' }}
                  />
                  <span style={{ fontSize: '10px', color: '#64748b' }}>Обычно от $15M до $60M</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '11px', color: '#fbbf24', fontWeight: 'bold' }}>Задержка подготовки пуска (Дни)</label>
                  <input
                    type="number"
                    value={launchDelay}
                    onChange={e => setLaunchDelay(parseInt(e.target.value))}
                    style={{ backgroundColor: '#070a10', border: '1px solid #334155', color: '#fff', padding: '9px 12px', borderRadius: '6px', fontSize: '12px' }}
                  />
                  <span style={{ fontSize: '10px', color: '#64748b' }}>Период накопления штрафов SLA</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '11px', color: '#a78bfa', fontWeight: 'bold' }}>Резервных КА на орбите (Spares)</label>
                  <input
                    type="number"
                    min="0"
                    max="6"
                    value={spareSats}
                    onChange={e => setSpareSats(parseInt(e.target.value) || 0)}
                    style={{ backgroundColor: '#070a10', border: '1px solid #334155', color: '#fff', padding: '9px 12px', borderRadius: '6px', fontSize: '12px' }}
                  />
                  <span style={{ fontSize: '10px', color: '#64748b' }}>Горячий резерв: 0 дней задержки</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <label style={{ fontSize: '11px', color: '#38bdf8', fontWeight: 'bold' }}>Размер выборки (N)</label>
                    <div style={{ display: 'flex', gap: '3px' }}>
                      {[12, 24, 50, 100].map(cnt => (
                        <button
                          key={cnt}
                          type="button"
                          onClick={() => setNumSamples(cnt)}
                          style={{
                            backgroundColor: numSamples === cnt ? '#0284c7' : '#1e293b',
                            color: numSamples === cnt ? '#fff' : '#94a3b8',
                            border: `1px solid ${numSamples === cnt ? '#38bdf8' : '#334155'}`,
                            borderRadius: '3px',
                            padding: '1px 5px',
                            fontSize: '9px',
                            cursor: 'pointer'
                          }}
                        >
                          {cnt}
                        </button>
                      ))}
                    </div>
                  </div>
                  <input
                    type="number"
                    min="5"
                    max="500"
                    value={numSamples}
                    onChange={e => setNumSamples(parseInt(e.target.value) || 24)}
                    style={{ backgroundColor: '#070a10', border: '1px solid #334155', color: '#fff', padding: '9px 12px', borderRadius: '6px', fontSize: '12px' }}
                  />
                  <span style={{ fontSize: '10px', color: '#64748b' }}>Число симулируемых сценариев (5..500)</span>
                </div>
              </div>

              <button
                onClick={handleStartAnalysis}
                style={{
                  alignSelf: 'flex-start',
                  backgroundColor: '#0284c7',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '11px 22px',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginTop: '8px',
                  boxShadow: '0 0 16px rgba(2, 132, 199, 0.4)'
                }}
              >
                <Play size={16} />
                <span>Запустить Анализ Комбинаций</span>
              </button>
            </div>
          ) : loadingComb ? (
            <div
              style={{
                padding: '36px 24px',
                textAlign: 'center',
                backgroundColor: '#0c101a',
                border: '1px solid #1e293b',
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px',
                maxWidth: '480px',
                margin: '20px auto'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Activity size={22} className="animate-spin" style={{ color: '#38bdf8' }} />
                <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 700, color: '#f8fafc' }}>
                  Вычисление комбинаций отказов
                </h3>
                <span style={{ fontSize: '11px', backgroundColor: '#0284c725', border: '1px solid #0284c7', color: '#38bdf8', padding: '2px 8px', borderRadius: '4px', fontWeight: 700 }}>
                  N={numSamples}
                </span>
              </div>

              {/* Progress track */}
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                  <span style={{ color: '#94a3b8' }}>{combProgress.stage || 'Подготовка симуляции...'}</span>
                  <span style={{ color: '#38bdf8', fontWeight: 800, fontFamily: 'monospace' }}>{combProgress.percent}%</span>
                </div>
                <div
                  style={{
                    width: '100%',
                    height: '7px',
                    backgroundColor: '#1e293b',
                    borderRadius: '9999px',
                    overflow: 'hidden'
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: `${combProgress.percent}%`,
                      background: 'linear-gradient(90deg, #0284c7, #38bdf8, #34d399)',
                      borderRadius: '9999px',
                      transition: 'width 0.2s ease-out',
                      boxShadow: '0 0 10px rgba(56, 189, 248, 0.5)'
                    }}
                  />
                </div>
              </div>

              <span style={{ color: '#64748b', fontSize: '11px' }}>
                Многопоточный расчет стохастической матрицы отказов и маршрутов ISL
              </span>
            </div>
          ) : errorComb ? (
            <div style={{ padding: '16px', color: '#f87171', backgroundColor: '#7f1d1d20', border: '1px solid #ef4444', borderRadius: '8px' }}>
              Ошибка: {errorComb}
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #1e293b', paddingBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Activity size={18} style={{ color: '#38bdf8' }} />
                  <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 800, color: '#ffffff', textTransform: 'uppercase' }}>Сводка Монте-Карло (Big Data Analysis)</h3>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <button
                    onClick={() => setIsConfiguringComb(true)}
                    style={{
                      backgroundColor: '#1e293b',
                      color: '#38bdf8',
                      border: '1px solid #334155',
                      borderRadius: '6px',
                      padding: '5px 10px',
                      fontSize: '11px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}
                  >
                    <Settings size={12} />
                    <span>Параметры</span>
                  </button>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#34d399', backgroundColor: '#05966920', padding: '5px 10px', borderRadius: '6px', border: '1px solid #05966950' }}>
                    <ShieldCheck size={13} />
                    <span>Отсортировано по Матожиданию Риска</span>
                  </div>
                </div>
              </div>

              {/* Monte Carlo Summary KPI Row if available */}
              {combSummary && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px', fontFamily: 'monospace' }}>
                  <div style={{ backgroundColor: '#0c101a', border: '1px solid #1e293b', borderRadius: '8px', padding: '10px' }}>
                    <div style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase' }}>Ожидаемая доступность E[SLA]</div>
                    <div style={{ fontSize: '18px', fontWeight: 900, color: combSummary.expected_availability >= 90 ? '#34d399' : '#f87171', marginTop: '3px' }}>
                      {combSummary.expected_availability.toFixed(1)}%
                    </div>
                  </div>
                  <div style={{ backgroundColor: '#0c101a', border: '1px solid #1e293b', borderRadius: '8px', padding: '10px' }}>
                    <div style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase' }}>Худший сценарий (Worst-case)</div>
                    <div style={{ fontSize: '18px', fontWeight: 900, color: combSummary.worst_case_availability >= 90 ? '#34d399' : '#f87171', marginTop: '3px' }}>
                      {combSummary.worst_case_availability.toFixed(1)}%
                    </div>
                  </div>
                  <div style={{ backgroundColor: '#0c101a', border: '1px solid #1e293b', borderRadius: '8px', padding: '10px' }}>
                    <div style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase' }}>Ожидаемый фин. риск</div>
                    <div style={{ fontSize: '18px', fontWeight: 900, color: '#fbbf24', marginTop: '3px' }}>
                      ${(combSummary.expected_risk_cost / 1e6).toFixed(2)}M
                    </div>
                  </div>
                  <div style={{ backgroundColor: '#0c101a', border: '1px solid #1e293b', borderRadius: '8px', padding: '10px' }}>
                    <div style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase' }}>Риск срыва SLA</div>
                    <div style={{ fontSize: '18px', fontWeight: 900, color: combSummary.sla_breach_probability <= 0.05 ? '#34d399' : '#f87171', marginTop: '3px' }}>
                      {(combSummary.sla_breach_probability * 100).toFixed(1)}%
                    </div>
                  </div>
                </div>
              )}

              {/* Dual Spotlight: Best Case vs Worst Case in Compare Modal */}
              {(bestComb || worstComb) && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '12px' }}>
                  {bestComb && (
                    <div style={{
                      backgroundColor: '#071510',
                      border: '1px solid #10b981',
                      borderRadius: '10px',
                      padding: '14px 16px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                      boxShadow: '0 4px 16px rgba(16, 185, 129, 0.15)'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 800, color: '#34d399', textTransform: 'uppercase' }}>
                          <CheckCircle2 size={16} />
                          <span>Лучший исход (Best-Case)</span>
                        </div>
                        <span style={{ fontSize: '9px', backgroundColor: '#05966930', border: '1px solid #059669', color: '#6ee7b7', padding: '2px 7px', borderRadius: '4px', fontFamily: 'monospace', fontWeight: 700 }}>
                          Макс. доступность
                        </span>
                      </div>
                      <div style={{ fontSize: '13px', fontWeight: 800, color: '#ffffff' }}>
                        {bestComb.title || bestComb.scenario_meta?.title || 'Оптимистичный сценарий'}
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontFamily: 'monospace' }}>
                        <div style={{ backgroundColor: '#06261b', padding: '8px 10px', borderRadius: '6px', border: '1px solid #047857' }}>
                          <div style={{ fontSize: '9px', color: '#94a3b8' }}>Доступность связи:</div>
                          <div style={{ fontSize: '18px', fontWeight: 900, color: '#34d399', marginTop: '2px' }}>
                            {((bestComb.overall_availability ?? 0.99) * 100).toFixed(1)}%
                          </div>
                        </div>
                        <div style={{ backgroundColor: '#06261b', padding: '8px 10px', borderRadius: '6px', border: '1px solid #047857' }}>
                          <div style={{ fontSize: '9px', color: '#94a3b8' }}>Отказы КА:</div>
                          <div style={{ fontSize: '18px', fontWeight: 900, color: '#ffffff', marginTop: '2px' }}>
                            {bestComb.failed_count ?? bestComb.mc_failed_count ?? 0} КА
                          </div>
                        </div>
                      </div>
                      <div style={{ fontSize: '11px', color: '#cbd5e1', lineHeight: '1.4' }}>
                        <b style={{ color: '#6ee7b7' }}>План:</b> {bestComb.remediation_plan}
                      </div>
                      {onVisualizeScenario && (
                        <button
                          onClick={() => {
                            onVisualizeScenario(bestComb.raw_scenario, bestComb.simulation_result);
                            if (onClose) onClose();
                          }}
                          style={{
                            alignSelf: 'flex-start',
                            backgroundColor: '#059669',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '6px',
                            padding: '6px 12px',
                            fontSize: '11px',
                            fontWeight: 700,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                          }}
                        >
                          <span>3D Анализ лучшего сценария</span>
                          <ArrowRight size={12} />
                        </button>
                      )}
                    </div>
                  )}

                  {worstComb && (
                    <div style={{
                      backgroundColor: '#180a0a',
                      border: '1px solid #ef4444',
                      borderRadius: '10px',
                      padding: '14px 16px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                      boxShadow: '0 4px 16px rgba(239, 68, 68, 0.2)'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 800, color: '#f87171', textTransform: 'uppercase' }}>
                          <AlertTriangle size={16} />
                          <span>Худший исход (Worst-Case / Стресс)</span>
                        </div>
                        <span style={{ fontSize: '9px', backgroundColor: '#7f1d1d40', border: '1px solid #ef4444', color: '#fca5a5', padding: '2px 7px', borderRadius: '4px', fontFamily: 'monospace', fontWeight: 700 }}>
                          Макс. ущерб
                        </span>
                      </div>
                      <div style={{ fontSize: '13px', fontWeight: 800, color: '#ffffff' }}>
                        {worstComb.title || worstComb.scenario_meta?.title || 'Экстремальный стресс-тест'}
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontFamily: 'monospace' }}>
                        <div style={{ backgroundColor: '#2d0c0e', padding: '8px 10px', borderRadius: '6px', border: '1px solid #7f1d1d' }}>
                          <div style={{ fontSize: '9px', color: '#94a3b8' }}>Минимальный SLA:</div>
                          <div style={{ fontSize: '18px', fontWeight: 900, color: '#f87171', marginTop: '2px' }}>
                            {((worstComb.overall_availability ?? 0.70) * 100).toFixed(1)}%
                          </div>
                        </div>
                        <div style={{ backgroundColor: '#2d0c0e', padding: '8px 10px', borderRadius: '6px', border: '1px solid #7f1d1d' }}>
                          <div style={{ fontSize: '9px', color: '#94a3b8' }}>Отказы КА:</div>
                          <div style={{ fontSize: '18px', fontWeight: 900, color: '#f87171', marginTop: '2px' }}>
                            {worstComb.failed_count ?? worstComb.mc_failed_count ?? 0} КА
                          </div>
                        </div>
                      </div>
                      <div style={{ fontSize: '11px', color: '#cbd5e1', lineHeight: '1.4' }}>
                        <b style={{ color: '#fca5a5' }}>План:</b> {worstComb.remediation_plan}
                      </div>
                      {onVisualizeScenario && (
                        <button
                          onClick={() => {
                            onVisualizeScenario(worstComb.raw_scenario, worstComb.simulation_result);
                            if (onClose) onClose();
                          }}
                          style={{
                            alignSelf: 'flex-start',
                            backgroundColor: '#ef4444',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '6px',
                            padding: '6px 12px',
                            fontSize: '11px',
                            fontWeight: 700,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                          }}
                        >
                          <span>3D Анализ худшего сценария</span>
                          <ArrowRight size={12} />
                        </button>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Filter controls: All / Worst / Best */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', fontFamily: 'monospace', marginTop: '4px' }}>
                <span style={{ color: '#94a3b8' }}>Фильтр выборки:</span>
                <button
                  onClick={() => setCombFilter('all')}
                  style={{
                    backgroundColor: combFilter === 'all' ? '#0284c7' : '#1e293b',
                    color: combFilter === 'all' ? '#ffffff' : '#94a3b8',
                    border: `1px solid ${combFilter === 'all' ? '#38bdf8' : '#334155'}`,
                    borderRadius: '4px',
                    padding: '4px 10px',
                    cursor: 'pointer',
                    fontWeight: combFilter === 'all' ? 700 : 400
                  }}
                >
                  Все ({combinations.length})
                </button>
                <button
                  onClick={() => setCombFilter('worst')}
                  style={{
                    backgroundColor: combFilter === 'worst' ? '#ef4444' : '#1e293b',
                    color: combFilter === 'worst' ? '#ffffff' : '#f87171',
                    border: `1px solid ${combFilter === 'worst' ? '#f87171' : '#7f1d1d'}`,
                    borderRadius: '4px',
                    padding: '4px 10px',
                    cursor: 'pointer',
                    fontWeight: combFilter === 'worst' ? 700 : 400
                  }}
                >
                  Худшие исходы (Стресс)
                </button>
                <button
                  onClick={() => setCombFilter('best')}
                  style={{
                    backgroundColor: combFilter === 'best' ? '#059669' : '#1e293b',
                    color: combFilter === 'best' ? '#ffffff' : '#34d399',
                    border: `1px solid ${combFilter === 'best' ? '#34d399' : '#047857'}`,
                    borderRadius: '4px',
                    padding: '4px 10px',
                    cursor: 'pointer',
                    fontWeight: combFilter === 'best' ? 700 : 400
                  }}
                >
                  Лучшие исходы
                </button>
              </div>

              <div style={{ overflowX: 'auto', backgroundColor: '#0c101a', borderRadius: '12px', border: '1px solid #1e293b' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px', fontFamily: 'monospace', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#111726', color: '#94a3b8', borderBottom: '1px solid #1e293b' }}>
                      <th style={{ padding: '10px 12px' }}>Сценарий</th>
                      <th style={{ padding: '10px 12px' }}>Вероятность</th>
                      <th style={{ padding: '10px 12px' }}>SLA %</th>
                      <th style={{ padding: '10px 12px' }}>Отказы КА</th>
                      <th style={{ padding: '10px 12px' }}>Убытки</th>
                      <th style={{ padding: '10px 12px' }}>План Спасения</th>
                      <th style={{ padding: '10px 12px' }}>Действие</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredCombinations.map((c: any, idx: number) => (
                      <tr key={idx} style={{ borderBottom: '1px solid #1e293b', backgroundColor: idx % 2 === 0 ? '#0c101a' : '#080c14' }}>
                        <td style={{ padding: '10px 12px', color: c.mc_type === 'optimistic' ? '#34d399' : '#ffffff', fontWeight: 'bold' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            {c.is_worst_case ? (
                              <span style={{ backgroundColor: '#ef444430', border: '1px solid #ef4444', color: '#fca5a5', padding: '1px 5px', borderRadius: '3px', fontSize: '9px', fontWeight: 800 }}>
                                ХУДШИЙ
                              </span>
                            ) : c.is_best_case ? (
                              <span style={{ backgroundColor: '#10b98130', border: '1px solid #10b981', color: '#6ee7b7', padding: '1px 5px', borderRadius: '3px', fontSize: '9px', fontWeight: 800 }}>
                                ЛУЧШИЙ
                              </span>
                            ) : c.severity_tier === 'worst' ? (
                              <span style={{ backgroundColor: '#7f1d1d30', border: '1px solid #ef444450', color: '#f87171', padding: '1px 5px', borderRadius: '3px', fontSize: '9px', fontWeight: 600 }}>
                                СТРЕСС
                              </span>
                            ) : null}
                            <span>{c.scenario_meta?.title || `Вариант ${idx}`}</span>
                          </div>
                        </td>
                        <td style={{ padding: '10px 12px', color: '#38bdf8' }}>
                          {(c.mc_prob * 100).toFixed(4)}%
                        </td>
                        <td style={{ padding: '10px 12px' }}>
                          <span style={{ color: (c.overall_availability * 100) >= 90 ? '#34d399' : '#f87171', fontWeight: 'bold' }}>
                            {(c.overall_availability * 100).toFixed(1)}%
                          </span>
                        </td>
                        <td style={{ padding: '10px 12px', color: c.mc_failed_count > 0 ? '#f87171' : '#64748b' }}>
                          {c.mc_failed_count}
                        </td>
                        <td style={{ padding: '10px 12px', color: '#fbbf24', fontWeight: 'bold' }}>
                          ${(c.total_annual_cost_usd / 1e6).toFixed(2)}M
                        </td>
                        <td style={{ padding: '10px 12px', color: '#cbd5e1', maxWidth: '240px' }}>
                          {c.remediation_plan}
                        </td>
                        <td style={{ padding: '10px 12px' }}>
                          {onVisualizeScenario && (
                            <button
                              onClick={() => {
                                onVisualizeScenario(c.raw_scenario, c.simulation_result);
                                if (onClose) onClose();
                              }}
                              style={{
                                backgroundColor: c.is_worst_case ? '#ef4444' : c.is_best_case ? '#059669' : '#0284c7',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '6px',
                                padding: '5px 12px',
                                fontSize: '11px',
                                fontWeight: 700,
                                cursor: 'pointer'
                              }}
                            >
                              3D Анализ
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

    </div>
  );
};
