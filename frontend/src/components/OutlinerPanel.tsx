import React, { useState } from 'react';
import { Eye, Sliders, Palette, Clock, Layers, Compass, MoveRight } from 'lucide-react';
import { OutlinerSettings } from '../types';

interface OutlinerPanelProps {
  settings: OutlinerSettings;
  onChangeSettings: (newSettings: OutlinerSettings) => void;
  isOpen: boolean;
}

export const OutlinerPanel: React.FC<OutlinerPanelProps> = ({
  settings,
  onChangeSettings,
  isOpen
}) => {
  const [selectedPlane, setSelectedPlane] = useState<number>(1);

  if (!isOpen) return null;

  const updateSetting = <K extends keyof OutlinerSettings>(key: K, value: OutlinerSettings[K]) => {
    onChangeSettings({
      ...settings,
      [key]: value
    });
  };

  const currentRaan = settings?.planeRaanMap?.[selectedPlane] ?? 0;
  const currentPhase = settings?.planePhaseMap?.[selectedPlane] ?? 0;

  const handleRaanChange = (val: number) => {
    onChangeSettings({
      ...settings,
      planeRaanMap: {
        ...(settings?.planeRaanMap || {}),
        [selectedPlane]: val
      }
    });
  };

  const handlePhaseChange = (val: number) => {
    onChangeSettings({
      ...settings,
      planePhaseMap: {
        ...(settings?.planePhaseMap || {}),
        [selectedPlane]: val
      }
    });
  };

  return (
    <aside style={{
      width: '290px',
      backgroundColor: '#262626',
      borderLeft: '1px solid #383838',
      display: 'flex',
      flexDirection: 'column',
      color: '#e0e0e0',
      fontSize: '12px',
      height: 'calc(100vh - 44px)',
      overflowY: 'auto',
      zIndex: 90
    }}>
      {/* Header */}
      <div style={{
        padding: '10px 14px',
        borderBottom: '1px solid #383838',
        backgroundColor: '#202020',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontWeight: 600
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Layers size={14} style={{ color: '#1473e6' }} />
          <span>Аутлайнер элементов</span>
        </div>
        <span style={{ fontSize: '11px', color: '#888' }}>Слои UI</span>
      </div>

      <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        
        {/* NEW SECTION: RAAN & Phase Sliders */}
        <div style={{
          backgroundColor: '#192231',
          border: '1px solid #1473e650',
          borderRadius: '6px',
          padding: '12px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#1473e6', fontWeight: 600 }}>
            <Compass size={14} />
            <span>Управление RAAN & Фазированием</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
            <span style={{ color: '#aaa', fontSize: '11px' }}>Плоскость:</span>
            <select
              value={selectedPlane}
              onChange={(e) => setSelectedPlane(parseInt(e.target.value))}
              style={{
                backgroundColor: '#141414',
                color: '#fff',
                border: '1px solid #3d3d3d',
                borderRadius: '4px',
                padding: '3px 8px',
                fontSize: '11px',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              {[1, 2, 3, 4, 5, 6].map(p => (
                <option key={p} value={p}>Плоскость P{p}</option>
              ))}
            </select>
          </div>

          {/* 1. RAAN Slider */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#e0e0e0' }}>
              <span><b>1. RAAN (Поворот вокруг Земли):</b></span>
              <span style={{ color: '#1473e6', fontWeight: 'bold' }}>{currentRaan}°</span>
            </div>
            <p style={{ fontSize: '10px', color: '#888', margin: 0 }}>
              Поворачивает всё кольцо орбиты вокруг оси Земли (изменяет регион пролета).
            </p>
            <input
              type="range"
              min="0"
              max="360"
              step="1"
              value={currentRaan}
              onChange={(e) => handleRaanChange(parseFloat(e.target.value))}
              style={sliderStyle}
            />
          </div>

          {/* 2. Phase Slider */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#e0e0e0' }}>
              <span><b>2. Фазирование (Сдвиг бусин):</b></span>
              <span style={{ color: '#00ff88', fontWeight: 'bold' }}>{currentPhase}°</span>
            </div>
            <p style={{ fontSize: '10px', color: '#888', margin: 0 }}>
              Сдвигает спутники вдоль неподвижного кольца (шахматный порядок для закрытия «дыр»).
            </p>
            <input
              type="range"
              min="0"
              max="360"
              step="1"
              value={currentPhase}
              onChange={(e) => handlePhaseChange(parseFloat(e.target.value))}
              style={{ ...sliderStyle, accentColor: '#00ff88' }}
            />
          </div>
        </div>

        {/* Layer Visibility Section */}
        <div style={sectionStyle}>
          <div style={sectionHeaderStyle}>
            <Eye size={14} />
            <span>Отображение слоев</span>
          </div>

          <div style={checkboxGroupStyle}>
            <ToggleRow
              label="Орбитальные траектории"
              checked={settings.showOrbits}
              onChange={(val) => updateSetting('showOrbits', val)}
            />
            <ToggleRow
              label="Спутники группировки (S01..S48)"
              checked={settings.showSatellites}
              onChange={(val) => updateSetting('showSatellites', val)}
            />
            <ToggleRow
              label="Наземные шлюзы (C65, Murmansk...)"
              checked={settings.showGateways}
              onChange={(val) => updateSetting('showGateways', val)}
            />
            <ToggleRow
              label="Межспутниковые линии (ISL)"
              checked={settings.showISL}
              onChange={(val) => updateSetting('showISL', val)}
            />
            <ToggleRow
              label="Связь спутник - Земля"
              checked={settings.showSatLinks}
              onChange={(val) => updateSetting('showSatLinks', val)}
            />
            <ToggleRow
              label="Текстовые подписи объектов"
              checked={settings.showLabels}
              onChange={(val) => updateSetting('showLabels', val)}
            />
            <ToggleRow
              label="Атмосфера планеты"
              checked={settings.showAtmosphere}
              onChange={(val) => updateSetting('showAtmosphere', val)}
            />
            <ToggleRow
              label="Зоны покрытия КА (FOVs)"
              checked={!!settings.showCoverageHeatmap}
              onChange={(val) => updateSetting('showCoverageHeatmap', val)}
            />
            <ToggleRow
              label="Дистанции между КА (км)"
              checked={settings.showDistances !== false}
              onChange={(val) => updateSetting('showDistances', val)}
            />
          </div>
        </div>

        {/* Dynamic Sliders Section */}
        <div style={sectionStyle}>
          <div style={sectionHeaderStyle}>
            <Sliders size={14} />
            <span>Параметры рендеринга</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <ToggleRow
              label="Свечение спутников (Glow)"
              checked={settings.satGlow}
              onChange={(val) => updateSetting('satGlow', val)}
            />

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', color: '#aaa' }}>
                <span>Размер спутников</span>
                <span>{settings.satSize.toFixed(1)}x</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="3.0"
                step="0.1"
                value={settings.satSize}
                onChange={(e) => updateSetting('satSize', parseFloat(e.target.value))}
                style={sliderStyle}
              />
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', color: '#aaa' }}>
                <span>Прозрачность орбит</span>
                <span>{Math.round(settings.orbitOpacity * 100)}%</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="1.0"
                step="0.05"
                value={settings.orbitOpacity}
                onChange={(e) => updateSetting('orbitOpacity', parseFloat(e.target.value))}
                style={sliderStyle}
              />
            </div>
          </div>
        </div>

        {/* Simulation Step Controls */}
        <div style={sectionStyle}>
          <div style={sectionHeaderStyle}>
            <Clock size={14} />
            <span>Настройка шага расчета</span>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', color: '#aaa' }}>
              <span>Шаг времени (dt):</span>
              <span style={{ color: '#1473e6', fontWeight: 600 }}>{settings.stepSeconds} сек</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '4px' }}>
              {[1, 5, 10, 60, 300].map(step => (
                <button
                  key={step}
                  onClick={() => updateSetting('stepSeconds', step)}
                  style={{
                    padding: '4px 0',
                    backgroundColor: settings.stepSeconds === step ? '#1473e6' : '#323232',
                    color: settings.stepSeconds === step ? '#fff' : '#b0b0b0',
                    border: '1px solid #444',
                    borderRadius: '3px',
                    fontSize: '11px',
                    cursor: 'pointer'
                  }}
                >
                  {step >= 60 ? `${step / 60}м` : `${step}с`}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Custom Color Settings per Element */}
        <div style={sectionStyle}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <div style={sectionHeaderStyle}>
              <Palette size={14} />
              <span style={{ margin: 0 }}>Настройка цветов объектов</span>
            </div>
            <button
              onClick={() => onChangeSettings({
                ...settings,
                satColor: '#00f0ff',
                offlineSatColor: '#ff3b30',
                highLatencySatColor: '#ff9900',
                orbitColor: '#1473e6',
                islColor: '#00ff88',
                gatewayColor: '#00d084',
                groundLinkColor: '#f59e0b',
                atmosphereColor: '#1e3a8a',
                fovConeColor: '#00f0ff'
              })}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: '#1473e6',
                fontSize: '10px',
                cursor: 'pointer',
                textDecoration: 'underline'
              }}
            >
              Сброс
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <ColorPickerRow
              label="Активные спутники"
              value={settings.satColor || '#00f0ff'}
              onChange={(val) => updateSetting('satColor', val)}
            />
            <ColorPickerRow
              label="Отказавшие спутники"
              value={settings.offlineSatColor || '#ff3b30'}
              onChange={(val) => updateSetting('offlineSatColor', val)}
            />
            <ColorPickerRow
              label="Спутники с задержкой"
              value={settings.highLatencySatColor || '#ff9900'}
              onChange={(val) => updateSetting('highLatencySatColor', val)}
            />
            <ColorPickerRow
              label="Траектории орбит"
              value={settings.orbitColor || '#1473e6'}
              onChange={(val) => updateSetting('orbitColor', val)}
            />
            <ColorPickerRow
              label="Межспутниковая связь (ISL)"
              value={settings.islColor || '#00ff88'}
              onChange={(val) => updateSetting('islColor', val)}
            />
            <ColorPickerRow
              label="Наземные шлюзы"
              value={settings.gatewayColor || '#00d084'}
              onChange={(val) => updateSetting('gatewayColor', val)}
            />
            <ColorPickerRow
              label="Связь Земля - КА"
              value={settings.groundLinkColor || '#f59e0b'}
              onChange={(val) => updateSetting('groundLinkColor', val)}
            />
            <ColorPickerRow
              label="Атмосфера Земли"
              value={settings.atmosphereColor || '#1e3a8a'}
              onChange={(val) => updateSetting('atmosphereColor', val)}
            />
            <ColorPickerRow
              label="Зоны покрытия (FOV)"
              value={settings.fovConeColor || '#00f0ff'}
              onChange={(val) => updateSetting('fovConeColor', val)}
            />
          </div>
        </div>

      </div>
    </aside>
  );
};

const ToggleRow: React.FC<{ label: string; checked: boolean; onChange: (v: boolean) => void }> = ({
  label, checked, onChange
}) => (
  <label style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    padding: '3px 0'
  }}>
    <span style={{ color: checked ? '#e0e0e0' : '#888' }}>{label}</span>
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      style={{ accentColor: '#1473e6', cursor: 'pointer' }}
    />
  </label>
);

const ColorPickerRow: React.FC<{
  label: string;
  value: string;
  onChange: (val: string) => void;
}> = ({ label, value, onChange }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2px 0' }}>
    <span style={{ color: '#aaa', fontSize: '11px' }}>{label}</span>
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      <input
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: '24px',
          height: '22px',
          padding: 0,
          border: '1px solid #444',
          borderRadius: '3px',
          backgroundColor: 'transparent',
          cursor: 'pointer'
        }}
      />
      <span style={{ fontSize: '10px', color: '#777', fontFamily: 'monospace', width: '52px', textAlign: 'right' }}>
        {value.toUpperCase()}
      </span>
    </div>
  </div>
);

const sectionStyle: React.CSSProperties = {
  backgroundColor: '#1f1f1f',
  border: '1px solid #333333',
  borderRadius: '4px',
  padding: '10px'
};

const sectionHeaderStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  fontWeight: 600,
  color: '#cccccc',
  marginBottom: '10px',
  fontSize: '12px'
};

const checkboxGroupStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px'
};

const sliderStyle: React.CSSProperties = {
  width: '100%',
  accentColor: '#1473e6',
  cursor: 'pointer'
};
