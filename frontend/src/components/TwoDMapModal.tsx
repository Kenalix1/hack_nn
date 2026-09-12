import React, { useState, useEffect, useRef } from 'react';
import { ScenarioData, SatelliteOutage, OutlinerSettings } from '../types';
import { getDynamicSatelliteTelemetry } from '../utils/telemetry';
import { Globe, Layers, Eye, EyeOff, ZoomIn, ZoomOut, RotateCcw, Info, MapPin, Radio, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface TwoDMapModalProps {
  scenario: ScenarioData | null;
  outages?: SatelliteOutage[];
  currentTime?: number;
  settings?: OutlinerSettings;
  onSelectSatellite?: (satId: string) => void;
}

export const TwoDMapModal: React.FC<TwoDMapModalProps> = ({
  scenario,
  outages = [],
  currentTime = 0,
  settings,
  onSelectSatellite
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Layers state
  const [showISL, setShowISL] = useState<boolean>(true);
  const [showFOVs, setShowFOVs] = useState<boolean>(true);
  const [showTracks, setShowTracks] = useState<boolean>(true);
  const [showGateways, setShowGateways] = useState<boolean>(true);
  const [showGrid, setShowGrid] = useState<boolean>(true);

  // Zoom & Pan state
  const [zoom, setZoom] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Selected Node Hover / Click
  const [selectedNode, setSelectedNode] = useState<{
    id: string;
    type: 'satellite' | 'gateway';
    lat: number;
    lon: number;
    plane?: number;
    status?: string;
    details?: any;
  } | null>(null);

  const offlineSet = new Set(outages.map(o => o.satellite_id));

  // Compute exact sub-satellite Lat/Lon from orbital parameters
  const computeSubPoint = (sat: any, t_s: number) => {
    const planeNum = sat.plane || 1;
    const maxPlaneNum = 4;
    const baseRaanDeg = sat.raan ?? (planeNum - 1) * 90;
    const basePhaseDeg = (sat as any).phase ?? (planeNum - 1) * 15;
    
    let slotDeg = 0;
    if (typeof (sat as any).slot_deg === 'number') slotDeg = (sat as any).slot_deg;
    else if (typeof sat.true_anomaly === 'number' && sat.true_anomaly !== 0) slotDeg = sat.true_anomaly;
    else if (typeof sat.idx === 'number') slotDeg = sat.idx >= 15 ? sat.idx : sat.idx * 45;

    const raanOffsetDeg = settings?.planeRaanMap?.[planeNum] ?? 0;
    const phaseOffsetDeg = settings?.planePhaseMap?.[planeNum] ?? 0;

    const totalRaanRad = ((baseRaanDeg + raanOffsetDeg) % 360) * (Math.PI / 180);
    const totalPhaseRad = ((basePhaseDeg + phaseOffsetDeg) % 360) * (Math.PI / 180);

    const MU = 398600.4418;
    const orbRadiusKm = (sat.altitude || 550) + 6371;
    const n = Math.sqrt(MU / Math.pow(orbRadiusKm, 3));
    const slotRad = slotDeg * (Math.PI / 180);
    const u = slotRad + totalPhaseRad + n * t_s;
    const incRad = (sat.inc || 53.0) * (Math.PI / 180);

    // ECI 3D Cartesian coordinates
    const xEci = Math.cos(totalRaanRad) * Math.cos(u) - Math.sin(totalRaanRad) * Math.sin(u) * Math.cos(incRad);
    const zEci = Math.sin(totalRaanRad) * Math.cos(u) + Math.cos(totalRaanRad) * Math.sin(u) * Math.cos(incRad);
    const yEci = Math.sin(u) * Math.sin(incRad);

    const latRad = Math.asin(Math.max(-1, Math.min(1, yEci)));
    const latDeg = (latRad * 180) / Math.PI;

    const eciLonRad = Math.atan2(zEci, xEci);
    // Earth rotation (WGS84 angular velocity rad/sec)
    const omegaE = 7.2921159e-5;
    const gmstRad = (omegaE * t_s) % (2 * Math.PI);
    let ecefLonRad = eciLonRad - gmstRad;

    // Normalize longitude to [-PI, PI]
    let lonDeg = (ecefLonRad * 180) / Math.PI;
    lonDeg = ((lonDeg % 360) + 540) % 360 - 180;

    return { lat: latDeg, lon: lonDeg };
  };

  // Canvas drawing effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Helper: Convert Lat/Lon to Canvas X/Y in Equirectangular projection
    const toCanvasX = (lon: number) => {
      const normLon = ((lon + 180) / 360);
      return (normLon * width * zoom) + pan.x;
    };

    const toCanvasY = (lat: number) => {
      const normLat = ((90 - lat) / 180);
      return (normLat * height * zoom) + pan.y;
    };

    // Clear background
    ctx.fillStyle = '#0b0f19';
    ctx.fillRect(0, 0, width, height);

    // 1. Draw World Oceans & Land outlines
    ctx.fillStyle = '#111827';
    ctx.fillRect(0, 0, width, height);

    // Grid lines (Parallels & Meridians)
    if (showGrid) {
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 1;

      // Meridians every 30 deg
      for (let lon = -180; lon <= 180; lon += 30) {
        const x = toCanvasX(lon);
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();

        ctx.fillStyle = '#475569';
        ctx.font = '9px monospace';
        ctx.fillText(`${lon}°`, x + 3, height - 6);
      }

      // Parallels every 30 deg
      for (let lat = -90; lat <= 90; lat += 30) {
        const y = toCanvasY(lat);
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();

        ctx.fillStyle = '#475569';
        ctx.font = '9px monospace';
        ctx.fillText(`${lat}°`, 6, y - 3);
      }

      // Equator (0 deg)
      const eqY = toCanvasY(0);
      ctx.strokeStyle = '#3b82f640';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(0, eqY);
      ctx.lineTo(width, eqY);
      ctx.stroke();

      // Arctic Circle (66.5 N)
      const arcticY = toCanvasY(66.5);
      ctx.strokeStyle = '#38bdf860';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(0, arcticY);
      ctx.lineTo(width, arcticY);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = '#38bdf8';
      ctx.font = '10px sans-serif';
      ctx.fillText('Северный Полярный Круг (66.5° N)', 12, arcticY - 4);
    }

    // Highlight Russian Federation / Arctic Zone Rectangle
    const rfTopY = toCanvasY(85);
    const rfBotY = toCanvasY(45);
    const rfLeftX = toCanvasX(20);
    const rfRightX = toCanvasX(180);
    ctx.fillStyle = '#0284c712';
    ctx.fillRect(rfLeftX, rfTopY, rfRightX - rfLeftX, rfBotY - rfTopY);
    ctx.strokeStyle = '#0284c740';
    ctx.lineWidth = 1;
    ctx.strokeRect(rfLeftX, rfTopY, rfRightX - rfLeftX, rfBotY - rfTopY);
    ctx.fillStyle = '#38bdf880';
    ctx.font = '11px sans-serif';
    ctx.fillText('ЗОНА ОБСЛУЖИВАНИЯ РФ & СМП', rfLeftX + 12, rfTopY + 18);

    // Compute all satellite positions for current time
    const satList = (scenario?.satellites || []).map(sat => {
      const { lat, lon } = computeSubPoint(sat, currentTime);
      const isOffline = offlineSet.has(sat.id);
      const telemetry = getDynamicSatelliteTelemetry(sat, currentTime);
      return {
        ...sat,
        lat,
        lon,
        isOffline,
        telemetry,
        canvasX: toCanvasX(lon),
        canvasY: toCanvasY(lat)
      };
    });

    // 2. Draw Orbit Ground Tracks
    if (showTracks && scenario?.satellites) {
      ctx.strokeStyle = '#1e3a8a50';
      ctx.lineWidth = 1;

      // Group by plane
      const planes: Record<number, any[]> = {};
      scenario.satellites.forEach(s => {
        const p = s.plane || 1;
        if (!planes[p]) planes[p] = [];
        planes[p].push(s);
      });

      Object.values(planes).forEach(planeSats => {
        if (planeSats.length === 0) return;
        ctx.beginPath();
        const sampleSat = planeSats[0];
        
        // Sample orbit over 1 period (5700 sec)
        let prevX = 0;
        let first = true;
        for (let step = 0; step <= 100; step++) {
          const tSample = currentTime + (step / 100) * 5700;
          const pt = computeSubPoint(sampleSat, tSample);
          const cx = toCanvasX(pt.lon);
          const cy = toCanvasY(pt.lat);

          // Handle 180/-180 meridian wrap
          if (!first && Math.abs(cx - prevX) > width * 0.5) {
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(cx, cy);
          } else if (first) {
            ctx.moveTo(cx, cy);
            first = false;
          } else {
            ctx.lineTo(cx, cy);
          }
          prevX = cx;
        }
        ctx.stroke();
      });
    }

    // 3. Draw Coverage Footprints (FOVs)
    if (showFOVs) {
      satList.forEach(sat => {
        if (sat.isOffline) return;
        const radiusPx = 35 * zoom; // approx 1200km FOV footprint radius
        ctx.fillStyle = '#1473e615';
        ctx.strokeStyle = '#1473e635';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(sat.canvasX, sat.canvasY, radiusPx, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      });
    }

    // 4. Draw Inter-Satellite Links (ISLs)
    if (showISL) {
      ctx.lineWidth = 1.2;
      for (let i = 0; i < satList.length; i++) {
        for (let j = i + 1; j < satList.length; j++) {
          const s1 = satList[i];
          const s2 = satList[j];

          // Intra-plane link or adjacent plane link
          const isSamePlane = s1.plane === s2.plane && Math.abs(s1.idx - s2.idx) === 1;
          const isInterPlane = Math.abs(s1.plane - s2.plane) === 1 && s1.idx === s2.idx;

          if (isSamePlane || isInterPlane) {
            const isAnyOffline = s1.isOffline || s2.isOffline;
            ctx.strokeStyle = isAnyOffline ? '#ff3b3040' : '#00ff8840';

            // Meridian wrap check
            if (Math.abs(s1.canvasX - s2.canvasX) < width * 0.5) {
              ctx.beginPath();
              ctx.moveTo(s1.canvasX, s1.canvasY);
              ctx.lineTo(s2.canvasX, s2.canvasY);
              ctx.stroke();
            }
          }
        }
      }
    }

    // 5. Draw Ground Stations & Gateways
    if (showGateways) {
      const gws = scenario?.gateways || [
        { id: 'C65', name: 'Москва C65', lat: 55.75, lon: 37.61, type: 'gateway' },
        { id: 'Pechora', name: 'Печора НСП', lat: 65.14, lon: 57.22, type: 'gateway' },
        { id: 'Murmansk', name: 'Мурманск Терминал', lat: 68.97, lon: 33.08, type: 'gateway' },
        { id: 'Novosibirsk', name: 'Новосибирск Хаб', lat: 55.03, lon: 82.93, type: 'gateway' },
        { id: 'Vladivostok', name: 'Владивосток', lat: 43.11, lon: 131.88, type: 'gateway' }
      ];

      gws.forEach(gw => {
        const gx = toCanvasX(gw.lon);
        const gy = toCanvasY(gw.lat);

        // Radar dish icon
        ctx.fillStyle = '#fbbf24';
        ctx.beginPath();
        ctx.arc(gx, gy, 5 * zoom, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Label
        ctx.fillStyle = '#f8fafc';
        ctx.font = 'bold 10px monospace';
        ctx.fillText(gw.name || gw.id, gx + 8, gy + 3);
      });
    }

    // 6. Draw Satellites
    satList.forEach(sat => {
      const color = sat.isOffline
        ? '#ff3b30'
        : sat.telemetry.overheated
        ? '#fbbf24'
        : '#00ff88';

      // Satellite outer halo
      ctx.fillStyle = color + '30';
      ctx.beginPath();
      ctx.arc(sat.canvasX, sat.canvasY, (sat.isOffline ? 6 : 8) * zoom, 0, Math.PI * 2);
      ctx.fill();

      // Satellite core dot
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(sat.canvasX, sat.canvasY, 3.5 * zoom, 0, Math.PI * 2);
      ctx.fill();

      // Label
      ctx.fillStyle = sat.isOffline ? '#ff7777' : '#e2e8f0';
      ctx.font = '9px monospace';
      ctx.fillText(sat.id, sat.canvasX + 6, sat.canvasY - 4);
    });

  }, [scenario, outages, currentTime, settings, showISL, showFOVs, showTracks, showGateways, showGrid, zoom, pan]);

  // Handle canvas click to select satellite or gateway
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas || !scenario) return;

    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const width = canvas.width;
    const height = canvas.height;

    // Check sat collision
    for (const sat of scenario.satellites) {
      const pt = computeSubPoint(sat, currentTime);
      const cx = ((pt.lon + 180) / 360) * width * zoom + pan.x;
      const cy = ((90 - pt.lat) / 180) * height * zoom + pan.y;

      const dist = Math.hypot(clickX - cx, clickY - cy);
      if (dist <= 12) {
        const isOffline = offlineSet.has(sat.id);
        const telemetry = getDynamicSatelliteTelemetry(sat, currentTime);
        setSelectedNode({
          id: sat.id,
          type: 'satellite',
          lat: pt.lat,
          lon: pt.lon,
          plane: sat.plane,
          status: isOffline ? 'ОТКАЗ (OFFLINE)' : 'ШТАТНО (ACTIVE)',
          details: telemetry
        });
        if (onSelectSatellite) onSelectSatellite(sat.id);
        return;
      }
    }

    // Check gateway collision
    const gws = scenario.gateways || [];
    for (const gw of gws) {
      const gx = ((gw.lon + 180) / 360) * width * zoom + pan.x;
      const gy = ((90 - gw.lat) / 180) * height * zoom + pan.y;

      const dist = Math.hypot(clickX - gx, clickY - gy);
      if (dist <= 12) {
        setSelectedNode({
          id: gw.name || gw.id,
          type: 'gateway',
          lat: gw.lat,
          lon: gw.lon,
          status: 'АКТИВЕН (GW)',
          details: gw
        });
        return;
      }
    }

    setSelectedNode(null);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      backgroundColor: '#0b0f19',
      color: '#e2e8f0',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      userSelect: 'none',
      position: 'relative'
    }}>
      {/* 2D Map Header Toolbar */}
      <div style={{
        padding: '8px 12px',
        backgroundColor: '#121722',
        borderBottom: '1px solid #1e293b',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '8px',
        fontSize: '12px'
      }}>
        {/* Layer Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ color: '#94a3b8', fontSize: '11px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Layers size={13} /> Слои:
          </span>
          <button
            onClick={() => setShowISL(!showISL)}
            style={layerBtnStyle(showISL)}
            title="Переключить отображение межспутниковых оптических линий связи"
          >
            {showISL ? <Eye size={12} /> : <EyeOff size={12} />}
            <span>ISL Связи</span>
          </button>

          <button
            onClick={() => setShowFOVs(!showFOVs)}
            style={layerBtnStyle(showFOVs)}
            title="Переключить зоны покрытия подспутниковых точек"
          >
            {showFOVs ? <Eye size={12} /> : <EyeOff size={12} />}
            <span>Пятна Покрытия</span>
          </button>

          <button
            onClick={() => setShowTracks(!showTracks)}
            style={layerBtnStyle(showTracks)}
            title="Переключить отображение трасс орбит на карте"
          >
            {showTracks ? <Eye size={12} /> : <EyeOff size={12} />}
            <span>Трассы Орбит</span>
          </button>

          <button
            onClick={() => setShowGateways(!showGateways)}
            style={layerBtnStyle(showGateways)}
            title="Переключить отображение наземных станций и шлюзов"
          >
            {showGateways ? <Eye size={12} /> : <EyeOff size={12} />}
            <span>Шлюзы</span>
          </button>

          <button
            onClick={() => setShowGrid(!showGrid)}
            style={layerBtnStyle(showGrid)}
            title="Переключить координатную сетку градусов"
          >
            {showGrid ? <Eye size={12} /> : <EyeOff size={12} />}
            <span>Сетка</span>
          </button>
        </div>

        {/* Zoom Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <button
            onClick={() => setZoom(z => Math.min(3, z + 0.25))}
            style={controlBtnStyle}
            title="Приблизить карту"
          >
            <ZoomIn size={14} />
          </button>
          <span style={{ fontSize: '11px', color: '#38bdf8', fontFamily: 'monospace', minWidth: '36px', textAlign: 'center' }}>
            {(zoom * 100).toFixed(0)}%
          </span>
          <button
            onClick={() => setZoom(z => Math.max(0.8, z - 0.25))}
            style={controlBtnStyle}
            title="Отдалить карту"
          >
            <ZoomOut size={14} />
          </button>
          <button
            onClick={() => { setZoom(1); setPan({ x: 0, y: 0 }); }}
            style={controlBtnStyle}
            title="Сбросить масштаб и положение"
          >
            <RotateCcw size={13} />
          </button>
        </div>
      </div>

      {/* Canvas View Area */}
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden', cursor: isDragging ? 'grabbing' : 'grab' }}>
        <canvas
          ref={canvasRef}
          width={840}
          height={440}
          onClick={handleCanvasClick}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{ width: '100%', height: '100%', display: 'block' }}
        />

        {/* Floating Telemetry Info Card */}
        {selectedNode && (
          <div style={{
            position: 'absolute',
            bottom: '12px',
            left: '12px',
            backgroundColor: '#121722ee',
            border: `1px solid ${selectedNode.status?.includes('OFFLINE') ? '#ff3b30' : '#1473e6'}`,
            borderRadius: '6px',
            padding: '10px 14px',
            fontSize: '11px',
            minWidth: '220px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
            backdropFilter: 'blur(8px)',
            zIndex: 100
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <span style={{ fontWeight: 'bold', fontSize: '12px', color: '#00f0ff' }}>
                {selectedNode.type === 'satellite' ? `🛰️ КА ${selectedNode.id}` : `📡 Шлюз ${selectedNode.id}`}
              </span>
              <span style={{
                fontSize: '10px',
                padding: '1px 6px',
                borderRadius: '3px',
                backgroundColor: selectedNode.status?.includes('OFFLINE') ? '#ff3b3020' : '#00ff8820',
                color: selectedNode.status?.includes('OFFLINE') ? '#ff3b30' : '#00ff88',
                fontWeight: 600
              }}>
                {selectedNode.status}
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', color: '#ccc' }}>
              <div>Широта (Lat): <b style={{ color: '#fff' }}>{selectedNode.lat.toFixed(2)}° N</b></div>
              <div>Долгота (Lon): <b style={{ color: '#fff' }}>{selectedNode.lon.toFixed(2)}° E</b></div>
              {selectedNode.plane && <div>Орбитальная плоскость: <b style={{ color: '#38bdf8' }}>P{selectedNode.plane}</b></div>}
              {selectedNode.details?.temperature_c && (
                <div>Температура узла: <b style={{ color: selectedNode.details.overheated ? '#ff3b30' : '#00ff88' }}>{selectedNode.details.temperature_c.toFixed(1)}°C</b></div>
              )}
              {selectedNode.details?.fuel_kg && (
                <div>Запас топлива (Ксенон): <b style={{ color: '#00f0ff' }}>{selectedNode.details.fuel_kg} кг ({selectedNode.details.fuel_pct}%)</b></div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Map Legend Footer */}
      <div style={{
        padding: '6px 12px',
        backgroundColor: '#0d121c',
        borderTop: '1px solid #1e293b',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        fontSize: '10px',
        color: '#94a3b8'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#00ff88', display: 'inline-block' }} />
          <span>КА Активен</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ff3b30', display: 'inline-block' }} />
          <span>Аварийный отказ</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#fbbf24', display: 'inline-block' }} />
          <span>Наземный шлюз</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span style={{ width: '14px', height: '2px', backgroundColor: '#00ff8860', display: 'inline-block' }} />
          <span>ISL Оптическая Линия</span>
        </div>
      </div>
    </div>
  );
};

const layerBtnStyle = (active: boolean): React.CSSProperties => ({
  backgroundColor: active ? '#1e293b' : '#121620',
  color: active ? '#38bdf8' : '#64748b',
  border: `1px solid ${active ? '#0284c7' : '#333943'}`,
  borderRadius: '4px',
  padding: '3px 8px',
  fontSize: '11px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  fontWeight: active ? 600 : 400
});

const controlBtnStyle: React.CSSProperties = {
  backgroundColor: '#1e293b',
  color: '#cbd5e1',
  border: '1px solid #333943',
  borderRadius: '4px',
  padding: '3px 7px',
  fontSize: '11px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};
