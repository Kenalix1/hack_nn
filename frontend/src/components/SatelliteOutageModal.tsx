import React, { useState } from 'react';
import { AlertOctagon, CheckCircle, Power, Activity } from 'lucide-react';
import { Satellite, SatelliteOutage } from '../types';
import { getDynamicSatelliteTelemetry } from '../utils/telemetry';

interface SatelliteOutageModalProps {
  satellite: Satellite | null;
  activeRoutePath?: string[];
  currentOutages: SatelliteOutage[];
  currentTimeSeconds?: number;
  onClose: () => void;
  onApplyOutage: (satId: string, durationSeconds: number) => void;
  onRestoreSatellite: (satId: string) => void;
}

export const SatelliteOutageModal: React.FC<SatelliteOutageModalProps> = ({
  satellite: rawSatellite,
  activeRoutePath,
  currentOutages,
  currentTimeSeconds = 0,
  onClose,
  onApplyOutage,
  onRestoreSatellite
}) => {
  const [duration, setDuration] = useState<number>(3600);

  if (!rawSatellite) return null;

  const satellite = getDynamicSatelliteTelemetry(rawSatellite, currentTimeSeconds);

  const activeOutage = currentOutages.find(o => o.satellite_id === satellite.id);
  const isOffline = !!activeOutage;

  return (
    <div style={{
      padding: '14px',
      display: 'flex',
      flexDirection: 'column',
      gap: '14px',
      fontSize: '12px',
      color: '#e2e8f0',
      backgroundColor: '#18181b',
      height: '100%',
      overflowY: 'auto'
    }}>
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
          <span style={{ fontSize: '11px', color: '#94a3b8' }}>Текущий статус аппарата:</span>
          <div style={{ fontSize: '14px', fontWeight: 'bold', color: isOffline ? '#ff3b30' : '#00ff88', marginTop: '2px' }}>
            {isOffline ? 'ВЫВЕДЕН ИЗ СТРОЯ (ОТКАЗ)' : 'ШТАТНОЕ ФУНКЦИОНИРОВАНИЕ'}
          </div>
        </div>
        {isOffline ? <AlertOctagon size={24} color="#ff3b30" /> : <CheckCircle size={24} color="#00ff88" />}
      </div>

      {/* Active Route Info */}
      <div style={{
        backgroundColor: '#27272a',
        border: '1px solid #3f3f46',
        borderRadius: '6px',
        padding: '10px 12px',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#f8fafc', fontWeight: 600, fontSize: '12px' }}>
          <Activity size={14} style={{ color: '#34d399' }} />
          <span>Маршрут передачи трафика:</span>
        </div>
        {activeRoutePath && activeRoutePath.length > 0 ? (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            flexWrap: 'wrap',
            fontFamily: 'monospace',
            fontSize: '12px',
            marginTop: '2px'
          }}>
            {activeRoutePath.map((node, idx) => (
              <React.Fragment key={idx}>
                <span style={{
                  backgroundColor: node === satellite.id ? '#ffffff' : '#18181b',
                  color: node === satellite.id ? '#000000' : '#e2e8f0',
                  border: `1px solid ${node === satellite.id ? '#ffffff' : '#52525b'}`,
                  borderRadius: '4px',
                  padding: '2px 7px',
                  fontWeight: 600
                }}>
                  {node}
                </span>
                {idx < activeRoutePath.length - 1 && (
                  <span style={{ color: '#a1a1aa', fontWeight: 'bold' }}>→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        ) : (
          <span style={{ fontSize: '12px', color: '#a1a1aa', fontStyle: 'italic' }}>
            Канал свободен (нет активного транзита трафика)
          </span>
        )}
      </div>

      {/* SpaceX Style Telemetry Info Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', backgroundColor: '#27272a', padding: '10px', borderRadius: '6px', border: '1px solid #3f3f46' }}>
        <div><span style={{ color: '#a1a1aa' }}>Идентификатор КА:</span> <b style={{ color: '#fff' }}>{satellite.id}</b></div>
        <div><span style={{ color: '#a1a1aa' }}>Орбитальная плоскость:</span> <b style={{ color: '#fff' }}>P{satellite.plane}</b></div>
        <div><span style={{ color: '#a1a1aa' }}>Высота орб. (LEO):</span> <b style={{ color: '#fff' }}>{Math.round(satellite.altitude)} км</b></div>
        <div><span style={{ color: '#a1a1aa' }}>Геоцентрическая скорость:</span> <b style={{ color: '#38bdf8' }}>7.59 км/с</b></div>
        <div><span style={{ color: '#a1a1aa' }}>Координаты (Lat / Lon):</span> <b style={{ color: '#fff' }}>{satellite.sub_lat.toFixed(1)}° / {satellite.sub_lon.toFixed(1)}°</b></div>
        <div><span style={{ color: '#a1a1aa' }}>Доплеровский сдвиг:</span> <b style={{ color: '#38bdf8' }}>{(Math.sin(currentTimeSeconds * 0.05 + satellite.sub_lat) * 14.2).toFixed(1)} кГц</b></div>
        <div><span style={{ color: '#a1a1aa' }}>Запас линии (Link Margin):</span> <b style={{ color: '#34d399' }}>+5.2 dB (SLA PASS)</b></div>
        <div>
          <span style={{ color: '#a1a1aa' }}>Температура ЭВМ:</span>{' '}
          <b style={{ color: (satellite.temperature_c ?? 38) >= 80 ? '#ff3b30' : (satellite.temperature_c ?? 38) >= 60 ? '#ffaa00' : '#00ff88' }}>
            {satellite.temperature_c ?? 38.5}°C {(satellite.temperature_c ?? 38) >= 80 ? '[ПЕРЕГРЕВ]' : ''}
          </b>
        </div>
        <div>
          <span style={{ color: '#a1a1aa' }}>Солнечные батареи:</span>{' '}
          <b style={{ color: '#ffaa00' }}>
            {satellite.solar_power_w ?? 1850} Вт
          </b>
        </div>
        <div>
          <span style={{ color: '#a1a1aa' }}>Заряд аккумуляторов (АКБ):</span>{' '}
          <b style={{ color: '#00ff88' }}>
            {satellite.battery_pct ?? 100}%
          </b>
        </div>
        <div>
          <span style={{ color: '#a1a1aa' }}>Оптические терминалы ISL:</span>{' '}
          <b style={{ color: '#38bdf8' }}>
            4 / 4 Активны
          </b>
        </div>
      </div>

      {/* Action Controls */}
      {!isOffline ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <label style={{ color: '#a1a1aa', fontWeight: 500 }}>Задать длительность отказа (сек):</label>
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
                  backgroundColor: duration === item.val ? '#ffffff' : '#27272a',
                  color: duration === item.val ? '#000000' : '#e2e8f0',
                  border: `1px solid ${duration === item.val ? '#ffffff' : '#3f3f46'}`,
                  borderRadius: '4px',
                  fontWeight: duration === item.val ? 600 : 400,
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
              borderRadius: '6px',
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
              <span style={{ fontWeight: 'bold', color: '#00ff88' }}>ВАРИАНТ 1: Перенастройка сетки ISL</span>
              <span style={{ backgroundColor: '#00ff88', color: '#000', fontWeight: 'bold', fontSize: '9px', padding: '1px 5px', borderRadius: '3px' }}>
                [САМЫЙ ВЫГОДНЫЙ]
              </span>
            </div>
            <p style={{ fontSize: '11px', color: '#bbb', margin: 0, lineHeight: '1.3' }}>
              Перенаправление трафика через смежные КА кольца. Затраты: <b style={{ color: '#00ff88' }}>$25,000</b>. Экономия: <b style={{ color: '#00ff88' }}>$805,000</b>.
            </p>
          </div>

          <button
            onClick={() => onRestoreSatellite(satellite.id)}
            style={{
              backgroundColor: '#00ff88',
              color: '#000',
              border: 'none',
              borderRadius: '6px',
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
            <span>Восстановить работу КА</span>
          </button>
        </div>
      )}
    </div>
  );
};
