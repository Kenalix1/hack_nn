import React, { useState } from 'react';
import { Copy, ArrowRight, Settings, CheckCircle2, XCircle, Clock, ShieldCheck, Globe, Trophy, AlertTriangle, Zap, DollarSign, Activity, Play } from 'lucide-react';
import { ScenarioData } from '../types';

interface CompareModalProps {
  onOpenConfigurator?: () => void;
  baseScenario?: any;
  onVisualizeScenario?: (scenarioJson: any, simResult: any) => void;
  onClose?: () => void;
  onSetCriticalSatellites?: (sats: string[]) => void;
}

export const CompareModal: React.FC<CompareModalProps> = ({ onOpenConfigurator, baseScenario, onVisualizeScenario, onClose, onSetCriticalSatellites }) => {
  const [combinations, setCombinations] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  // Configuration State
  const [isConfiguring, setIsConfiguring] = useState<boolean>(true);
  const [failureProb, setFailureProb] = useState<number>(0.01);
  const [launchCost, setLaunchCost] = useState<number>(15000000);
  const [launchDelay, setLaunchDelay] = useState<number>(14);

  const handleStartAnalysis = () => {
    if (!baseScenario) {
      setError("Не загружен базовый сценарий для анализа.");
      return;
    }
    
    setIsConfiguring(false);
    setLoading(true);
    
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
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching combinations', err);
        setError(err.message);
        setLoading(false);
      });
  };

  const handleDrillDown = (failures: any[]) => {
      if (baseScenario && onVisualizeScenario) {
          const newScenario = JSON.parse(JSON.stringify(baseScenario));
          newScenario.failures = failures;
          onVisualizeScenario(newScenario, { satellites: [] }); 
          if (onClose) onClose();
      }
  };

  if (isConfiguring) {
    return (
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px', height: '100%', color: '#e0e0e0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '1px solid #333', paddingBottom: '12px' }}>
          <Settings size={24} style={{ color: '#00ff88' }} />
          <h2 style={{ margin: 0, fontSize: '18px' }}>Анализ Проектов и Комбинаций Отказов</h2>
        </div>
        
        <p style={{ fontSize: '13px', color: '#aaa', lineHeight: '1.5' }}>
          Базовый сценарий загружен. Перед запуском комбинаторного анализа отказов задайте экономические константы, 
          которые будут использоваться для оценки стоимости возможных планов спасения группировки.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', backgroundColor: '#141414', padding: '20px', borderRadius: '8px', border: '1px solid #333' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '12px', color: '#00f0ff', fontWeight: 'bold' }}>Ежедневная вероятность отказа 1 спутника (доли единицы)</label>
            <input 
              type="number" step="0.001"
              value={failureProb} onChange={e => setFailureProb(parseFloat(e.target.value))}
              style={{ backgroundColor: '#1a1a1a', border: '1px solid #444', color: '#fff', padding: '8px', borderRadius: '4px', width: '200px' }}
            />
            <span style={{ fontSize: '11px', color: '#777' }}>Например: 0.01 (1% шанс в день)</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '12px', color: '#00ff88', fontWeight: 'bold' }}>Стоимость 1 экстренного пуска ракеты ($)</label>
            <input 
              type="number" step="1000000"
              value={launchCost} onChange={e => setLaunchCost(parseFloat(e.target.value))}
              style={{ backgroundColor: '#1a1a1a', border: '1px solid #444', color: '#fff', padding: '8px', borderRadius: '4px', width: '200px' }}
            />
            <span style={{ fontSize: '11px', color: '#777' }}>Обычно от $15M до $60M</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '12px', color: '#ffaa00', fontWeight: 'bold' }}>Задержка подготовки пуска (Дни)</label>
            <input 
              type="number"
              value={launchDelay} onChange={e => setLaunchDelay(parseInt(e.target.value))}
              style={{ backgroundColor: '#1a1a1a', border: '1px solid #444', color: '#fff', padding: '8px', borderRadius: '4px', width: '200px' }}
            />
            <span style={{ fontSize: '11px', color: '#777' }}>Время, в течение которого штрафы SLA будут накапливаться</span>
          </div>
        </div>

        <button
          onClick={handleStartAnalysis}
          style={{
            alignSelf: 'flex-start',
            backgroundColor: '#1473e6',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            padding: '12px 24px',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginTop: '10px'
          }}
        >
          <Play size={18} />
          <span>Запустить Анализ Комбинаций</span>
        </button>
      </div>
    );
  }

  if (loading) {
    return (
      <div style={{ padding: '30px', textAlign: 'center', color: '#00ff88', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <Activity size={48} className="animate-pulse" />
        <h3>Монте-Карло Анализ...</h3>
        <p style={{ color: '#aaa', fontSize: '12px' }}>
          Генерация комбинаций отказов, расчет маршрутов и оценка финансовых рисков (SLA) для всех возможных вариантов...
        </p>
      </div>
    );
  }

  if (error) {
    return <div style={{ padding: '20px', color: '#ff3b30' }}>Ошибка: {error}</div>;
  }

  const formatCurrency = (val: number) => {
    if (val >= 1000000) return `$${(val / 1000000).toFixed(1)}M`;
    if (val >= 1000) return `$${(val / 1000).toFixed(1)}k`;
    return `$${val}`;
  };

  return (
    <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px', height: '100%', overflowY: 'auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #383838', paddingBottom: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Activity size={18} style={{ color: '#1473e6' }} />
          <h3 style={{ margin: 0, fontSize: '14px', color: '#e0e0e0' }}>Сводка Монте-Карло (Big Data Analysis)</h3>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#00ff88', backgroundColor: '#00ff8815', padding: '4px 8px', borderRadius: '4px', border: '1px solid #00ff8840' }}>
          <ShieldCheck size={13} />
          <span>Все варианты отсортированы по Матожиданию Риска</span>
        </div>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: '#121212', color: '#888', borderBottom: '1px solid #333' }}>
              <th style={{ padding: '10px' }}>Сценарий</th>
              <th style={{ padding: '10px' }}>Вероятность</th>
              <th style={{ padding: '10px' }}>SLA %</th>
              <th style={{ padding: '10px' }}>Отказы (КА)</th>
              <th style={{ padding: '10px' }}>Общие Убытки</th>
              <th style={{ padding: '10px' }}>План Спасения</th>
              <th style={{ padding: '10px' }}>Действие</th>
            </tr>
          </thead>
          <tbody>
            {combinations.map((c: any, idx: number) => (
              <tr key={idx} style={{ borderBottom: '1px solid #282828', backgroundColor: idx % 2 === 0 ? '#1a1a1a' : '#141414' }}>
                <td style={{ padding: '10px', color: c.mc_type === 'optimistic' ? '#00ff88' : '#e0e0e0', fontWeight: 'bold' }}>
                  {c.scenario_meta?.title || `Вариант ${idx}`}
                </td>
                <td style={{ padding: '10px', color: '#00f0ff' }}>
                  {(c.mc_prob * 100).toFixed(4)}%
                </td>
                <td style={{ padding: '10px' }}>
                  <span style={{ color: (c.overall_availability * 100) >= 90 ? '#00ff88' : '#ff3b30', fontWeight: 'bold' }}>
                    {(c.overall_availability * 100).toFixed(1)}%
                  </span>
                </td>
                <td style={{ padding: '10px', color: c.mc_failed_count > 0 ? '#ff3b30' : '#888' }}>
                  {c.mc_failed_count}
                </td>
                <td style={{ padding: '10px', color: '#ffaa00', fontWeight: 'bold' }}>
                  {formatCurrency(c.total_annual_cost_usd)}
                </td>
                <td style={{ padding: '10px', color: '#ccc', maxWidth: '200px' }}>
                  {c.remediation_plan}
                </td>
                <td style={{ padding: '10px' }}>
                  {onVisualizeScenario && (
                    <button
                      onClick={() => {
                        onVisualizeScenario(c.raw_scenario, c.simulation_result);
                        if (onClose) onClose();
                      }}
                      style={{
                        backgroundColor: '#1473e6',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '6px 12px',
                        fontSize: '11px',
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
  );
};

