import React, { useState } from 'react';
import {
  Activity,
  Play,
  RotateCcw,
  X,
  Settings,
  ShieldAlert,
  DollarSign,
  Clock,
  Layers,
  Sparkles
} from 'lucide-react';
import { MonteCarloParameters } from '../types';

interface MonteCarloConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRunSimulation: (params: MonteCarloParameters) => void;
  isSimulating: boolean;
  initialParams?: Partial<MonteCarloParameters>;
  simulationProgress?: { percent: number; stage: string; active?: boolean };
}

export const MonteCarloConfigModal: React.FC<MonteCarloConfigModalProps> = ({
  isOpen,
  onClose,
  onRunSimulation,
  isSimulating,
  initialParams,
  simulationProgress
}) => {
  const [failureProb, setFailureProb] = useState<number>(initialParams?.failure_probability ?? 0.01);
  const [launchCost, setLaunchCost] = useState<number>(initialParams?.emergency_launch_cost_usd ?? 15000000);
  const [launchDelay, setLaunchDelay] = useState<number>(initialParams?.launch_delay_days ?? 14);
  const [numSamples, setNumSamples] = useState<number>(initialParams?.num_samples ?? 12);
  const [spareSats, setSpareSats] = useState<number>(initialParams?.spare_satellites ?? 2);
  const [slaPenalty, setSlaPenalty] = useState<number>(initialParams?.sla_penalty_per_client_usd ?? 120000);

  if (!isOpen) return null;

  const handleResetDefaults = () => {
    setFailureProb(0.01);
    setLaunchCost(15000000);
    setLaunchDelay(14);
    setNumSamples(12);
    setSpareSats(2);
    setSlaPenalty(120000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRunSimulation({
      failure_probability: failureProb,
      emergency_launch_cost_usd: launchCost,
      launch_delay_days: launchDelay,
      num_samples: numSamples,
      spare_satellites: spareSats,
      sla_penalty_per_client_usd: slaPenalty
    });
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(3, 7, 18, 0.75)',
        backdropFilter: 'blur(6px)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}
    >
      <div
        style={{
          backgroundColor: '#0c101a',
          border: '1px solid #1e293b',
          borderRadius: '14px',
          width: '100%',
          maxWidth: '580px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 25px rgba(2, 132, 199, 0.15)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 20px',
            backgroundColor: '#111726',
            borderBottom: '1px solid #1e293b'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                backgroundColor: '#0284c720',
                border: '1px solid #0284c7',
                padding: '6px',
                borderRadius: '8px',
                color: '#38bdf8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Activity size={18} />
            </div>
            <div>
              <h2
                style={{
                  margin: 0,
                  fontSize: '14px',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: '#ffffff'
                }}
              >
                Параметры симуляции Монте-Карло
              </h2>
              <p style={{ margin: '2px 0 0 0', fontSize: '11px', color: '#94a3b8' }}>
                Вероятностное моделирование надежности, экстренных пусков и рисков SLA
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            disabled={isSimulating}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#64748b',
              cursor: 'pointer',
              padding: '4px',
              borderRadius: '6px'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          {/* Row 1: Failure Probability */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <label style={{ fontSize: '12px', fontWeight: 700, color: '#38bdf8' }}>
                Ежедневная вероятность отказа 1 спутника:
              </label>
              <span style={{ fontSize: '12px', fontWeight: 800, fontFamily: 'monospace', color: '#ffffff' }}>
                {(failureProb * 100).toFixed(1)}% / сутки ({failureProb.toFixed(3)})
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <input
                type="range"
                min="0.001"
                max="0.050"
                step="0.001"
                value={failureProb}
                onChange={e => setFailureProb(parseFloat(e.target.value))}
                style={{ flex: 1, accentColor: '#38bdf8' }}
              />
              <input
                type="number"
                min="0.001"
                max="0.100"
                step="0.001"
                value={failureProb}
                onChange={e => setFailureProb(Math.max(0.001, parseFloat(e.target.value) || 0.001))}
                style={{
                  width: '75px',
                  backgroundColor: '#070a10',
                  border: '1px solid #334155',
                  color: '#fff',
                  borderRadius: '6px',
                  padding: '6px 8px',
                  fontSize: '11px',
                  fontFamily: 'monospace',
                  textAlign: 'center'
                }}
              />
            </div>
            <span style={{ fontSize: '10px', color: '#64748b' }}>
              Типичный показатель для низкоорбитальных группировок: от 0.5% до 2.0% в сутки.
            </span>
          </div>

          {/* Row 2: Emergency Launch Cost & Launch Delay */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            
            {/* Launch Cost */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '11px', fontWeight: 700, color: '#34d399' }}>
                Стоимость 1 экстренного пуска ($):
              </label>
              <input
                type="number"
                step="1000000"
                value={launchCost}
                onChange={e => setLaunchCost(Math.max(1000000, parseFloat(e.target.value) || 1000000))}
                style={{
                  backgroundColor: '#070a10',
                  border: '1px solid #334155',
                  color: '#fff',
                  borderRadius: '6px',
                  padding: '8px 10px',
                  fontSize: '12px',
                  fontFamily: 'monospace'
                }}
              />
              <div style={{ display: 'flex', gap: '4px' }}>
                {[15, 25, 50].map(m => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setLaunchCost(m * 1000000)}
                    style={{
                      padding: '2px 6px',
                      fontSize: '9px',
                      backgroundColor: launchCost === m * 1000000 ? '#059669' : '#1e293b',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    ${m}M
                  </button>
                ))}
              </div>
            </div>

            {/* Launch Preparation Delay */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '11px', fontWeight: 700, color: '#fbbf24' }}>
                Задержка подготовки пуска (дней):
              </label>
              <input
                type="number"
                min="1"
                max="90"
                value={launchDelay}
                onChange={e => setLaunchDelay(Math.max(1, parseInt(e.target.value) || 1))}
                style={{
                  backgroundColor: '#070a10',
                  border: '1px solid #334155',
                  color: '#fff',
                  borderRadius: '6px',
                  padding: '8px 10px',
                  fontSize: '12px',
                  fontFamily: 'monospace'
                }}
              />
              <span style={{ fontSize: '10px', color: '#64748b' }}>
                Период накопления штрафов SLA до вывода замены
              </span>
            </div>

          </div>

          {/* Row 3: Spare Satellites & Sample Size & SLA Penalty */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            
            {/* Spare Satellites */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '11px', fontWeight: 700, color: '#a78bfa' }}>
                Орбитальный резерв:
              </label>
              <input
                type="number"
                min="0"
                max="10"
                value={spareSats}
                onChange={e => setSpareSats(Math.max(0, parseInt(e.target.value) || 0))}
                style={{
                  backgroundColor: '#070a10',
                  border: '1px solid #334155',
                  color: '#fff',
                  borderRadius: '6px',
                  padding: '8px 10px',
                  fontSize: '12px',
                  fontFamily: 'monospace'
                }}
              />
              <span style={{ fontSize: '9px', color: '#64748b' }}>
                Мгновенное парирование без ракеты
              </span>
            </div>

            {/* Sample Size */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <label style={{ fontSize: '11px', fontWeight: 700, color: '#38bdf8' }}>
                  Размер выборки (N сценариев):
                </label>
                <span style={{ fontSize: '10px', color: '#94a3b8', fontFamily: 'monospace' }}>
                  {numSamples <= 24 ? '~1 сек' : numSamples <= 50 ? '~2.5 сек' : numSamples <= 100 ? '~5 сек' : '~10 сек'}
                </span>
              </div>

              {/* Quick Presets */}
              <div style={{ display: 'flex', gap: '4px' }}>
                {[12, 24, 50, 100, 200].map(cnt => (
                  <button
                    key={cnt}
                    type="button"
                    onClick={() => setNumSamples(cnt)}
                    style={{
                      flex: 1,
                      backgroundColor: numSamples === cnt ? '#0284c7' : '#111726',
                      color: numSamples === cnt ? '#ffffff' : '#94a3b8',
                      border: `1px solid ${numSamples === cnt ? '#38bdf8' : '#334155'}`,
                      borderRadius: '4px',
                      padding: '3px 0',
                      fontSize: '10px',
                      fontFamily: 'monospace',
                      cursor: 'pointer',
                      fontWeight: numSamples === cnt ? 700 : 400
                    }}
                  >
                    N={cnt}
                  </button>
                ))}
              </div>

              <input
                type="number"
                min="5"
                max="500"
                value={numSamples}
                onChange={e => setNumSamples(Math.max(5, Math.min(500, parseInt(e.target.value) || 12)))}
                style={{
                  backgroundColor: '#070a10',
                  border: '1px solid #334155',
                  color: '#fff',
                  borderRadius: '6px',
                  padding: '8px 10px',
                  fontSize: '12px',
                  fontFamily: 'monospace'
                }}
              />
              <span style={{ fontSize: '9px', color: '#64748b' }}>
                Масштабируемый размер выборки Монте-Карло (от 5 до 500)
              </span>
            </div>

            {/* SLA Penalty */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '11px', fontWeight: 700, color: '#f87171' }}>
                Штраф SLA/клиент:
              </label>
              <input
                type="number"
                step="10000"
                value={slaPenalty}
                onChange={e => setSlaPenalty(Math.max(0, parseFloat(e.target.value) || 0))}
                style={{
                  backgroundColor: '#070a10',
                  border: '1px solid #334155',
                  color: '#fff',
                  borderRadius: '6px',
                  padding: '8px 10px',
                  fontSize: '12px',
                  fontFamily: 'monospace'
                }}
              />
              <span style={{ fontSize: '9px', color: '#64748b' }}>
                Сумма за 1 невыполненный SLA в год
              </span>
            </div>
          </div>

          {/* Live Progress Bar during Simulation */}
          {isSimulating && (
            <div style={{
              backgroundColor: '#070a10',
              border: '1px solid rgba(56, 189, 248, 0.4)',
              borderRadius: '8px',
              padding: '12px 14px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              marginTop: '8px',
              boxShadow: '0 4px 20px rgba(2, 132, 199, 0.2)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Activity size={14} className="animate-spin" style={{ color: '#38bdf8' }} />
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#ffffff', fontFamily: 'monospace' }}>
                    {simulationProgress?.stage || 'Вычисление Монте-Карло...'}
                  </span>
                </div>
                <span style={{ fontSize: '13px', fontWeight: 900, color: '#38bdf8', fontFamily: 'monospace' }}>
                  {simulationProgress?.percent ?? 25}%
                </span>
              </div>

              <div style={{ height: '6px', width: '100%', backgroundColor: '#1e293b', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{
                  height: '100%',
                  width: `${simulationProgress?.percent ?? 25}%`,
                  background: 'linear-gradient(90deg, #0284c7 0%, #38bdf8 50%, #10b981 100%)',
                  borderRadius: '3px',
                  transition: 'width 0.15s ease-out',
                  boxShadow: '0 0 10px rgba(56, 189, 248, 0.6)'
                }} />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: '#64748b', fontFamily: 'monospace' }}>
                <span>Параллельный расчет (8 потоков)</span>
                <span>Выборка N={numSamples}</span>
              </div>
            </div>
          )}

          {/* Actions */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '10px',
              paddingTop: '16px',
              borderTop: '1px solid #1e293b'
            }}
          >
            <button
              type="button"
              onClick={handleResetDefaults}
              style={{
                background: 'transparent',
                border: '1px solid #334155',
                color: '#94a3b8',
                borderRadius: '6px',
                padding: '8px 14px',
                fontSize: '11px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <RotateCcw size={13} />
              <span>По умолчанию</span>
            </button>

            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                type="button"
                onClick={onClose}
                disabled={isSimulating}
                style={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #334155',
                  color: '#cbd5e1',
                  borderRadius: '6px',
                  padding: '8px 14px',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Отмена
              </button>

              <button
                type="submit"
                disabled={isSimulating}
                style={{
                  backgroundColor: '#0284c7',
                  border: 'none',
                  color: '#ffffff',
                  borderRadius: '6px',
                  padding: '9px 18px',
                  fontSize: '12px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 0 16px rgba(2, 132, 199, 0.4)'
                }}
              >
                {isSimulating ? (
                  <>
                    <RotateCcw size={14} className="animate-spin" />
                    <span>Расчет Монте-Карло...</span>
                  </>
                ) : (
                  <>
                    <Play size={14} />
                    <span>Запустить расчет Монте-Карло</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};
