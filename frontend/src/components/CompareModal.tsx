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
  Radio
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

  // Failure Combinations State
  const [combinations, setCombinations] = useState<any[]>([]);
  const [loadingComb, setLoadingComb] = useState<boolean>(false);
  const [errorComb, setErrorComb] = useState<string | null>(null);
  const [isConfiguringComb, setIsConfiguringComb] = useState<boolean>(true);
  const [failureProb, setFailureProb] = useState<number>(0.01);
  const [launchCost, setLaunchCost] = useState<number>(15000000);
  const [launchDelay, setLaunchDelay] = useState<number>(14);

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

    fetch('/api/analyze_combinations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        scenario: baseScenario,
        failure_probability: failureProb,
        emergency_launch_cost_usd: launchCost,
        launch_delay_days: launchDelay
      })
    })
      .then(res => {
        if (!res.ok) throw new Error("Ошибка при генерации сценариев");
        return res.json();
      })
      .then(data => {
        setCombinations(data.combinations || []);
        setLoadingComb(false);
      })
      .catch(err => {
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
      chartClients
    };
  }, [dataA, dataB]);

  return (
    <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '14px', height: '100%', overflowY: 'auto', backgroundColor: '#090d14', color: '#f1f5f9', fontFamily: 'sans-serif' }}>
      
      {/* Top Header & Tab Navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b', paddingBottom: '12px', flexWrap: 'wrap', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ padding: '8px', backgroundColor: '#0284c720', border: '1px solid #0284c7', borderRadius: '8px', color: '#38bdf8' }}>
            <GitCompare size={20} />
          </div>
          <div>
            <h2 style={{ margin: 0, fontSize: '15px', fontWeight: 800, textTransform: 'uppercase', color: '#ffffff', letterSpacing: '0.5px' }}>
              Сравнение и Аналитика Группировок
            </h2>
            <p style={{ margin: '2px 0 0 0', fontSize: '11px', color: '#94a3b8' }}>
              Парное сопоставление проектов (Проект А vs Проект Б), дельта-анализ доступности и отказоустойчивость.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '6px' }}>
          <button
            onClick={() => setActiveTab('compare')}
            style={{
              backgroundColor: activeTab === 'compare' ? '#0284c7' : '#1e293b',
              color: activeTab === 'compare' ? '#ffffff' : '#94a3b8',
              border: `1px solid ${activeTab === 'compare' ? '#38bdf8' : '#334155'}`,
              borderRadius: '6px',
              padding: '6px 14px',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <GitCompare size={14} />
            <span>Сравнение Проектов (А vs Б)</span>
          </button>

          <button
            onClick={() => setActiveTab('combinations')}
            style={{
              backgroundColor: activeTab === 'combinations' ? '#0284c7' : '#1e293b',
              color: activeTab === 'combinations' ? '#ffffff' : '#94a3b8',
              border: `1px solid ${activeTab === 'combinations' ? '#38bdf8' : '#334155'}`,
              borderRadius: '6px',
              padding: '6px 14px',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <AlertTriangle size={14} />
            <span>Анализ комбинаций отказов</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Project Comparison (A vs B) */}
      {activeTab === 'compare' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          
          {/* Project Selectors Bar */}
          <div style={{
            backgroundColor: '#111622',
            border: '1px solid #1e293b',
            borderRadius: '10px',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            {/* Project A Select */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, minWidth: '240px' }}>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#38bdf8', textTransform: 'uppercase', fontFamily: 'monospace' }}>Проект А:</span>
              <select
                value={selectedAId}
                onChange={e => setSelectedAId(e.target.value)}
                style={{
                  flex: 1,
                  backgroundColor: '#090d14',
                  border: '1px solid #0284c7',
                  borderRadius: '6px',
                  color: '#ffffff',
                  padding: '6px 10px',
                  fontSize: '12px',
                  fontWeight: 600,
                  outline: 'none'
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
                borderRadius: '8px',
                padding: '6px 10px',
                color: '#cbd5e1',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '11px',
                fontWeight: 700
              }}
            >
              <ArrowUpDown size={14} />
              <span>А ⇄ Б</span>
            </button>

            {/* Project B Select */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, minWidth: '240px' }}>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#fbbf24', textTransform: 'uppercase', fontFamily: 'monospace' }}>Проект Б:</span>
              <select
                value={selectedBId}
                onChange={e => setSelectedBId(e.target.value)}
                style={{
                  flex: 1,
                  backgroundColor: '#090d14',
                  border: '1px solid #f59e0b',
                  borderRadius: '6px',
                  color: '#ffffff',
                  padding: '6px 10px',
                  fontSize: '12px',
                  fontWeight: 600,
                  outline: 'none'
                }}
              >
                {scenariosList.map(s => (
                  <option key={s.id} value={s.id}>{s.title} ({s.id})</option>
                ))}
              </select>
            </div>

            {/* Action: Visualize in 3D */}
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
                  padding: '6px 12px',
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
          </div>

          {loadingB ? (
            <div style={{ padding: '30px', textAlign: 'center', color: '#38bdf8', fontFamily: 'monospace' }}>
              Расчет симуляции для Проекта Б...
            </div>
          ) : compMetrics ? (
            <>
              {/* 4 Comparison KPI Cards with Deltas */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px', fontFamily: 'monospace' }}>
                
                {/* Metric 1: Availability */}
                <div style={{ backgroundColor: '#111622', border: '1px solid #1e293b', borderRadius: '8px', padding: '12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase' }}>1. Доступность (P_avail)</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginTop: '4px' }}>
                    <div style={{ fontSize: '20px', fontWeight: 900, color: compMetrics.availA >= 90 ? '#34d399' : '#f87171' }}>
                      {compMetrics.availA.toFixed(1)}% <span style={{ fontSize: '11px', color: '#64748b' }}>А</span>
                    </div>
                    <div style={{ fontSize: '14px', color: '#94a3b8' }}>
                      vs <b style={{ color: compMetrics.availB >= 90 ? '#34d399' : '#f87171' }}>{compMetrics.availB.toFixed(1)}%</b> <span style={{ fontSize: '10px' }}>Б</span>
                    </div>
                  </div>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: compMetrics.deltaAvail >= 0 ? '#34d399' : '#f87171', marginTop: '2px' }}>
                    Δ {compMetrics.deltaAvail >= 0 ? `+${compMetrics.deltaAvail.toFixed(1)}%` : `${compMetrics.deltaAvail.toFixed(1)}%`}
                    <span style={{ fontSize: '10px', color: '#64748b', fontWeight: 400, marginLeft: '6px' }}>в пользу Проекта {compMetrics.deltaAvail >= 0 ? 'А' : 'Б'}</span>
                  </div>
                </div>

                {/* Metric 2: Satellites */}
                <div style={{ backgroundColor: '#111622', border: '1px solid #1e293b', borderRadius: '8px', padding: '12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase' }}>2. Количество КА на орбите</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginTop: '4px' }}>
                    <div style={{ fontSize: '20px', fontWeight: 900, color: '#ffffff' }}>
                      {compMetrics.satsA} <span style={{ fontSize: '11px', color: '#64748b' }}>КА (А)</span>
                    </div>
                    <div style={{ fontSize: '14px', color: '#94a3b8' }}>
                      vs <b style={{ color: '#ffffff' }}>{compMetrics.satsB}</b> <span style={{ fontSize: '10px' }}>КА (Б)</span>
                    </div>
                  </div>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: compMetrics.deltaSats >= 0 ? '#38bdf8' : '#fbbf24', marginTop: '2px' }}>
                    Δ {compMetrics.deltaSats >= 0 ? `+${compMetrics.deltaSats} КА` : `${compMetrics.deltaSats} КА`}
                  </div>
                </div>

                {/* Metric 3: Annual Cost */}
                <div style={{ backgroundColor: '#111622', border: '1px solid #1e293b', borderRadius: '8px', padding: '12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase' }}>3. Годовые затраты (OPEX + Штрафы)</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginTop: '4px' }}>
                    <div style={{ fontSize: '20px', fontWeight: 900, color: '#ffffff' }}>
                      ${(compMetrics.costA / 1e6).toFixed(2)}M <span style={{ fontSize: '11px', color: '#64748b' }}>А</span>
                    </div>
                    <div style={{ fontSize: '14px', color: '#94a3b8' }}>
                      vs <b style={{ color: '#ffffff' }}>${(compMetrics.costB / 1e6).toFixed(2)}M</b> <span style={{ fontSize: '10px' }}>Б</span>
                    </div>
                  </div>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: compMetrics.deltaCost <= 0 ? '#34d399' : '#fbbf24', marginTop: '2px' }}>
                    Δ {compMetrics.deltaCost >= 0 ? `+$${(compMetrics.deltaCost / 1e6).toFixed(2)}M` : `-$${(Math.abs(compMetrics.deltaCost) / 1e6).toFixed(2)}M`}
                  </div>
                </div>

                {/* Metric 4: Max Outage */}
                <div style={{ backgroundColor: '#111622', border: '1px solid #1e293b', borderRadius: '8px', padding: '12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase' }}>4. Макс. окно недоступности</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginTop: '4px' }}>
                    <div style={{ fontSize: '20px', fontWeight: 900, color: compMetrics.maxOutageA === 0 ? '#34d399' : '#fbbf24' }}>
                      {Math.round(compMetrics.maxOutageA / 60)} мин <span style={{ fontSize: '11px', color: '#64748b' }}>А</span>
                    </div>
                    <div style={{ fontSize: '14px', color: '#94a3b8' }}>
                      vs <b style={{ color: '#ffffff' }}>{Math.round(compMetrics.maxOutageB / 60)} мин</b> <span style={{ fontSize: '10px' }}>Б</span>
                    </div>
                  </div>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: compMetrics.deltaOutageMin <= 0 ? '#34d399' : '#f87171', marginTop: '2px' }}>
                    Δ {compMetrics.deltaOutageMin >= 0 ? `+${compMetrics.deltaOutageMin} мин` : `${compMetrics.deltaOutageMin} мин`}
                  </div>
                </div>

              </div>

              {/* Parameter Differences Table */}
              {compMetrics.paramDiffs.length > 0 && (
                <div style={{ backgroundColor: '#111622', border: '1px solid #1e293b', borderRadius: '10px', padding: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: '#ffffff' }}>
                    <Settings size={14} style={{ color: '#a78bfa' }} />
                    <span>Различия в проектных параметрах</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '8px', fontFamily: 'monospace', fontSize: '11px' }}>
                    {compMetrics.paramDiffs.map((diff, i) => (
                      <div key={i} style={{ backgroundColor: '#090d14', border: '1px solid #1e293b', borderRadius: '6px', padding: '8px' }}>
                        <div style={{ color: '#94a3b8', fontSize: '10px' }}>{diff.param}</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
                          <span style={{ color: '#38bdf8', fontWeight: 700 }}>А: {diff.valA}</span>
                          <span style={{ color: '#64748b' }}>vs</span>
                          <span style={{ color: '#fbbf24', fontWeight: 700 }}>Б: {diff.valB}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SVG Comparative Availability Bar Chart */}
              <div style={{ backgroundColor: '#111622', border: '1px solid #1e293b', borderRadius: '10px', padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: '#ffffff' }}>
                    <BarChart3 size={15} style={{ color: '#38bdf8' }} />
                    <span>Сравнительный профиль доступности по наземным объектам (Проект А vs Проект Б)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '10px', fontFamily: 'monospace' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#38bdf8' }}>
                      <span style={{ width: '10px', height: '10px', backgroundColor: '#38bdf8', borderRadius: '2px' }} />
                      Проект А
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#fbbf24' }}>
                      <span style={{ width: '10px', height: '10px', backgroundColor: '#f59e0b', borderRadius: '2px' }} />
                      Проект Б
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#94a3b8' }}>
                      <span style={{ width: '12px', borderTop: '1px dashed #ef4444' }} />
                      Цель ТЗ (90%)
                    </span>
                  </div>
                </div>

                {/* SVG Chart Rendering */}
                <div style={{ width: '100%', backgroundColor: '#090d14', border: '1px solid #1e293b', borderRadius: '8px', padding: '10px', overflowX: 'auto' }}>
                  <svg viewBox="0 0 600 200" style={{ width: '100%', minWidth: '480px', height: '180px', fontFamily: 'monospace' }}>
                    {/* Horizontal Grid lines */}
                    {[0, 25, 50, 75, 90, 100].map(pct => {
                      const y = 160 - (pct / 100) * 130;
                      return (
                        <g key={pct}>
                          <line
                            x1="45"
                            y1={y}
                            x2="580"
                            y2={y}
                            stroke={pct === 90 ? '#ef444480' : '#1e293b'}
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
                      const availableW = 530;
                      const groupW = availableW / totalGroups;
                      const groupX = 50 + idx * groupW + groupW / 2;
                      const barW = 18;
                      const gap = 4;

                      const hA = (client.valA / 100) * 130;
                      const hB = (client.valB / 100) * 130;
                      const yA = 160 - hA;
                      const yB = 160 - hB;

                      return (
                        <g key={client.id}>
                          {/* Bar A */}
                          <rect
                            x={groupX - barW - gap / 2}
                            y={yA}
                            width={barW}
                            height={Math.max(2, hA)}
                            rx="3"
                            fill="#38bdf8"
                          />
                          <text
                            x={groupX - barW / 2 - gap / 2}
                            y={yA - 4}
                            textAnchor="middle"
                            fill="#38bdf8"
                            fontSize="8"
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
                            rx="3"
                            fill="#f59e0b"
                          />
                          <text
                            x={groupX + barW / 2 + gap / 2}
                            y={yB - 4}
                            textAnchor="middle"
                            fill="#fbbf24"
                            fontSize="8"
                            fontWeight="bold"
                          >
                            {client.valB.toFixed(0)}%
                          </text>

                          {/* Label */}
                          <text
                            x={groupX}
                            y="180"
                            textAnchor="middle"
                            fill="#cbd5e1"
                            fontSize="9"
                            fontWeight="600"
                          >
                            {client.name.length > 14 ? `${client.name.slice(0, 12)}...` : client.name}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>
              </div>

              {/* Detailed Breakdown Table */}
              <div style={{ backgroundColor: '#111622', border: '1px solid #1e293b', borderRadius: '10px', padding: '12px', overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px', fontFamily: 'monospace', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#090d14', color: '#94a3b8', borderBottom: '1px solid #1e293b' }}>
                      <th style={{ padding: '8px 10px' }}>Наземный пункт / Клиент</th>
                      <th style={{ padding: '8px 10px', color: '#38bdf8' }}>Проект А</th>
                      <th style={{ padding: '8px 10px', color: '#fbbf24' }}>Проект Б</th>
                      <th style={{ padding: '8px 10px' }}>Дельта Δ (А - Б)</th>
                      <th style={{ padding: '8px 10px' }}>Макс. отказ (А / Б)</th>
                      <th style={{ padding: '8px 10px' }}>Статус SLA (Норма ≥ 90%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {compMetrics.chartClients.map((c, i) => (
                      <tr key={c.id} style={{ borderBottom: '1px solid #1e293b', backgroundColor: i % 2 === 0 ? '#111622' : '#0d121c' }}>
                        <td style={{ padding: '8px 10px', fontWeight: 700, color: '#ffffff' }}>{c.name}</td>
                        <td style={{ padding: '8px 10px', color: '#38bdf8', fontWeight: 800 }}>{c.valA.toFixed(1)}%</td>
                        <td style={{ padding: '8px 10px', color: '#fbbf24', fontWeight: 800 }}>{c.valB.toFixed(1)}%</td>
                        <td style={{ padding: '8px 10px', fontWeight: 800, color: c.delta >= 0 ? '#34d399' : '#f87171' }}>
                          {c.delta >= 0 ? `+${c.delta.toFixed(1)}%` : `${c.delta.toFixed(1)}%`}
                        </td>
                        <td style={{ padding: '8px 10px', color: '#cbd5e1' }}>
                          {Math.round(c.maxOutageA / 60)} мин / {Math.round(c.maxOutageB / 60)} мин
                        </td>
                        <td style={{ padding: '8px 10px' }}>
                          {c.metA ? (
                            <span style={{ color: '#34d399', display: 'flex', alignItems: 'center', gap: '4px' }}>
                              <CheckCircle2 size={12} /> А выдержан
                            </span>
                          ) : (
                            <span style={{ color: '#f87171', display: 'flex', alignItems: 'center', gap: '4px' }}>
                              <XCircle size={12} /> А нарушен
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {isConfiguringComb ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', backgroundColor: '#111622', padding: '20px', borderRadius: '8px', border: '1px solid #1e293b' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '1px solid #1e293b', paddingBottom: '10px' }}>
                <Settings size={20} style={{ color: '#38bdf8' }} />
                <h3 style={{ margin: 0, fontSize: '14px', color: '#ffffff' }}>Параметры комбинированного стресс-теста</h3>
              </div>

              <p style={{ fontSize: '12px', color: '#94a3b8', lineHeight: '1.5', margin: 0 }}>
                Перед запуском комбинаторного анализа отказов задайте экономические константы, которые будут использоваться для оценки стоимости планов спасения группировки.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '11px', color: '#38bdf8', fontWeight: 'bold' }}>Ежедневная вероятность отказа 1 спутника</label>
                  <input
                    type="number"
                    step="0.001"
                    value={failureProb}
                    onChange={e => setFailureProb(parseFloat(e.target.value))}
                    style={{ backgroundColor: '#090d14', border: '1px solid #334155', color: '#fff', padding: '8px', borderRadius: '4px', fontSize: '12px' }}
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
                    style={{ backgroundColor: '#090d14', border: '1px solid #334155', color: '#fff', padding: '8px', borderRadius: '4px', fontSize: '12px' }}
                  />
                  <span style={{ fontSize: '10px', color: '#64748b' }}>Обычно от $15M до $60M</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '11px', color: '#fbbf24', fontWeight: 'bold' }}>Задержка подготовки пуска (Дни)</label>
                  <input
                    type="number"
                    value={launchDelay}
                    onChange={e => setLaunchDelay(parseInt(e.target.value))}
                    style={{ backgroundColor: '#090d14', border: '1px solid #334155', color: '#fff', padding: '8px', borderRadius: '4px', fontSize: '12px' }}
                  />
                  <span style={{ fontSize: '10px', color: '#64748b' }}>Период накопления штрафов SLA</span>
                </div>
              </div>

              <button
                onClick={handleStartAnalysis}
                style={{
                  alignSelf: 'flex-start',
                  backgroundColor: '#0284c7',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '10px 20px',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginTop: '6px'
                }}
              >
                <Play size={16} />
                <span>Запустить Анализ Комбинаций</span>
              </button>
            </div>
          ) : loadingComb ? (
            <div style={{ padding: '30px', textAlign: 'center', color: '#38bdf8', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
              <Activity size={40} className="animate-pulse" />
              <h3 style={{ margin: 0, fontSize: '14px', color: '#ffffff' }}>Монте-Карло Анализ...</h3>
              <p style={{ color: '#94a3b8', fontSize: '12px', margin: 0 }}>
                Генерация комбинаций отказов, расчет маршрутов и оценка финансовых рисков...
              </p>
            </div>
          ) : errorComb ? (
            <div style={{ padding: '16px', color: '#f87171', backgroundColor: '#7f1d1d20', border: '1px solid #ef4444', borderRadius: '8px' }}>
              Ошибка: {errorComb}
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #1e293b', paddingBottom: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Activity size={16} style={{ color: '#38bdf8' }} />
                  <h3 style={{ margin: 0, fontSize: '13px', color: '#ffffff' }}>Сводка Монте-Карло (Big Data Analysis)</h3>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '10px', color: '#34d399', backgroundColor: '#05966920', padding: '3px 8px', borderRadius: '4px', border: '1px solid #05966950' }}>
                  <ShieldCheck size={12} />
                  <span>Отсортировано по Матожиданию Риска</span>
                </div>
              </div>

              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px', fontFamily: 'monospace', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#090d14', color: '#94a3b8', borderBottom: '1px solid #1e293b' }}>
                      <th style={{ padding: '8px 10px' }}>Сценарий</th>
                      <th style={{ padding: '8px 10px' }}>Вероятность</th>
                      <th style={{ padding: '8px 10px' }}>SLA %</th>
                      <th style={{ padding: '8px 10px' }}>Отказы КА</th>
                      <th style={{ padding: '8px 10px' }}>Убытки</th>
                      <th style={{ padding: '8px 10px' }}>План Спасения</th>
                      <th style={{ padding: '8px 10px' }}>Действие</th>
                    </tr>
                  </thead>
                  <tbody>
                    {combinations.map((c: any, idx: number) => (
                      <tr key={idx} style={{ borderBottom: '1px solid #1e293b', backgroundColor: idx % 2 === 0 ? '#111622' : '#0d121c' }}>
                        <td style={{ padding: '8px 10px', color: c.mc_type === 'optimistic' ? '#34d399' : '#ffffff', fontWeight: 'bold' }}>
                          {c.scenario_meta?.title || `Вариант ${idx}`}
                        </td>
                        <td style={{ padding: '8px 10px', color: '#38bdf8' }}>
                          {(c.mc_prob * 100).toFixed(4)}%
                        </td>
                        <td style={{ padding: '8px 10px' }}>
                          <span style={{ color: (c.overall_availability * 100) >= 90 ? '#34d399' : '#f87171', fontWeight: 'bold' }}>
                            {(c.overall_availability * 100).toFixed(1)}%
                          </span>
                        </td>
                        <td style={{ padding: '8px 10px', color: c.mc_failed_count > 0 ? '#f87171' : '#64748b' }}>
                          {c.mc_failed_count}
                        </td>
                        <td style={{ padding: '8px 10px', color: '#fbbf24', fontWeight: 'bold' }}>
                          ${(c.total_annual_cost_usd / 1e6).toFixed(2)}M
                        </td>
                        <td style={{ padding: '8px 10px', color: '#cbd5e1', maxWidth: '200px' }}>
                          {c.remediation_plan}
                        </td>
                        <td style={{ padding: '8px 10px' }}>
                          {onVisualizeScenario && (
                            <button
                              onClick={() => {
                                onVisualizeScenario(c.raw_scenario, c.simulation_result);
                                if (onClose) onClose();
                              }}
                              style={{
                                backgroundColor: '#0284c7',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '4px',
                                padding: '4px 10px',
                                fontSize: '10px',
                                fontWeight: 600,
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

