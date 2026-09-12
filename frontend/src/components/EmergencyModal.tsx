import React, { useState } from 'react';
import { ShieldAlert, Zap, Radio, Trash2, Activity, DollarSign, CheckCircle2, RefreshCw } from 'lucide-react';
import { DraggableWindow } from './DraggableWindow';
import { SatelliteOutage, OutlinerSettings } from '../types';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  zIndex: number;
  onFocusWindow: () => void;
  currentOutages: SatelliteOutage[];
  outlinerSettings: OutlinerSettings;
  onApplyOutageBatch: (outages: SatelliteOutage[]) => void;
  onClearOutages: () => void;
  onUpdateSettings: (newSettings: OutlinerSettings) => void;
  onAddLog: (text: string, type: 'info' | 'success' | 'warning' | 'error') => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({
  isOpen,
  onClose,
  zIndex,
  onFocusWindow,
  currentOutages,
  outlinerSettings,
  onApplyOutageBatch,
  onClearOutages,
  onUpdateSettings,
  onAddLog
}) => {
  const [activeEmergency, setActiveEmergency] = useState<string | null>(null);

  if (!isOpen) return null;

  const activeCount = currentOutages.length;

  const handleSimulateFlare = () => {
    setActiveEmergency('cme_flare');
    const flareOutages: SatelliteOutage[] = [
      { satellite_id: 'S01', start_s: 0, end_s: 86400 },
      { satellite_id: 'S02', start_s: 0, end_s: 86400 },
      { satellite_id: 'S03', start_s: 0, end_s: 86400 },
      { satellite_id: 'S04', start_s: 0, end_s: 86400 }
    ];
    onApplyOutageBatch(flareOutages);
    onAddLog('⚡ [Событие ЧС] Геомагнитная солнечная вспышка CME! Выведены из строя КА S01, S02, S03, S04 плоскости P1.', 'error');
  };

  const handleSimulateGatewayOutage = () => {
    setActiveEmergency('gateway_down');
    const gwOutages: SatelliteOutage[] = [
      { satellite_id: 'S15', start_s: 0, end_s: 86400 },
      { satellite_id: 'S16', start_s: 0, end_s: 86400 },
      { satellite_id: 'S17', start_s: 0, end_s: 86400 }
    ];
    onApplyOutageBatch(gwOutages);
    onAddLog('📡 [Событие ЧС] Авария энергосети наземного хаба (Мурманск)! Отключен шлюзовой канал с S15, S16, S17.', 'error');
  };

  const handleSimulateDebrisStrike = () => {
    setActiveEmergency('debris_strike');
    const debrisOutages: SatelliteOutage[] = [
      { satellite_id: 'S09', start_s: 0, end_s: 86400 },
      { satellite_id: 'S10', start_s: 0, end_s: 86400 },
      { satellite_id: 'S11', start_s: 0, end_s: 86400 },
      { satellite_id: 'S12', start_s: 0, end_s: 86400 }
    ];
    onApplyOutageBatch(debrisOutages);
    onAddLog('💥 [Событие ЧС] Попадание элементов космического мусора в сегменте плоскости P2 (S09-S12)! Разрыв межспутникового кольца ISL.', 'error');
  };

  const handleSimulateSurge = () => {
    setActiveEmergency('arctic_surge');
    const surgeOutages: SatelliteOutage[] = [
      { satellite_id: 'S22', start_s: 0, end_s: 86400 },
      { satellite_id: 'S23', start_s: 0, end_s: 86400 }
    ];
    onApplyOutageBatch(surgeOutages);
    onAddLog('🚑 [Событие ЧС] Спасательная операция в Арктике! Перегрузка трафика на узлах S22, S23.', 'warning');
  };

  const handleApplyEconomicGridReconfig = () => {
    const newPhaseMap = {
      ...outlinerSettings.planePhaseMap,
      1: (outlinerSettings.planePhaseMap[1] || 0) + 15,
      2: (outlinerSettings.planePhaseMap[2] || 0) + 15
    };
    onUpdateSettings({
      ...outlinerSettings,
      planePhaseMap: newPhaseMap
    });
    onAddLog('💰 [Экономическая компенсация] Применена оптимальная перенастройка сетки орбит (изменение фазирования P1/P2 на +15°). Затраты: $50,000 ксенонового манёвра. Связность восстановлена, экономия $3.27M!', 'success');
  };

  const handleApplySpareSatLaunch = () => {
    onClearOutages();
    onAddLog('🚀 [Компенсация] Выведены 4 орторезервных аппарата из орбитального запаса. Затраты: $3,320,000. Штатная структура восстановлена 100%.', 'info');
  };

  return (
    <DraggableWindow
      id="emergency_modal"
      title="Симуляция Событий ЧС & Экономические Рекомендации"
      isOpen={isOpen}
      onClose={onClose}
      zIndex={zIndex}
      onFocus={onFocusWindow}
      initialPos={{ x: 120, y: 50, width: 680, height: 580 }}
    >
      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px', color: '#e0e0e0', fontSize: '12px' }}>
        
        {/* Header Banner */}
        <div style={{
          backgroundColor: activeCount > 0 ? '#ff3b3015' : '#1473e615',
          border: `1px solid ${activeCount > 0 ? '#ff3b3050' : '#1473e650'}`,
          borderRadius: '6px',
          padding: '12px 14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldAlert size={22} style={{ color: activeCount > 0 ? '#ff3b30' : '#1473e6' }} />
            <div>
              <div style={{ fontWeight: 600, fontSize: '13px', color: '#fff' }}>
                {activeCount > 0 ? `АКТИВНО СОБЫТИЕ ЧС (${activeCount} КА НЕРАБОТОСПОСОБНЫ)` : 'СИСТЕМА В ШТАТНОМ РЕЖИМЕ (ЧС НЕ ОБНАРУЖЕНО)'}
              </div>
              <div style={{ color: '#888', fontSize: '11px', marginTop: '2px' }}>
                Моделирование аварийных ситуаций и расчет самого экономически выгодного варианта компенсации.
              </div>
            </div>
          </div>
          {activeCount > 0 && (
            <button
              onClick={() => {
                onClearOutages();
                setActiveEmergency(null);
                onAddLog('Сброшены все аварийные состояния ЧС.', 'info');
              }}
              style={{
                backgroundColor: '#333',
                color: '#fff',
                border: '1px solid #555',
                borderRadius: '4px',
                padding: '4px 10px',
                fontSize: '11px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <RefreshCw size={12} />
              <span>Ликвидировать ЧС</span>
            </button>
          )}
        </div>

        {/* Section 1: Presets for Emergency Simulation */}
        <div>
          <div style={{ fontWeight: 600, color: '#ccc', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Zap size={14} style={{ color: '#ffaa00' }} />
            <span>Выбор сценария техногенной / природной ЧС:</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            <button
              onClick={handleSimulateFlare}
              style={{
                backgroundColor: activeEmergency === 'cme_flare' ? '#3d1c1c' : '#1c1c1c',
                border: `1px solid ${activeEmergency === 'cme_flare' ? '#ff3b30' : '#333'}`,
                borderRadius: '6px',
                padding: '10px',
                textAlign: 'left',
                cursor: 'pointer',
                color: '#e0e0e0',
                transition: 'all 0.15s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, color: '#ff5555' }}>
                <Zap size={14} />
                <span>⚡ 1. Солнечная вспышка (CME)</span>
              </div>
              <div style={{ fontSize: '10px', color: '#888', marginTop: '4px' }}>
                Единовременный отказ 4 КА в экваториальной плоскости (S01, S02, S03, S04).
              </div>
            </button>

            <button
              onClick={handleSimulateGatewayOutage}
              style={{
                backgroundColor: activeEmergency === 'gateway_down' ? '#3d1c1c' : '#1c1c1c',
                border: `1px solid ${activeEmergency === 'gateway_down' ? '#ff3b30' : '#333'}`,
                borderRadius: '6px',
                padding: '10px',
                textAlign: 'left',
                cursor: 'pointer',
                color: '#e0e0e0',
                transition: 'all 0.15s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, color: '#ffaa00' }}>
                <Radio size={14} />
                <span>📡 2. Отказ наземного шлюза</span>
              </div>
              <div style={{ fontSize: '10px', color: '#888', marginTop: '4px' }}>
                Авария энергоснабжения Мурманского шлюза. Потеря фидерных линий S15-S17.
              </div>
            </button>

            <button
              onClick={handleSimulateDebrisStrike}
              style={{
                backgroundColor: activeEmergency === 'debris_strike' ? '#3d1c1c' : '#1c1c1c',
                border: `1px solid ${activeEmergency === 'debris_strike' ? '#ff3b30' : '#333'}`,
                borderRadius: '6px',
                padding: '10px',
                textAlign: 'left',
                cursor: 'pointer',
                color: '#e0e0e0',
                transition: 'all 0.15s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, color: '#ff3b30' }}>
                <Trash2 size={14} />
                <span>💥 3. Каскад космического мусора</span>
              </div>
              <div style={{ fontSize: '10px', color: '#888', marginTop: '4px' }}>
                Удар фрагментом мусора в районе плоскости P2. Разрыв кольца ISL (S09-S12).
              </div>
            </button>

            <button
              onClick={handleSimulateSurge}
              style={{
                backgroundColor: activeEmergency === 'arctic_surge' ? '#1c2d3d' : '#1c1c1c',
                border: `1px solid ${activeEmergency === 'arctic_surge' ? '#1473e6' : '#333'}`,
                borderRadius: '6px',
                padding: '10px',
                textAlign: 'left',
                cursor: 'pointer',
                color: '#e0e0e0',
                transition: 'all 0.15s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, color: '#38bdf8' }}>
                <Activity size={14} />
                <span>🚑 4. Спасательная операция ЧС</span>
              </div>
              <div style={{ fontSize: '10px', color: '#888', marginTop: '4px' }}>
                500% всплеск нагрузки в арктической зоне. Перегрузка задержки на узлах S22, S23.
              </div>
            </button>
          </div>
        </div>

        {/* Section 1.5: Gateway Emergency Outages */}
        <div style={{ backgroundColor: '#141822', border: '1px solid #1e293b', borderRadius: '6px', padding: '12px' }}>
          <div style={{ fontWeight: 600, color: '#e2e8f0', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px' }}>
            <Radio size={14} style={{ color: '#ffaa00' }} />
            <span>Управление аварийными отказами наземных шлюзовых станций (Gateways):</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(115px, 1fr))', gap: '6px' }}>
            {[
              { id: 'C65', name: 'Москва C65' },
              { id: 'Pechora', name: 'Печора' },
              { id: 'Murmansk', name: 'Мурманск' },
              { id: 'Novosibirsk', name: 'Новосибирск' },
              { id: 'Vladivostok', name: 'Владивосток' }
            ].map(gw => {
              const isOffline = !!outlinerSettings.offlineGateways?.[gw.id];
              return (
                <button
                  key={gw.id}
                  onClick={() => {
                    const nextMap = {
                      ...(outlinerSettings.offlineGateways || {}),
                      [gw.id]: !isOffline
                    };
                    onUpdateSettings({
                      ...outlinerSettings,
                      offlineGateways: nextMap
                    });
                    if (!isOffline) {
                      onAddLog(`📡 [Событие ЧС] Авария наземного шлюзового узла ${gw.name} (${gw.id})! Станция отключена.`, 'error');
                    } else {
                      onAddLog(`📡 [Восстановление] Шлюзовой узел ${gw.name} (${gw.id}) восстановлен и вернулся в строй.`, 'success');
                    }
                  }}
                  style={{
                    backgroundColor: isOffline ? '#ff3b3025' : '#1e293b',
                    border: `1px solid ${isOffline ? '#ff3b30' : '#334155'}`,
                    color: isOffline ? '#ff4d4f' : '#cbd5e1',
                    borderRadius: '4px',
                    padding: '6px 8px',
                    fontSize: '11px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span>{gw.name}</span>
                  <span style={{ fontSize: '9px', padding: '1px 4px', borderRadius: '2px', backgroundColor: isOffline ? '#ff3b30' : '#00ff8820', color: isOffline ? '#fff' : '#00ff88' }}>
                    {isOffline ? 'АВАРИЯ' : 'ОК'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Section 2: Economic Recommendation Engine for Loss Compensation */}
        <div style={{
          backgroundColor: '#161d24',
          border: '1px solid #1473e660',
          borderRadius: '6px',
          padding: '14px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00f0ff', fontWeight: 600, fontSize: '13px' }}>
              <DollarSign size={16} />
              <span>Расчет самого экономически выгодного варианта компенсации</span>
            </div>
            <span style={{ fontSize: '10px', backgroundColor: '#00ff8820', color: '#00ff88', border: '1px solid #00ff8850', padding: '2px 6px', borderRadius: '3px' }}>
              WGS-84 / SLA Оптимизатор
            </span>
          </div>

          {activeCount === 0 ? (
            <div style={{ color: '#888', fontSize: '11px', fontStyle: 'italic', padding: '10px 0' }}>
              Выберите один из сценариев ЧС выше или кликните по любому спутнику на 3D-глобусе для расчета экономической компенсации отказа.
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              
              {/* Damage Banner */}
              <div style={{ fontSize: '11px', color: '#aaa', backgroundColor: '#111', padding: '8px 10px', borderRadius: '4px', borderLeft: '3px solid #ff3b30' }}>
                <span style={{ color: '#ff3b30', fontWeight: 'bold' }}>[ПРОГНОЗ УБЫТКОВ]:</span> Риск штрафов SLA за простой связи: <b style={{ color: '#fff' }}>${(activeCount * 120000).toLocaleString()}/год</b>.
              </div>

              {/* Option A: Recommended Optimization (Re-routing & Re-phasing) */}
              <div style={{
                backgroundColor: '#0c2419',
                border: '1px solid #00ff8880',
                borderRadius: '6px',
                padding: '12px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#00ff88', fontWeight: 'bold' }}>
                    <CheckCircle2 size={15} />
                    <span>ВАРИАНТ 1: Перенастройка сетки & Перефазирование орбит</span>
                  </div>
                  <span style={{ backgroundColor: '#00ff88', color: '#000', fontWeight: 'bold', fontSize: '10px', padding: '2px 6px', borderRadius: '3px' }}>
                    [САМЫЙ ВЫГОДНЫЙ]
                  </span>
                </div>

                <div style={{ fontSize: '11px', color: '#bbb', lineHeight: '1.4' }}>
                  <b>Суть метода:</b> Автоматический перерасчет топологии ISL в обход отказавших аппаратов + сдвиг фазирования соседних орбит (ΔPhase = +15°).
                  <br />
                  <b>Затраты:</b> <b style={{ color: '#00ff88' }}>$50,000</b> (расход ксенонового топлива на коррекцию орбитальной позиции).
                  <br />
                  <b>Экономический эффект:</b> Полное сохранение SLA 99.9%. Чистая экономия: <b style={{ color: '#00ff88' }}>$3,270,000</b> по сравнению с физической заменой аппаратов.
                </div>

                <button
                  onClick={handleApplyEconomicGridReconfig}
                  style={{
                    backgroundColor: '#00ff88',
                    color: '#000',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '8px 12px',
                    fontWeight: 'bold',
                    fontSize: '11px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    marginTop: '4px'
                  }}
                >
                  <CheckCircle2 size={14} />
                  <span>Применить перенастройку сетки (Экономия $3.27M)</span>
                </button>
              </div>

              {/* Option B: Spare Satellite Replacement */}
              <div style={{
                backgroundColor: '#1f1616',
                border: '1px solid #ff3b3040',
                borderRadius: '6px',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: 600, color: '#ff6666' }}>ВАРИАНТ 2: Замена резервными спутниками из запаса</span>
                  <span style={{ color: '#888', fontSize: '10px' }}>[ВЫСОКИЕ ЗАТРАТЫ]</span>
                </div>

                <div style={{ fontSize: '11px', color: '#aaa' }}>
                  <b>Затраты:</b> <b style={{ color: '#ff6666' }}>${(activeCount * 830000).toLocaleString()}</b> (${activeCount}x КА CAPEX $650k + межорбитальный переход $180k).
                </div>

                <button
                  onClick={handleApplySpareSatLaunch}
                  style={{
                    backgroundColor: '#2a2020',
                    color: '#ff8888',
                    border: '1px solid #ff3b3060',
                    borderRadius: '4px',
                    padding: '6px 10px',
                    fontSize: '11px',
                    cursor: 'pointer',
                    marginTop: '2px'
                  }}
                >
                  Ввести {activeCount} резервных КА из запаса (${(activeCount * 830000 / 1000000).toFixed(2)}M)
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </DraggableWindow>
  );
};
