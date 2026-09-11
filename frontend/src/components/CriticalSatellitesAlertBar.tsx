import React, { useState } from 'react';
import { Flame, Fuel, AlertTriangle, ChevronDown, ChevronUp, Crosshair } from 'lucide-react';
import { ScenarioData, Satellite } from '../types';
import { getDynamicSatelliteTelemetry } from '../utils/telemetry';

interface CriticalSatellitesAlertBarProps {
  scenario: ScenarioData | null;
  currentTimeSeconds?: number;
  onSelectSatellite: (sat: Satellite) => void;
}

export const CriticalSatellitesAlertBar: React.FC<CriticalSatellitesAlertBarProps> = ({
  scenario,
  currentTimeSeconds = 0,
  onSelectSatellite
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  if (!scenario || !scenario.satellites) return null;

  const satellites = scenario.satellites.map(s => getDynamicSatelliteTelemetry(s, currentTimeSeconds));
  
  const overheated = satellites.filter(s => (s.temperature_c ?? 35) >= 80);
  const tempWarn = satellites.filter(s => (s.temperature_c ?? 35) >= 70 && (s.temperature_c ?? 35) < 80);
  const lowFuelCritical = satellites.filter(s => (s.fuel_pct ?? 100) <= 15);
  const lowFuelWarn = satellites.filter(s => (s.fuel_pct ?? 100) <= 25 && (s.fuel_pct ?? 100) > 15);

  const totalCritical = overheated.length + lowFuelCritical.length;
  const totalWarnings = tempWarn.length + lowFuelWarn.length;

  if (totalCritical === 0 && totalWarnings === 0) {
    return null;
  }

  return (
    <div style={{
      position: 'absolute',
      top: '16px',
      right: '16px',
      zIndex: 88,
      backgroundColor: 'rgba(20, 20, 20, 0.92)',
      backdropFilter: 'blur(10px)',
      border: totalCritical > 0 ? '1px solid #ff3b30' : '1px solid #ffaa00',
      borderRadius: '8px',
      padding: '10px 14px',
      maxWidth: 'min(360px, calc(100vw - 32px))',
      color: '#fff',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
      fontSize: '12px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
      {/* Alert Bar Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }} onClick={() => setIsExpanded(!isExpanded)}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <AlertTriangle color={totalCritical > 0 ? '#ff3b30' : '#ffaa00'} size={18} />
          <span style={{ fontWeight: 'bold', fontSize: '13px', color: totalCritical > 0 ? '#ff3b30' : '#ffaa00' }}>
            Предупреждения Бортовых Систем КА ({totalCritical + totalWarnings})
          </span>
        </div>
        <button style={{ background: 'none', border: 'none', color: '#aaa', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      {/* Summary Badges */}
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
        {overheated.length > 0 && (
          <span style={{ backgroundColor: '#ff3b3030', border: '1px solid #ff3b30', color: '#ff3b30', borderRadius: '4px', padding: '2px 6px', fontSize: '10px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Flame size={12} /> {overheated.length} Перегрев (≥ 80°C)
          </span>
        )}
        {lowFuelCritical.length > 0 && (
          <span style={{ backgroundColor: '#ffaa0030', border: '1px solid #ffaa00', color: '#ffaa00', borderRadius: '4px', padding: '2px 6px', fontSize: '10px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Fuel size={12} /> {lowFuelCritical.length} Топливо (≤ 15%)
          </span>
        )}
      </div>

      {/* Detailed Satellite List */}
      {isExpanded && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxHeight: '180px', overflowY: 'auto', marginTop: '4px' }}>
          {overheated.map(sat => (
            <div
              key={`overheat-${sat.id}`}
              onClick={() => onSelectSatellite(sat)}
              style={{
                backgroundColor: '#2a1515',
                border: '1px solid #ff3b3060',
                borderRadius: '4px',
                padding: '6px 8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'background 0.2s'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Flame size={14} color="#ff3b30" />
                <span style={{ fontWeight: 600, color: '#fff' }}>[{sat.id}]</span>
                <span style={{ color: '#ff3b30', fontWeight: 'bold' }}>{sat.temperature_c ?? 84}°C</span>
              </div>
              <span style={{ fontSize: '10px', color: '#aaa', display: 'flex', alignItems: 'center', gap: '2px' }}>
                <Crosshair size={10} /> Клик для фокуса
              </span>
            </div>
          ))}

          {lowFuelCritical.map(sat => (
            <div
              key={`fuel-${sat.id}`}
              onClick={() => onSelectSatellite(sat)}
              style={{
                backgroundColor: '#2a2215',
                border: '1px solid #ffaa0060',
                borderRadius: '4px',
                padding: '6px 8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'background 0.2s'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Fuel size={14} color="#ffaa00" />
                <span style={{ fontWeight: 600, color: '#fff' }}>[{sat.id}]</span>
                <span style={{ color: '#ffaa00', fontWeight: 'bold' }}>{sat.fuel_kg ?? 1.2} кг ({sat.fuel_pct ?? 12}%)</span>
              </div>
              <span style={{ fontSize: '10px', color: '#aaa', display: 'flex', alignItems: 'center', gap: '2px' }}>
                <Crosshair size={10} /> Клик для фокуса
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
