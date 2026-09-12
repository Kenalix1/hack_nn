import React, { useState, useEffect } from 'react';
import { Play, Loader, BarChart2, Filter, AlertTriangle } from 'lucide-react';

interface MassSimulationModalProps {
  scenario: any;
  onClose: () => void;
  onDrillDown: (failures: any[]) => void;
  onSetCriticalSatellites?: (sats: string[]) => void;
  failureProb?: number;
  launchCost?: number;
}

export const MassSimulationModal: React.FC<MassSimulationModalProps> = ({ scenario, onClose, onDrillDown, onSetCriticalSatellites, failureProb, launchCost }) => {
  const [maxScenarios, setMaxScenarios] = useState<number>(500);
  const [includeRaanOpt, setIncludeRaanOpt] = useState<boolean>(false);
  const [taskId, setTaskId] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'running' | 'completed' | 'error'>('idle');
  const [progress, setProgress] = useState({ completed: 0, total: 0 });
  const [results, setResults] = useState<any>(null);
  const [filteredResults, setFilteredResults] = useState<any[]>([]);

  // Filtering weights
  const [wAvail, setWAvail] = useState(0.5);
  const [wCost, setWCost] = useState(0.3);
  const [wOutage, setWOutage] = useState(0.2);

  const startSimulation = async () => {
    try {
      setStatus('running');
      let url = `/api/mass_simulate?max_scenarios=${maxScenarios}&include_raan_opt=${includeRaanOpt}`;
      if (failureProb !== undefined) url += `&failure_probability=${failureProb}`;
      if (launchCost !== undefined) url += `&emergency_launch_cost_usd=${launchCost}`;
      
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ scenario })
      });
      const data = await res.json();
      setTaskId(data.task_id);
    } catch (e) {
      setStatus('error');
    }
  };

  useEffect(() => {
    if (status === 'running' && taskId) {
      const eventSource = new EventSource(`/api/mass_simulate/${taskId}/progress`);
      eventSource.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.status === 'completed') {
          setStatus('completed');
          eventSource.close();
          fetchResults();
        } else if (data.status === 'error') {
          setStatus('error');
          eventSource.close();
        } else {
          setProgress(data.progress);
        }
      };
      return () => eventSource.close();
    }
  }, [status, taskId]);

  const fetchResults = async () => {
    if (!taskId) return;
    const res = await fetch(`/api/mass_simulate/${taskId}/results`);
    const data = await res.json();
    setResults(data);
    applyFilter();
    
    if (onSetCriticalSatellites && data.vulnerability_ranking) {
        const criticalSats = data.vulnerability_ranking.slice(0, 10).map((v: any) => v.satellite_id);
        onSetCriticalSatellites(criticalSats);
    }
  };

  const applyFilter = async () => {
    if (!taskId) return;
    const res = await fetch(`/api/mass_simulate/${taskId}/filter`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        weights: { availability: wAvail, cost: wCost, outage: wOutage },
        thresholds: { availability: 0.0, cost: Infinity }
      })
    });
    const data = await res.json();
    setFilteredResults(data.filtered_results || []);
  };

  useEffect(() => {
    if (status === 'completed') {
      applyFilter();
    }
  }, [wAvail, wCost, wOutage]);

  return (
    <div style={{ padding: '20px', color: '#e2e8f0' }}>
      {status === 'idle' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <h3>Настройки массовой симуляции</h3>
          <div>
            <label>Количество комбинаций (сценариев): {maxScenarios}</label>
            <input type="range" min="10" max="5000" step="10" value={maxScenarios} onChange={e => setMaxScenarios(Number(e.target.value))} style={{ width: '100%' }} />
          </div>
          <div>
            <label>
              <input type="checkbox" checked={includeRaanOpt} onChange={e => setIncludeRaanOpt(e.target.checked)} />
              Оптимизация RAAN/Phase (Grid Search)
            </label>
          </div>
          <button onClick={startSimulation} style={{ padding: '10px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Запустить анализ
          </button>
        </div>
      )}

      {status === 'running' && (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <Loader className="animate-spin" size={48} style={{ margin: '0 auto 20px', color: '#38bdf8' }} />
          <h3>Вычисление сценариев...</h3>
          <p>Обработано: {progress.completed} / {progress.total}</p>
          <div style={{ width: '100%', height: '8px', background: '#333', borderRadius: '4px', marginTop: '10px' }}>
            <div style={{ width: `${progress.total ? (progress.completed / progress.total) * 100 : 0}%`, height: '100%', background: '#38bdf8', borderRadius: '4px' }} />
          </div>
        </div>
      )}

      {status === 'completed' && results && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', gap: '20px' }}>
            <div style={{ flex: 1, background: '#20242b', padding: '15px', borderRadius: '8px' }}>
              <h4>Ожидаемая доступность</h4>
              <h2 style={{ color: '#34d399' }}>{(results.expected_availability * 100).toFixed(2)}%</h2>
            </div>
            <div style={{ flex: 1, background: '#20242b', padding: '15px', borderRadius: '8px' }}>
              <h4>Ожидаемый финансовый риск</h4>
              <h2 style={{ color: '#f87171' }}>${results.expected_risk.toLocaleString(undefined, { maximumFractionDigits: 0 })}</h2>
            </div>
            <div style={{ flex: 1, background: '#20242b', padding: '15px', borderRadius: '8px' }}>
              <h4>TCO (Годовая стоимость владения)</h4>
              <h2 style={{ color: '#fbbf24' }}>${results.tco_annual.toLocaleString(undefined, { maximumFractionDigits: 0 })}</h2>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <div style={{ flex: 1, background: '#20242b', padding: '15px', borderRadius: '8px' }}>
              <h4>Топ Уязвимых Спутников</h4>
              <ul style={{ paddingLeft: '20px' }}>
                {results.vulnerability_ranking.slice(0, 5).map((v: any, i: number) => (
                  <li key={i}>[{v.satellite_id}]: -{(v.avg_impact * 100).toFixed(2)}% доступности при отказе</li>
                ))}
              </ul>
            </div>
            <div style={{ flex: 1, background: '#20242b', padding: '15px', borderRadius: '8px' }}>
              <h4>Настройка весов (Многокритериальная фильтрация)</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label>Доступность ({wAvail}) <input type="range" min="0" max="1" step="0.1" value={wAvail} onChange={e => setWAvail(Number(e.target.value))} /></label>
                <label>Стоимость ({wCost}) <input type="range" min="0" max="1" step="0.1" value={wCost} onChange={e => setWCost(Number(e.target.value))} /></label>
                <label>Задержка/Outage ({wOutage}) <input type="range" min="0" max="1" step="0.1" value={wOutage} onChange={e => setWOutage(Number(e.target.value))} /></label>
              </div>
            </div>
          </div>

          <div style={{ background: '#20242b', padding: '15px', borderRadius: '8px' }}>
            <h4>Лучшие сценарии (Парето-оптимальные и близкие)</h4>
            <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #333' }}>
                  <th style={{ padding: '8px' }}>Score</th>
                  <th style={{ padding: '8px' }}>Доступность</th>
                  <th style={{ padding: '8px' }}>Стоимость</th>
                  <th style={{ padding: '8px' }}>Отказы (k)</th>
                  <th style={{ padding: '8px' }}>Действие</th>
                </tr>
              </thead>
              <tbody>
                {filteredResults.slice(0, 10).map((r, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #333' }}>
                    <td style={{ padding: '8px' }}>{r.score.toFixed(3)}</td>
                    <td style={{ padding: '8px', color: r.availability >= 0.9 ? '#34d399' : '#f87171' }}>{(r.availability * 100).toFixed(2)}%</td>
                    <td style={{ padding: '8px' }}>${r.total_cost.toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                    <td style={{ padding: '8px' }}>{r.k_failed} шт.</td>
                    <td style={{ padding: '8px' }}>
                      <button onClick={() => onDrillDown(r.failed_satellites)} style={{ background: '#38bdf8', color: '#16181d', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}>
                        В 3D
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
