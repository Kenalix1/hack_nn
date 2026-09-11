import React, { useState } from 'react';
import { AlertOctagon, CheckCircle, Power, Clock, X } from 'lucide-react';
import { Satellite, SatelliteOutage } from '../types';
import { getDynamicSatelliteTelemetry } from '../utils/telemetry';

interface SatelliteOutageModalProps {
  satellite: Satellite | null;
  currentOutages: SatelliteOutage[];
  currentTimeSeconds?: number;
  onClose: () => void;
  onApplyOutage: (satId: string, durationSeconds: number) => void;
  onRestoreSatellite: (satId: string) => void;
}

export const SatelliteOutageModal: React.FC<SatelliteOutageModalProps> = ({
  satellite: rawSatellite,
  currentOutages,
  currentTimeSeconds = 0,
  onClose,
  onApplyOutage,
  onRestoreSatellite
}) => {
  if (!rawSatellite) return null;

  const satellite = getDynamicSatelliteTelemetry(rawSatellite, currentTimeSeconds);

  const activeOutage = currentOutages.find(o => o.satellite_id === satellite.id);
  const isOffline = !!activeOutage;
  const [duration, setDuration] = useState<number>(3600);

  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '440px',
      backgroundColor: '#222222',
      border: '1px solid #383838',
      borderRadius: '8px',
      boxShadow: '0 12px 36px rgba(0,0,0,0.8)',
      zIndex: 200,
      color: '#e0e0e0',
      overflow: 'hidden',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Header */}
      <div style={{
        height: '40px',
        backgroundColor: '#1a1a1a',
        borderBottom: '1px solid #383838',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 14px',
        fontWeight: 600
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <AlertOctagon size={16} style={{ color: isOffline ? '#ff3b30' : '#1473e6' }} />
          <span>Управление Спутником {satellite.id}</span>
        </div>
        <button onClick={onClose} style={closeButtonStyle}>
          <X size={14} />
        </button>
      </div>

      {/* Body */}
      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '12px' }}>
        
        {/* Status Card */}
        <div style={{
          padding: '12px',
          backgroundColor: isOffline ? '#ff3b3015' : '#00ff8815',
          border: `1px solid ${isOffline ? '#ff3b3050' : '#00ff8850'}`,
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div>
            <span style={{ fontSize: '11px', color: '#aaa' }}>Текущее состояние:</span>
            <div style={{ fontSize: '14px', fontWeight: 'bold', color: isOffline ? '#ff3b30' : '#00ff88', marginTop: '2px' }}>
              {isOffline ? 'ВЫВЕДЕН ИЗ СТРОЯ (ОТКАЗ)' : 'ШТАТНОЕ ФУНКЦИОНИРОВАНИЕ'}
            </div>
          </div>
          {isOffline ? <AlertOctagon size={24} color="#ff3b30" /> : <CheckCircle size={24} color="#00ff88" />}
        </div>

        {/* Info Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', backgroundColor: '#181818', padding: '10px', borderRadius: '4px' }}>
          <div><span style={{ color: '#888' }}>Идентификатор:</span> <b style={{ color: '#fff' }}>{satellite.id}</b></div>
          <div><span style={{ color: '#888' }}>Плоскость:</span> <b style={{ color: '#fff' }}>P{satellite.plane}</b></div>
          <div><span style={{ color: '#888' }}>Высота:</span> <b style={{ color: '#fff' }}>{Math.round(satellite.altitude)} км</b></div>
          <div><span style={{ color: '#888' }}>Широта:</span> <b style={{ color: '#fff' }}>{satellite.sub_lat.toFixed(1)}°</b></div>
          <div>
            <span style={{ color: '#888' }}>Температура бортовой ЭВМ:</span>{' '}
            <b style={{ color: (satellite.temperature_c ?? 38) >= 80 ? '#ff3b30' : (satellite.temperature_c ?? 38) >= 60 ? '#ffaa00' : '#00ff88' }}>
              {satellite.temperature_c ?? 38.5}°C {(satellite.temperature_c ?? 38) >= 80 ? '[ПЕРЕГРЕВ]' : ''}
            </b>
          </div>
          <div>
            <span style={{ color: '#888' }}>Запас топлива (ЭРДУ ксенон):</span>{' '}
            <b style={{ color: (satellite.fuel_pct ?? 95) < 20 ? '#ff3b30' : '#00f0ff' }}>
              {satellite.fuel_kg ?? 9.99} кг ({satellite.fuel_pct ?? 99.9}%)
            </b>
          </div>
          <div>
            <span style={{ color: '#888' }}>Солнечные батареи:</span>{' '}
            <b style={{ color: '#ffaa00' }}>
              {satellite.solar_power_w ?? 1850} Вт (Номинал)
            </b>
          </div>
          <div>
            <span style={{ color: '#888' }}>Заряд аккумуляторов (АКБ):</span>{' '}
            <b style={{ color: '#00ff88' }}>
              {satellite.battery_pct ?? 100}%
            </b>
          </div>
        </div>

        {/* Action Controls */}
        {!isOffline ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label style={{ color: '#aaa', fontWeight: 500 }}>Задать длительность отказа (сек):</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' }}>
              {[
                { label: '5 мин', val: 300 },
                { label: '30 мин', val: 1800 },
                { label: '1 час', val: 3600 },
                { label: '24 часа', val: 86400 }
              ].map(item => (
                <button
                  key={item.val}
                  onClick={() => setDuration(item.val)}
                  style={{
                    padding: '6px 0',
                    fontSize: '11px',
                    backgroundColor: duration === item.val ? '#1473e6' : '#2a2a2a',
                    color: duration === item.val ? '#fff' : '#ccc',
                    border: '1px solid #444',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => onApplyOutage(satellite.id, duration)}
              style={{
                backgroundColor: '#ff3b30',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                padding: '10px',
                fontWeight: 600,
                fontSize: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                marginTop: '4px'
              }}
            >
              <Power size={14} />
              <span>Вывести из строя ({duration >= 3600 ? `${duration/3600} ч` : `${duration/60} мин`})</span>
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            
            {/* Economic Compensation Recommendations */}
            <div style={{
              backgroundColor: '#0c2419',
              border: '1px solid #00ff8880',
              borderRadius: '6px',
              padding: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 'bold', color: '#00ff88' }}>💰 ВАРИАНТ 1: Перенастройка сетки ISL</span>
                <span style={{ backgroundColor: '#00ff88', color: '#000', fontWeight: 'bold', fontSize: '9px', padding: '1px 5px', borderRadius: '3px' }}>
                  [САМЫЙ ВЫГОДНЫЙ]
                </span>
              </div>
              <p style={{ fontSize: '11px', color: '#bbb', margin: 0, lineHeight: '1.3' }}>
                Перенаправление трафика через смежные КА кольца S{(satellite.idx - 1 + 8) % 8 || 8} / S{(satellite.idx + 1) % 8 || 1}.
                Затраты: <b style={{ color: '#00ff88' }}>$25,000</b> (ксенон). Экономия: <b style={{ color: '#00ff88' }}>$805,000</b>.
              </p>
            </div>

            <div style={{
              backgroundColor: '#1f1616',
              border: '1px solid #ff3b3040',
              borderRadius: '6px',
              padding: '10px',
              fontSize: '11px',
              color: '#aaa'
            }}>
              <b>ВАРИАНТ 2: Замена резервным КА из запаса</b>
              <br />
              Затраты: <b style={{ color: '#ff6666' }}>$830,000</b> ($650k CAPEX + $180k вывод).
            </div>

            <button
              onClick={() => onRestoreSatellite(satellite.id)}
              style={{
                backgroundColor: '#00ff88',
                color: '#000',
                border: 'none',
                borderRadius: '4px',
                padding: '10px',
                fontWeight: 'bold',
                fontSize: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <CheckCircle size={14} />
              <span>Восстановить работу КА (Компенсация выполнена)</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

const closeButtonStyle: React.CSSProperties = {
  backgroundColor: 'transparent',
  color: '#888',
  border: 'none',
  cursor: 'pointer'
};
