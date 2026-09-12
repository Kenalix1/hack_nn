import React, { useState, useEffect } from 'react';
import { Layers, Compass, ChevronDown, ChevronRight, RadioReceiver, MapPin } from 'lucide-react';
import { OutlinerSettings, ScenarioData, Satellite } from '../types';

interface OutlinerPanelProps {
  settings: OutlinerSettings;
  onChangeSettings: (newSettings: OutlinerSettings) => void;
  isOpen: boolean;
  scenario?: ScenarioData | null;
  focusedSatelliteId?: string | null;
  onSelectSatellite?: (sat: Satellite | null) => void;
}

type SelectedItem = 
  | { type: 'plane', id: number }
  | { type: 'satellite', id: string }
  | { type: 'gateway', id: string }
  | null;

export const OutlinerPanel: React.FC<OutlinerPanelProps> = ({
  settings,
  onChangeSettings,
  isOpen,
  scenario,
  focusedSatelliteId,
  onSelectSatellite
}) => {
  const [selectedItem, setSelectedItem] = useState<SelectedItem>(null);
  const [expandedPlanes, setExpandedPlanes] = useState<Record<number, boolean>>({});
  const [gatewaysExpanded, setGatewaysExpanded] = useState(false);

  useEffect(() => {
    if (focusedSatelliteId) {
      setSelectedItem({ type: 'satellite', id: focusedSatelliteId });
      const sat = scenario?.satellites?.find(s => s.id === focusedSatelliteId);
      if (sat) {
        setExpandedPlanes(p => ({ ...p, [sat.plane]: true }));
      }
    } else {
      if (selectedItem?.type === 'satellite') {
        setSelectedItem(null);
      }
    }
  }, [focusedSatelliteId, scenario]);

  if (!isOpen) return null;

  const updateSetting = <K extends keyof OutlinerSettings>(key: K, value: OutlinerSettings[K]) => {
    onChangeSettings({
      ...settings,
      [key]: value
    });
  };

  const handleRaanChange = (planeId: number, val: number) => {
    onChangeSettings({
      ...settings,
      planeRaanMap: {
        ...(settings?.planeRaanMap || {}),
        [planeId]: val
      }
    });
  };

  const handlePhaseChange = (planeId: number, val: number) => {
    onChangeSettings({
      ...settings,
      planePhaseMap: {
        ...(settings?.planePhaseMap || {}),
        [planeId]: val
      }
    });
  };

  const planes = [1, 2, 3, 4, 5, 6];
  
  const TreeItem: React.FC<{
    label: React.ReactNode;
    icon?: React.ReactNode;
    isSelected: boolean;
    onClick: () => void;
    onExpand?: () => void;
    isExpanded?: boolean;
    level?: number;
    hasChildren?: boolean;
  }> = ({ label, icon, isSelected, onClick, onExpand, isExpanded, level = 0, hasChildren }) => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      padding: `4px 8px 4px ${8 + level * 12}px`,
      cursor: 'pointer',
      backgroundColor: isSelected ? '#1473e640' : 'transparent',
      borderLeft: isSelected ? '2px solid #1473e6' : '2px solid transparent',
      color: isSelected ? '#fff' : '#ccc',
      userSelect: 'none'
    }} onClick={onClick}>
      <div style={{ width: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '4px' }}
           onClick={(e) => {
             if (hasChildren && onExpand) {
               e.stopPropagation();
               onExpand();
             }
           }}
      >
        {hasChildren ? (
          isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />
        ) : null}
      </div>
      {icon && <div style={{ marginRight: '6px', display: 'flex', alignItems: 'center' }}>{icon}</div>}
      <span style={{ fontSize: '11px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{label}</span>
    </div>
  );

  return (
    <aside style={{
      width: '290px',
      maxWidth: 'calc(100vw - 16px)',
      backgroundColor: '#262626',
      borderLeft: '1px solid #383838',
      display: 'flex',
      flexDirection: 'column',
      color: '#e0e0e0',
      fontSize: '12px',
      height: 'calc(100vh - 48px)',
      zIndex: 90,
      boxShadow: '-4px 0 16px rgba(0,0,0,0.35)'
    }}>
      {/* Top Section: Outliner */}
      <div style={{
        flex: '1 1 50%',
        display: 'flex',
        flexDirection: 'column',
        borderBottom: '1px solid #1473e6',
        overflow: 'hidden'
      }}>
        <div style={{
          padding: '10px 14px',
          borderBottom: '1px solid #383838',
          backgroundColor: '#202020',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontWeight: 600
        }}>
          <Layers size={14} style={{ color: '#1473e6' }} />
          <span>Аутлайнер объектов</span>
        </div>
        
        <div style={{ flex: 1, overflowY: 'auto', padding: '8px 0' }}>
          <TreeItem 
            label="Наземные шлюзы" 
            icon={<MapPin size={12} />}
            isSelected={selectedItem?.type === 'gateway' && selectedItem?.id === 'all'} // Dummy logic for group
            onClick={() => setGatewaysExpanded(!gatewaysExpanded)}
            onExpand={() => setGatewaysExpanded(!gatewaysExpanded)}
            isExpanded={gatewaysExpanded}
            hasChildren={(scenario?.gateways?.length || 0) > 0}
          />
          {gatewaysExpanded && scenario?.gateways?.map(g => (
             <TreeItem 
               key={g.id}
               label={g.name}
               level={1}
               isSelected={selectedItem?.type === 'gateway' && selectedItem?.id === g.id}
               onClick={() => setSelectedItem({ type: 'gateway', id: g.id })}
             />
          ))}

          {planes.map(pNum => {
            const isExpanded = expandedPlanes[pNum];
            const planeSats = scenario?.satellites?.filter(s => s.plane === pNum) || [];
            
            return (
              <React.Fragment key={pNum}>
                <TreeItem 
                  label={`Плоскость ${pNum}`} 
                  icon={<RadioReceiver size={12} />}
                  isSelected={selectedItem?.type === 'plane' && selectedItem?.id === pNum}
                  onClick={() => setSelectedItem({ type: 'plane', id: pNum })}
                  onExpand={() => setExpandedPlanes(prev => ({ ...prev, [pNum]: !isExpanded }))}
                  isExpanded={isExpanded}
                  hasChildren={planeSats.length > 0}
                />
                {isExpanded && planeSats.map(sat => (
                  <TreeItem 
                    key={sat.id}
                    label={`Спутник ${sat.id}`}
                    level={1}
                    isSelected={selectedItem?.type === 'satellite' && selectedItem?.id === sat.id}
                    onClick={() => {
                      setSelectedItem({ type: 'satellite', id: sat.id });
                      if (onSelectSatellite) onSelectSatellite(sat);
                    }}
                  />
                ))}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Bottom Section: Settings & Data */}
      <div style={{
        flex: '1 1 50%',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#1e1e1e'
      }}>
        <div style={{
          padding: '10px 14px',
          borderBottom: '1px solid #383838',
          backgroundColor: '#191919',
          display: 'flex',
          alignItems: 'center',
          fontWeight: 600,
          color: '#aaa',
          fontSize: '11px'
        }}>
          {selectedItem?.type === 'plane' && `НАСТРОЙКИ ПЛОСКОСТИ P${selectedItem.id}`}
          {selectedItem?.type === 'satellite' && `ДАННЫЕ СПУТНИКА ${selectedItem.id}`}
          {selectedItem?.type === 'gateway' && `ДАННЫЕ ШЛЮЗА`}
          {!selectedItem && 'СВОЙСТВА ОБЪЕКТА'}
        </div>

        <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          {!selectedItem && (
            <div style={{
              padding: '24px 16px',
              textAlign: 'center',
              color: '#888',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px'
            }}>
              <Layers size={24} style={{ color: '#555' }} />
              <div style={{ fontSize: '12px', fontWeight: 600, color: '#bbb' }}>Объект не выбран</div>
              <div style={{ fontSize: '11px', color: '#777', lineHeight: '1.4' }}>
                Выберите плоскость орбит, спутник или наземный шлюз в дереве выше для просмотра телеметрии и управления.
              </div>
            </div>
          )}

          {selectedItem && selectedItem.type === 'plane' && (
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

              {/* 1. RAAN Slider */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#e0e0e0' }}>
                  <span><b>1. RAAN (Поворот вокруг Земли):</b></span>
                  <span style={{ color: '#1473e6', fontWeight: 'bold' }}>{settings?.planeRaanMap?.[selectedItem.id] ?? 0}°</span>
                </div>
                <p style={{ fontSize: '10px', color: '#888', margin: 0 }}>
                  Поворачивает всё кольцо орбиты вокруг оси Земли.
                </p>
                <input
                  type="range"
                  min="0"
                  max="360"
                  step="1"
                  value={settings?.planeRaanMap?.[selectedItem.id] ?? 0}
                  onChange={(e) => handleRaanChange(selectedItem.id, parseFloat(e.target.value))}
                  style={sliderStyle}
                />
              </div>

              {/* 2. Phase Slider */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#e0e0e0' }}>
                  <span><b>2. Фазирование (Сдвиг бусин):</b></span>
                  <span style={{ color: '#00ff88', fontWeight: 'bold' }}>{settings?.planePhaseMap?.[selectedItem.id] ?? 0}°</span>
                </div>
                <p style={{ fontSize: '10px', color: '#888', margin: 0 }}>
                  Сдвигает спутники вдоль неподвижного кольца (шахматный порядок).
                </p>
                <input
                  type="range"
                  min="0"
                  max="360"
                  step="1"
                  value={settings?.planePhaseMap?.[selectedItem.id] ?? 0}
                  onChange={(e) => handlePhaseChange(selectedItem.id, parseFloat(e.target.value))}
                  style={{ ...sliderStyle, accentColor: '#00ff88' }}
                />
              </div>
            </div>
          )}

          {selectedItem && selectedItem.type === 'satellite' && (() => {
            const sat = scenario?.satellites?.find(s => s.id === selectedItem.id);
            if (!sat) return <div style={{ color: '#888' }}>Нет данных</div>;
            return (
              <div style={sectionStyle}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#aaa' }}>ID</span>
                    <span style={{ color: '#fff', fontWeight: 600 }}>{sat.id}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#aaa' }}>Плоскость</span>
                    <span style={{ color: '#fff' }}>P{sat.plane}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#aaa' }}>Наклонение</span>
                    <span style={{ color: '#fff' }}>{sat.inc}°</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#aaa' }}>Высота</span>
                    <span style={{ color: '#fff' }}>{sat.altitude} км</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#aaa' }}>Температура</span>
                    <span style={{ color: (sat.temperature_c || 0) > 60 ? '#ff3b30' : '#00ff88' }}>
                      {sat.temperature_c ?? 20}°C
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#aaa' }}>Топливо</span>
                    <span style={{ color: (sat.fuel_pct || 100) < 30 ? '#ff9900' : '#00ff88' }}>
                      {sat.fuel_pct ?? 100}%
                    </span>
                  </div>
                </div>
              </div>
            );
          })()}

          {selectedItem && selectedItem.type === 'gateway' && (() => {
            const gw = scenario?.gateways?.find(g => g.id === selectedItem.id);
            if (!gw) return <div style={{ color: '#888' }}>Нет данных</div>;
            return (
              <div style={sectionStyle}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#aaa' }}>Название</span>
                    <span style={{ color: '#fff', fontWeight: 600 }}>{gw.name}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#aaa' }}>Координаты</span>
                    <span style={{ color: '#fff' }}>{gw.lat.toFixed(2)}°, {gw.lon.toFixed(2)}°</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#aaa' }}>Тип</span>
                    <span style={{ color: '#fff' }}>{gw.type || 'Шлюз'}</span>
                  </div>
                </div>
              </div>
            );
          })()}

        </div>
      </div>
    </aside>
  );
};

const sectionStyle: React.CSSProperties = {
  backgroundColor: '#1f1f1f',
  border: '1px solid #333333',
  borderRadius: '4px',
  padding: '10px'
};

const sliderStyle: React.CSSProperties = {
  width: '100%',
  accentColor: '#1473e6',
  cursor: 'pointer'
};

