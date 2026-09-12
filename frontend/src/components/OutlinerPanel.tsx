import React, { useState, useEffect } from 'react';
import { Layers, Compass, ChevronDown, ChevronRight, RadioReceiver, MapPin, Eye, EyeOff } from 'lucide-react';
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

  const handleTogglePlaneVisibility = (planeNum: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const isCurrentlyHidden = !!settings.hiddenPlanes?.[planeNum];
    onChangeSettings({
      ...settings,
      hiddenPlanes: {
        ...(settings.hiddenPlanes || {}),
        [planeNum]: !isCurrentlyHidden
      }
    });
  };

  const handleToggleSatVisibility = (satId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const isCurrentlyHidden = !!settings.hiddenSatellites?.[satId];
    onChangeSettings({
      ...settings,
      hiddenSatellites: {
        ...(settings.hiddenSatellites || {}),
        [satId]: !isCurrentlyHidden
      }
    });
  };

  const handleToggleGatewaysGroupVisibility = (e: React.MouseEvent) => {
    e.stopPropagation();
    const isCurrentlyHidden = settings.showGateways === false;
    updateSetting('showGateways', isCurrentlyHidden);
  };

  const handleToggleGatewayVisibility = (gwId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const isCurrentlyHidden = !!settings.hiddenGateways?.[gwId];
    onChangeSettings({
      ...settings,
      hiddenGateways: {
        ...(settings.hiddenGateways || {}),
        [gwId]: !isCurrentlyHidden
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
    isVisible?: boolean;
    onToggleVisibility?: (e: React.MouseEvent) => void;
  }> = ({
    label,
    icon,
    isSelected,
    onClick,
    onExpand,
    isExpanded,
    level = 0,
    hasChildren,
    isVisible = true,
    onToggleVisibility
  }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: `4px 8px 4px ${8 + level * 12}px`,
          cursor: 'pointer',
          backgroundColor: isSelected ? '#1473e640' : isHovered ? '#2a2a2a' : 'transparent',
          borderLeft: isSelected ? '2px solid #1473e6' : '2px solid transparent',
          color: isVisible ? (isSelected ? '#fff' : '#ccc') : '#666',
          userSelect: 'none',
          transition: 'background-color 0.15s ease'
        }}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          style={{
            width: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '4px',
            flexShrink: 0
          }}
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
        {icon && (
          <div
            style={{
              marginRight: '6px',
              display: 'flex',
              alignItems: 'center',
              flexShrink: 0,
              opacity: isVisible ? 1 : 0.4
            }}
          >
            {icon}
          </div>
        )}
        <span
          style={{
            fontSize: '11px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            flex: 1,
            textDecoration: !isVisible ? 'line-through' : 'none',
            opacity: isVisible ? 1 : 0.6
          }}
        >
          {label}
        </span>
        {onToggleVisibility && (
          <button
            type="button"
            title={isVisible ? 'Скрыть с 3D сцены' : 'Показать на 3D сцене'}
            onClick={(e) => {
              e.stopPropagation();
              onToggleVisibility(e);
            }}
            style={{
              background: isVisible ? 'transparent' : '#ff4d4f20',
              border: isVisible ? '1px solid transparent' : '1px solid #ff4d4f40',
              padding: '2px 4px',
              marginLeft: '4px',
              borderRadius: '4px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: isVisible ? (isHovered ? '#00f0ff' : '#777') : '#ff4d4f',
              opacity: isVisible ? (isHovered ? 1 : 0.5) : 1,
              transition: 'all 0.15s ease'
            }}
          >
            {isVisible ? <Eye size={13} /> : <EyeOff size={13} />}
          </button>
        )}
      </div>
    );
  };

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
            isSelected={selectedItem?.type === 'gateway' && selectedItem?.id === 'all'}
            onClick={() => setGatewaysExpanded(!gatewaysExpanded)}
            onExpand={() => setGatewaysExpanded(!gatewaysExpanded)}
            isExpanded={gatewaysExpanded}
            hasChildren={(scenario?.gateways?.length || 0) > 0}
            isVisible={settings.showGateways !== false}
            onToggleVisibility={handleToggleGatewaysGroupVisibility}
          />
          {gatewaysExpanded && scenario?.gateways?.map(g => (
             <TreeItem 
               key={g.id}
               label={g.name}
               level={1}
               isSelected={selectedItem?.type === 'gateway' && selectedItem?.id === g.id}
               onClick={() => setSelectedItem({ type: 'gateway', id: g.id })}
               isVisible={settings.showGateways !== false && !settings.hiddenGateways?.[g.id]}
               onToggleVisibility={(e) => handleToggleGatewayVisibility(g.id, e)}
             />
          ))}

          {planes.map(pNum => {
            const isExpanded = expandedPlanes[pNum];
            const planeSats = scenario?.satellites?.filter(s => s.plane === pNum) || [];
            const isPlaneHidden = !!settings.hiddenPlanes?.[pNum];
            
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
                  isVisible={!isPlaneHidden}
                  onToggleVisibility={(e) => handleTogglePlaneVisibility(pNum, e)}
                />
                {isExpanded && planeSats.map(sat => {
                  const isSatIndividuallyHidden = !!settings.hiddenSatellites?.[sat.id];
                  const isSatVisible = !isPlaneHidden && !isSatIndividuallyHidden;

                  return (
                    <TreeItem 
                      key={sat.id}
                      label={`Спутник ${sat.id}`}
                      level={1}
                      isSelected={selectedItem?.type === 'satellite' && selectedItem?.id === sat.id}
                      onClick={() => {
                        setSelectedItem({ type: 'satellite', id: sat.id });
                        if (onSelectSatellite) onSelectSatellite(sat);
                      }}
                      isVisible={isSatVisible}
                      onToggleVisibility={(e) => handleToggleSatVisibility(sat.id, e)}
                    />
                  );
                })}
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
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#1473e6', fontWeight: 600 }}>
                  <Compass size={14} />
                  <span>Плоскость P{selectedItem.id}</span>
                </div>
                <button
                  type="button"
                  onClick={(e) => handleTogglePlaneVisibility(selectedItem.id, e)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '3px 8px',
                    fontSize: '11px',
                    backgroundColor: !settings.hiddenPlanes?.[selectedItem.id] ? '#1473e625' : '#ff4d4f20',
                    color: !settings.hiddenPlanes?.[selectedItem.id] ? '#00f0ff' : '#ff4d4f',
                    border: `1px solid ${!settings.hiddenPlanes?.[selectedItem.id] ? '#1473e660' : '#ff4d4f60'}`,
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                  title={!settings.hiddenPlanes?.[selectedItem.id] ? 'Скрыть плоскость и её спутники' : 'Показать плоскость'}
                >
                  {!settings.hiddenPlanes?.[selectedItem.id] ? <Eye size={12} /> : <EyeOff size={12} />}
                  <span>{!settings.hiddenPlanes?.[selectedItem.id] ? 'Видима' : 'Скрыта'}</span>
                </button>
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
            const isSatVisible = !settings.hiddenPlanes?.[sat.plane] && !settings.hiddenSatellites?.[sat.id];

            return (
              <div style={sectionStyle}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '6px', borderBottom: '1px solid #333' }}>
                    <span style={{ color: '#aaa', fontSize: '11px' }}>Отображение на 3D сцене</span>
                    <button
                      type="button"
                      onClick={(e) => handleToggleSatVisibility(sat.id, e)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '3px 8px',
                        fontSize: '11px',
                        backgroundColor: isSatVisible ? '#1473e625' : '#ff4d4f20',
                        color: isSatVisible ? '#00f0ff' : '#ff4d4f',
                        border: `1px solid ${isSatVisible ? '#1473e660' : '#ff4d4f60'}`,
                        borderRadius: '4px',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease'
                      }}
                      title={isSatVisible ? 'Скрыть спутник с 3D сцены' : 'Показать спутник на 3D сцене'}
                    >
                      {isSatVisible ? <Eye size={12} /> : <EyeOff size={12} />}
                      <span>{isSatVisible ? 'Видим' : 'Скрыт'}</span>
                    </button>
                  </div>
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
            const isGwVisible = settings.showGateways !== false && !settings.hiddenGateways?.[gw.id];

            return (
              <div style={sectionStyle}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '6px', borderBottom: '1px solid #333' }}>
                    <span style={{ color: '#aaa', fontSize: '11px' }}>Отображение на 3D сцене</span>
                    <button
                      type="button"
                      onClick={(e) => handleToggleGatewayVisibility(gw.id, e)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '3px 8px',
                        fontSize: '11px',
                        backgroundColor: isGwVisible ? '#1473e625' : '#ff4d4f20',
                        color: isGwVisible ? '#00f0ff' : '#ff4d4f',
                        border: `1px solid ${isGwVisible ? '#1473e660' : '#ff4d4f60'}`,
                        borderRadius: '4px',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease'
                      }}
                      title={isGwVisible ? 'Скрыть шлюз' : 'Показать шлюз'}
                    >
                      {isGwVisible ? <Eye size={12} /> : <EyeOff size={12} />}
                      <span>{isGwVisible ? 'Видим' : 'Скрыт'}</span>
                    </button>
                  </div>
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

