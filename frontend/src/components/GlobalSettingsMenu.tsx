import React, { useState, useEffect, useRef } from 'react';
import { Eye, Sliders, Clock, Palette, X, RotateCcw, Check } from 'lucide-react';
import { OutlinerSettings } from '../types';

interface GlobalSettingsMenuProps {
  settings: OutlinerSettings;
  onChangeSettings: (newSettings: OutlinerSettings) => void;
}

type SectionKey = 'layers' | 'rendering' | 'step' | 'colors';

export const GlobalSettingsMenu: React.FC<GlobalSettingsMenuProps> = ({
  settings,
  onChangeSettings
}) => {
  const [activeSection, setActiveSection] = useState<SectionKey | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close context menu when clicking outside
  useEffect(() => {
    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setActiveSection(null);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveSection(null);
      }
    };

    if (activeSection) {
      document.addEventListener('mousedown', handlePointerDown);
      document.addEventListener('touchstart', handlePointerDown);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeSection]);

  const updateSetting = <K extends keyof OutlinerSettings>(key: K, value: OutlinerSettings[K]) => {
    onChangeSettings({
      ...settings,
      [key]: value
    });
  };

  const handleToggleSection = (section: SectionKey) => {
    setActiveSection(prev => (prev === section ? null : section));
  };

  const handleResetColors = () => {
    onChangeSettings({
      ...settings,
      satColor: '#ffffff',
      offlineSatColor: '#e11d48',
      highLatencySatColor: '#d97706',
      orbitColor: '#475569',
      islColor: '#cbd5e1',
      gatewayColor: '#f8fafc',
      groundLinkColor: '#94a3b8',
      atmosphereColor: '#334155',
      fovConeColor: '#cbd5e1'
    });
  };

  const setAllLayers = (val: boolean) => {
    onChangeSettings({
      ...settings,
      showOrbits: val,
      showSatellites: val,
      showGateways: val,
      showGatewayCoverage: val,
      showISL: val,
      showSatLinks: val,
      showLabels: val,
      showAtmosphere: val,
      showCoverageHeatmap: val,
      showTrafficLoad: val,
      showDistances: val
    });
  };

  const sectionsConfig: Array<{
    key: SectionKey;
    label: string;
    icon: React.ReactNode;
  }> = [
    {
      key: 'layers',
      label: 'Слои сцены',
      icon: <Eye size={18} />
    },
    {
      key: 'rendering',
      label: 'Параметры рендеринга',
      icon: <Sliders size={18} />
    },
    {
      key: 'step',
      label: `Шаг расчета (${settings.stepSeconds}с)`,
      icon: <Clock size={18} />
    },
    {
      key: 'colors',
      label: 'Цвета объектов',
      icon: <Palette size={18} />
    }
  ];

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: '16px',
        left: '16px',
        zIndex: 87,
        display: 'flex',
        alignItems: 'flex-start'
      }}
    >
      {/* Vertical Stack of Section Buttons (Floating Icon Buttons, No Underlay) */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          userSelect: 'none'
        }}
      >
        {sectionsConfig.map(sec => {
          const isActive = activeSection === sec.key;
          return (
            <button
              key={sec.key}
              onClick={() => handleToggleSection(sec.key)}
              title={sec.label}
              aria-label={sec.label}
              style={{
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
                border: isActive ? '1px solid #00f0ff' : '1px solid rgba(255, 255, 255, 0.14)',
                backgroundColor: isActive ? 'rgba(20, 115, 230, 0.35)' : 'rgba(24, 26, 32, 0.88)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                color: isActive ? '#00f0ff' : '#c9d1d9',
                cursor: 'pointer',
                transition: 'all 0.18s ease',
                boxShadow: isActive ? '0 0 14px rgba(0, 240, 255, 0.45)' : '0 4px 14px rgba(0, 0, 0, 0.45)'
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = 'rgba(38, 42, 52, 0.95)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.28)';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = 'rgba(24, 26, 32, 0.88)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.14)';
                  e.currentTarget.style.color = '#c9d1d9';
                  e.currentTarget.style.transform = 'scale(1)';
                }
              }}
            >
              {sec.icon}
            </button>
          );
        })}
      </div>

      {/* Popover / Context Menu to the Right of the Stack */}
      {activeSection && (
        <div
          style={{
            marginLeft: '10px',
            width: '320px',
            maxHeight: 'calc(100vh - 120px)',
            backgroundColor: 'rgba(22, 25, 32, 0.96)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '10px',
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.65), 0 0 2px rgba(255, 255, 255, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            animation: 'fadeIn 0.15s ease-out'
          }}
        >
          {/* Menu Header */}
          <div
            style={{
              padding: '10px 14px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#00f0ff', display: 'flex' }}>
                {sectionsConfig.find(s => s.key === activeSection)?.icon}
              </span>
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#f0f6fc' }}>
                {sectionsConfig.find(s => s.key === activeSection)?.label}
              </span>
            </div>
            <button
              onClick={() => setActiveSection(null)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#8b949e',
                cursor: 'pointer',
                display: 'flex',
                padding: '4px',
                borderRadius: '4px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#8b949e';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
              title="Закрыть меню"
            >
              <X size={14} />
            </button>
          </div>

          {/* Menu Content */}
          <div
            style={{
              padding: '12px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}
          >
            {/* 1. Layers Section */}
            {activeSection === 'layers' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', gap: '6px', justifyContent: 'flex-end', marginBottom: '2px' }}>
                  <button
                    onClick={() => setAllLayers(true)}
                    style={{
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '4px',
                      color: '#58a6ff',
                      fontSize: '10px',
                      padding: '3px 8px',
                      cursor: 'pointer'
                    }}
                  >
                    Включить все
                  </button>
                  <button
                    onClick={() => setAllLayers(false)}
                    style={{
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '4px',
                      color: '#8b949e',
                      fontSize: '10px',
                      padding: '3px 8px',
                      cursor: 'pointer'
                    }}
                  >
                    Отключить все
                  </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <MenuToggleRow label="Орбитальные траектории" checked={settings.showOrbits} onChange={(v) => updateSetting('showOrbits', v)} />
                  <MenuToggleRow label="Спутники группировки (S01..S48)" checked={settings.showSatellites} onChange={(v) => updateSetting('showSatellites', v)} />
                  <MenuToggleRow label="Наземные шлюзы (C65, Murmansk...)" checked={settings.showGateways} onChange={(v) => updateSetting('showGateways', v)} />
                  <MenuToggleRow label="Купола досягаемости шлюзов" checked={settings.showGatewayCoverage !== false} onChange={(v) => updateSetting('showGatewayCoverage', v)} />
                  <MenuToggleRow label="Межспутниковые линии (ISL)" checked={settings.showISL} onChange={(v) => updateSetting('showISL', v)} />
                  <MenuToggleRow label="Связь спутник - Земля" checked={settings.showSatLinks} onChange={(v) => updateSetting('showSatLinks', v)} />
                  <MenuToggleRow label="Текстовые подписи объектов" checked={settings.showLabels} onChange={(v) => updateSetting('showLabels', v)} />
                  <MenuToggleRow label="Атмосфера планеты" checked={settings.showAtmosphere} onChange={(v) => updateSetting('showAtmosphere', v)} />
                  <MenuToggleRow label="Зоны покрытия КА (FOVs)" checked={!!settings.showCoverageHeatmap} onChange={(v) => updateSetting('showCoverageHeatmap', v)} />
                  <MenuToggleRow label="Загрузка и трафик ISL (%)" checked={!!settings.showTrafficLoad} onChange={(v) => updateSetting('showTrafficLoad', v)} />
                  <MenuToggleRow label="Дистанции между КА (км)" checked={settings.showDistances !== false} onChange={(v) => updateSetting('showDistances', v)} />
                </div>
              </div>
            )}

            {/* 2. Rendering Section */}
            {activeSection === 'rendering' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <MenuToggleRow label="Свечение спутников (Glow)" checked={settings.satGlow} onChange={(v) => updateSetting('satGlow', v)} />

                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '10px', borderRadius: '6px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '11px', color: '#c9d1d9' }}>
                    <span>Размер спутников</span>
                    <span style={{ color: '#00f0ff', fontWeight: 600 }}>{settings.satSize.toFixed(1)}x</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="3.0"
                    step="0.1"
                    value={settings.satSize}
                    onChange={(e) => updateSetting('satSize', parseFloat(e.target.value))}
                    style={{ width: '100%', accentColor: '#00f0ff', cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: '#6e7681', marginTop: '3px' }}>
                    <span>0.5x</span>
                    <span>1.0x (норма)</span>
                    <span>3.0x</span>
                  </div>
                </div>

                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '10px', borderRadius: '6px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '11px', color: '#c9d1d9' }}>
                    <span>Прозрачность орбит</span>
                    <span style={{ color: '#1473e6', fontWeight: 600 }}>{Math.round(settings.orbitOpacity * 100)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0.1"
                    max="1.0"
                    step="0.05"
                    value={settings.orbitOpacity}
                    onChange={(e) => updateSetting('orbitOpacity', parseFloat(e.target.value))}
                    style={{ width: '100%', accentColor: '#1473e6', cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: '#6e7681', marginTop: '3px' }}>
                    <span>10%</span>
                    <span>50%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>
            )}

            {/* 3. Step Section */}
            {activeSection === 'step' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ fontSize: '11px', color: '#8b949e', lineHeight: '1.4' }}>
                  Шаг времени (dt) определяет частоту дискретизации численного интегрирования орбит и перестроения графа ISL:
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {[
                    { step: 1, label: '1 сек', desc: 'Сверхвысокая точность (для критических сближений)' },
                    { step: 5, label: '5 сек', desc: 'Высокая детализация динамики' },
                    { step: 10, label: '10 сек', desc: 'Штатный расчет (рекомендованный)' },
                    { step: 60, label: '1 мин', desc: 'Ускоренный анализ (60 сек)' },
                    { step: 300, label: '5 мин', desc: 'Экспресс-обзор суточных интервалов' }
                  ].map(({ step, label, desc }) => {
                    const isCurrent = settings.stepSeconds === step;
                    return (
                      <button
                        key={step}
                        onClick={() => updateSetting('stepSeconds', step)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '8px 10px',
                          borderRadius: '6px',
                          border: isCurrent ? '1px solid #1473e6' : '1px solid rgba(255, 255, 255, 0.08)',
                          backgroundColor: isCurrent ? 'rgba(20, 115, 230, 0.25)' : 'rgba(255, 255, 255, 0.02)',
                          color: isCurrent ? '#ffffff' : '#c9d1d9',
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'all 0.15s ease'
                        }}
                        onMouseEnter={(e) => {
                          if (!isCurrent) e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                        }}
                        onMouseLeave={(e) => {
                          if (!isCurrent) e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                        }}
                      >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                          <span style={{ fontSize: '12px', fontWeight: 600, color: isCurrent ? '#00f0ff' : '#f0f6fc' }}>
                            {label}
                          </span>
                          <span style={{ fontSize: '10px', color: '#8b949e' }}>
                            {desc}
                          </span>
                        </div>
                        {isCurrent && <Check size={14} color="#00f0ff" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 4. Colors Section */}
            {activeSection === 'colors' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '2px' }}>
                  <button
                    onClick={handleResetColors}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '4px',
                      color: '#58a6ff',
                      fontSize: '10px',
                      padding: '4px 8px',
                      cursor: 'pointer'
                    }}
                  >
                    <RotateCcw size={10} />
                    <span>Сброс по умолчанию</span>
                  </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <MenuColorPickerRow label="Активные спутники" value={settings.satColor || '#00f0ff'} onChange={(val) => updateSetting('satColor', val)} />
                  <MenuColorPickerRow label="Отказавшие спутники" value={settings.offlineSatColor || '#ff3b30'} onChange={(val) => updateSetting('offlineSatColor', val)} />
                  <MenuColorPickerRow label="Спутники с задержкой" value={settings.highLatencySatColor || '#ff9900'} onChange={(val) => updateSetting('highLatencySatColor', val)} />
                  <MenuColorPickerRow label="Траектории орбит" value={settings.orbitColor || '#1473e6'} onChange={(val) => updateSetting('orbitColor', val)} />
                  <MenuColorPickerRow label="Межспутниковая связь" value={settings.islColor || '#00ff88'} onChange={(val) => updateSetting('islColor', val)} />
                  <MenuColorPickerRow label="Наземные шлюзы" value={settings.gatewayColor || '#00d084'} onChange={(val) => updateSetting('gatewayColor', val)} />
                  <MenuColorPickerRow label="Связь Земля - КА" value={settings.groundLinkColor || '#f59e0b'} onChange={(val) => updateSetting('groundLinkColor', val)} />
                  <MenuColorPickerRow label="Атмосфера Земли" value={settings.atmosphereColor || '#1e3a8a'} onChange={(val) => updateSetting('atmosphereColor', val)} />
                  <MenuColorPickerRow label="Зоны покрытия (FOV)" value={settings.fovConeColor || '#00f0ff'} onChange={(val) => updateSetting('fovConeColor', val)} />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const MenuToggleRow: React.FC<{
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}> = ({ label, checked, onChange }) => (
  <label
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '6px 8px',
      borderRadius: '6px',
      cursor: 'pointer',
      backgroundColor: checked ? 'rgba(255, 255, 255, 0.03)' : 'transparent',
      transition: 'background-color 0.15s ease'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = checked ? 'rgba(255, 255, 255, 0.03)' : 'transparent';
    }}
  >
    <span style={{ fontSize: '11px', color: checked ? '#f0f6fc' : '#8b949e', transition: 'color 0.15s ease' }}>
      {label}
    </span>
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      style={{
        accentColor: '#1473e6',
        cursor: 'pointer',
        width: '14px',
        height: '14px'
      }}
    />
  </label>
);

const MenuColorPickerRow: React.FC<{
  label: string;
  value: string;
  onChange: (val: string) => void;
}> = ({ label, value, onChange }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '5px 8px',
      borderRadius: '6px',
      backgroundColor: 'rgba(255, 255, 255, 0.02)'
    }}
  >
    <span style={{ color: '#c9d1d9', fontSize: '11px' }}>{label}</span>
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <input
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: '24px',
          height: '22px',
          padding: 0,
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '4px',
          backgroundColor: 'transparent',
          cursor: 'pointer'
        }}
      />
      <span
        style={{
          fontSize: '10px',
          color: '#8b949e',
          fontFamily: 'monospace',
          width: '54px',
          textAlign: 'right'
        }}
      >
        {value.toUpperCase()}
      </span>
    </div>
  </div>
);
