import React, { useState, useEffect } from 'react';
import { Settings, Save, Download, Lock } from 'lucide-react';

interface ConfiguratorModalProps {
  onApplyConfig: (config: any) => void;
  onExportJson?: () => void;
}

const CONFIG_STORAGE_KEY = 'cosmo_configurator_last_config_v1';

const loadSavedConfig = () => {
  try {
    const raw = localStorage.getItem(CONFIG_STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load saved config from localStorage', e);
  }
  return null;
};

export const ConfiguratorModal: React.FC<ConfiguratorModalProps> = ({ onApplyConfig, onExportJson }) => {
  const savedConfig = loadSavedConfig();

  const [altitude, setAltitude] = useState<number>(savedConfig?.altitude ?? 550);
  const [inclination, setInclination] = useState<number>(savedConfig?.inclination ?? 87.0);
  const [planes, setPlanes] = useState<number>(savedConfig?.planes ?? 6);
  const [satsPerPlane, setSatsPerPlane] = useState<number>(savedConfig?.satsPerPlane ?? 8);
  const [islType, setIslType] = useState<string>(savedConfig?.islType ?? 'grid-4');
  
  // Fixed Satellite Field of View / Min Elevation Angle (10.0 deg)
  const FIXED_MIN_ELEVATION = 10.0;

  useEffect(() => {
    try {
      const configToSave = {
        altitude,
        inclination,
        planes,
        satsPerPlane,
        islType,
        minElevation: FIXED_MIN_ELEVATION
      };
      localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(configToSave));
    } catch (e) {
      console.error('Failed to save config to localStorage', e);
    }
  }, [altitude, inclination, planes, satsPerPlane, islType]);

  const handleSave = () => {
    const configObj = {
      altitude,
      inclination,
      planes,
      satsPerPlane,
      islType,
      minElevation: FIXED_MIN_ELEVATION
    };
    try {
      localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(configObj));
    } catch (e) {
      console.error(e);
    }
    onApplyConfig(configObj);
  };

  return (
    <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #383838', paddingBottom: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Settings size={18} style={{ color: '#1473e6' }} />
          <h3 style={{ margin: 0, fontSize: '14px', color: '#e0e0e0' }}>Конфигуратор Параметров Спутниковой Группировки</h3>
        </div>

        {onExportJson && (
          <button
            onClick={onExportJson}
            style={{
              backgroundColor: '#2a2a2a',
              color: '#00ff88',
              border: '1px solid #444',
              borderRadius: '4px',
              padding: '4px 10px',
              fontSize: '11px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Download size={13} />
            <span>Экспорт в JSON</span>
          </button>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        
        {/* Left Column: Geometry */}
        <div style={cardStyle}>
          <h4 style={cardHeaderStyle}>Орбитальная Геометрия (Walker Delta)</h4>
          
          <div style={fieldGroupStyle}>
            <label style={labelStyle}>Высота орбиты (км): <b>{altitude} км</b></label>
            <input
              type="range"
              min="400"
              max="1500"
              step="50"
              value={altitude}
              onChange={(e) => setAltitude(parseInt(e.target.value))}
              style={rangeStyle}
            />
          </div>

          <div style={fieldGroupStyle}>
            <label style={labelStyle}>Наклонение орбиты (°): <b>{inclination}°</b></label>
            <input
              type="range"
              min="30"
              max="98"
              step="0.5"
              value={inclination}
              onChange={(e) => setInclination(parseFloat(e.target.value))}
              style={rangeStyle}
            />
          </div>

          <div style={fieldGroupStyle}>
            <label style={labelStyle}>Количество плоскостей: <b>{planes}</b></label>
            <input
              type="range"
              min="2"
              max="12"
              step="1"
              value={planes}
              onChange={(e) => setPlanes(parseInt(e.target.value))}
              style={rangeStyle}
            />
          </div>

          <div style={fieldGroupStyle}>
            <label style={labelStyle}>Спутников в плоскости: <b>{satsPerPlane}</b> (Всего: {planes * satsPerPlane})</label>
            <input
              type="range"
              min="4"
              max="16"
              step="1"
              value={satsPerPlane}
              onChange={(e) => setSatsPerPlane(parseInt(e.target.value))}
              style={rangeStyle}
            />
          </div>
        </div>

        {/* Right Column: Links & Fixed View Angle */}
        <div style={cardStyle}>
          <h4 style={cardHeaderStyle}>Межспутниковая Связь (ISL) & Угол Обзора</h4>

          <div style={fieldGroupStyle}>
            <label style={labelStyle}>Топология ISL линий:</label>
            <select
              value={islType}
              onChange={(e) => setIslType(e.target.value)}
              style={selectStyle}
            >
              <option value="grid-4">Сетка 4-ISL (2 Intra-plane + 2 Inter-plane)</option>
              <option value="intra-only">Только внутри плоскости (Intra-plane)</option>
              <option value="full-mesh">Динамическая перестройка (Full Mesh)</option>
            </select>
          </div>

          {/* Locked Read-Only Satellite View Angle Field */}
          <div style={{ ...fieldGroupStyle, opacity: 0.7 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#ffaa00' }}>
              <Lock size={13} />
              <label style={labelStyle}>Угол обзора / Мин. угол места: <b>{FIXED_MIN_ELEVATION}° (Заблокирован)</b></label>
            </div>
            <input
              type="range"
              min="10"
              max="10"
              value={FIXED_MIN_ELEVATION}
              disabled
              style={{ ...rangeStyle, cursor: 'not-allowed', accentColor: '#888' }}
            />
            <span style={{ fontSize: '10px', color: '#777' }}>
              Угол обзора диаграммы направленности фиксирован регламентом системы (10°).
            </span>
          </div>

          <div style={{
            marginTop: 'auto',
            padding: '12px',
            backgroundColor: '#141414',
            border: '1px solid #333',
            borderRadius: '4px',
            fontSize: '11px',
            color: '#aaa'
          }}>
            Применение параметров выполнит перерасчет траекторий группировки при фиксированном угле обзора (10°).
          </div>
        </div>

      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '8px' }}>
        <button
          onClick={handleSave}
          style={{
            backgroundColor: '#1473e6',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            padding: '8px 16px',
            fontSize: '12px',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <Save size={14} />
          <span>Применить и Запустить Расчет</span>
        </button>
      </div>
    </div>
  );
};

const cardStyle: React.CSSProperties = {
  backgroundColor: '#1f1f1f',
  border: '1px solid #383838',
  borderRadius: '6px',
  padding: '14px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px'
};

const cardHeaderStyle: React.CSSProperties = {
  margin: 0,
  fontSize: '13px',
  color: '#ccc',
  borderBottom: '1px solid #333',
  paddingBottom: '6px'
};

const fieldGroupStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '4px'
};

const labelStyle: React.CSSProperties = {
  fontSize: '11px',
  color: '#aaa'
};

const rangeStyle: React.CSSProperties = {
  width: '100%',
  accentColor: '#1473e6',
  cursor: 'pointer'
};

const selectStyle: React.CSSProperties = {
  backgroundColor: '#141414',
  color: '#e0e0e0',
  border: '1px solid #444',
  borderRadius: '4px',
  padding: '6px 8px',
  fontSize: '12px',
  outline: 'none'
};
