import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ScenarioData, SatelliteOutage, OutlinerSettings } from '../types';
import { getDynamicSatelliteTelemetry } from '../utils/telemetry';

interface TwoDMapCanvasProps {
  scenario: ScenarioData | null;
  settings: OutlinerSettings;
  currentTime: number;
  outages?: SatelliteOutage[];
  onSelectSatellite?: (satId: string) => void;
}

export const TwoDMapCanvas: React.FC<TwoDMapCanvasProps> = ({
  scenario,
  settings,
  currentTime,
  outages = [],
  onSelectSatellite
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Map Tile Style: Black & White Dark / Black & White Light / Standard
  const [tileStyle, setTileStyle] = useState<'bw_dark' | 'bw_light' | 'standard'>('bw_dark');

  // Layers Visibility from GlobalSettingsMenu (matching 3D map settings)
  const showTracks = settings?.showOrbits !== false;
  const showFOVs = settings?.showCoverageHeatmap !== false;
  const showISL = settings?.showISL !== false;
  const showGateways = settings?.showGateways !== false;
  const showSatellites = settings?.showSatellites !== false;
  const showLabels = settings?.showLabels !== false;

  // Viewport State: Center Lat/Lon & Zoom Level
  const [center, setCenter] = useState<{ lat: number; lon: number }>({ lat: 60.0, lon: 60.0 });
  const [zoom, setZoom] = useState<number>(3); // Zoom 1..10

  // Drag State
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
  const tileCacheRef = useRef<Record<string, HTMLImageElement>>({});

  // Web Mercator Projections (EPSG:3857)
  const lonToX = useCallback((lon: number, z: number) => {
    return ((lon + 180) / 360) * Math.pow(2, z) * 256;
  }, []);

  const latToY = useCallback((lat: number, z: number) => {
    const latRad = (Math.max(-85.05112878, Math.min(85.05112878, lat)) * Math.PI) / 180;
    return (
      (1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2 * Math.pow(2, z) * 256
    );
  }, []);

  const xToLon = useCallback((x: number, z: number) => {
    return (x / (Math.pow(2, z) * 256)) * 360 - 180;
  }, []);

  const yToLat = useCallback((y: number, z: number) => {
    const n = Math.PI - (2 * Math.PI * y) / (Math.pow(2, z) * 256);
    return (180 / Math.PI) * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)));
  }, []);

  // Calculate dynamic satellite sub-point Lat/Lon
  const computeSubPoint = (sat: any, t_s: number) => {
    const planeNum = sat.plane || 1;
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

    const xEci = Math.cos(totalRaanRad) * Math.cos(u) - Math.sin(totalRaanRad) * Math.sin(u) * Math.cos(incRad);
    const zEci = Math.sin(totalRaanRad) * Math.cos(u) + Math.cos(totalRaanRad) * Math.sin(u) * Math.cos(incRad);
    const yEci = Math.sin(u) * Math.sin(incRad);

    const latRad = Math.asin(Math.max(-1, Math.min(1, yEci)));
    const latDeg = (latRad * 180) / Math.PI;

    const eciLonRad = Math.atan2(zEci, xEci);
    const omegaE = 7.2921159e-5;
    const gmstDeg = (omegaE * t_s * 180) / Math.PI;
    
    // Align with 3D Globe earthAngle0 (12 deg static offset)
    const earthAngle0Deg = 12.0;
    let lonDeg = (eciLonRad * 180) / Math.PI - earthAngle0Deg - gmstDeg;
    lonDeg = ((lonDeg % 360) + 540) % 360 - 180;

    return { lat: latDeg, lon: lonDeg };
  };

  const redrawRequestedRef = useRef(false);

  // Canvas render function
  const renderScene = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    if (canvas.width !== (container.clientWidth || 1000) || canvas.height !== (container.clientHeight || 700)) {
      canvas.width = container.clientWidth || 1000;
      canvas.height = container.clientHeight || 700;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    const currentZoom = Math.floor(zoom);
    const scale = Math.pow(2, zoom - currentZoom);

    // Center pixel coords in Web Mercator
    const centerX = lonToX(center.lon, currentZoom);
    const centerY = latToY(center.lat, currentZoom);

    const toScreenX = (lon: number) => {
      const px = lonToX(lon, currentZoom);
      return width / 2 + (px - centerX) * scale;
    };

    const toScreenY = (lat: number) => {
      const py = latToY(lat, currentZoom);
      return height / 2 + (py - centerY) * scale;
    };

    // 1. Draw Clean Vector Base Map (Continents & Graticule Grid)
    ctx.fillStyle = tileStyle !== 'standard' ? '#0b0f19' : '#f3f4f6';
    ctx.fillRect(0, 0, width, height);

    // Render Grid Lines (Parallels & Meridians)
    ctx.strokeStyle = tileStyle !== 'standard' ? '#1e293b' : '#cbd5e1';
    ctx.lineWidth = 1;

    for (let lon = -180; lon <= 180; lon += 30) {
      const sx = toScreenX(lon);
      ctx.beginPath();
      ctx.moveTo(sx, 0);
      ctx.lineTo(sx, height);
      ctx.stroke();

      ctx.fillStyle = tileStyle !== 'standard' ? '#475569' : '#64748b';
      ctx.font = '10px monospace';
      ctx.fillText(`${lon}°`, sx + 3, height - 6);
    }

    for (let lat = -60; lat <= 80; lat += 20) {
      const sy = toScreenY(lat);
      ctx.beginPath();
      ctx.moveTo(0, sy);
      ctx.lineTo(width, sy);
      ctx.stroke();

      ctx.fillStyle = tileStyle !== 'standard' ? '#475569' : '#64748b';
      ctx.font = '10px monospace';
      ctx.fillText(`${lat}°`, 6, sy - 3);
    }

    // Highlight Arctic Zone & Russia Service Region
    const rfTopY = toScreenY(85);
    const rfBotY = toScreenY(45);
    const rfLeftX = toScreenX(20);
    const rfRightX = toScreenX(180);
    ctx.fillStyle = tileStyle !== 'standard' ? '#0284c718' : '#0284c710';
    ctx.fillRect(rfLeftX, rfTopY, rfRightX - rfLeftX, rfBotY - rfTopY);
    ctx.strokeStyle = '#0284c750';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(rfLeftX, rfTopY, rfRightX - rfLeftX, rfBotY - rfTopY);

    ctx.fillStyle = '#0284c7';
    ctx.font = 'bold 11px sans-serif';
    ctx.fillText('ЗОНА ОБСЛУЖИВАНИЯ РФ И СМП (60°N - 90°N)', rfLeftX + 10, rfTopY + 16);

    // 2. Fetch & Render OpenStreetMap Tiles (Subdomains a/b/c)
    const startTileX = Math.floor((centerX - width / (2 * scale)) / 256);
    const endTileX = Math.floor((centerX + width / (2 * scale)) / 256);
    const startTileY = Math.floor((centerY - height / (2 * scale)) / 256);
    const endTileY = Math.floor((centerY + height / (2 * scale)) / 256);

    const maxTile = Math.pow(2, currentZoom);

    // Set monochrome black & white filter for map tiles
    if (tileStyle === 'bw_dark') {
      ctx.filter = 'grayscale(100%) invert(92%) contrast(140%)';
    } else if (tileStyle === 'bw_light') {
      ctx.filter = 'grayscale(100%) contrast(120%)';
    } else {
      ctx.filter = 'none';
    }

    for (let tx = startTileX; tx <= endTileX; tx++) {
      for (let ty = startTileY; ty <= endTileY; ty++) {
        if (ty < 0 || ty >= maxTile) continue;
        const normalizedTx = ((tx % maxTile) + maxTile) % maxTile;
        const sub = ['a', 'b', 'c'][Math.abs(tx + ty) % 3];

        const tileUrl = `https://${sub}.tile.openstreetmap.org/${currentZoom}/${normalizedTx}/${ty}.png`;

        const tilePx = tx * 256;
        const tilePy = ty * 256;

        const screenX = width / 2 + (tilePx - centerX) * scale;
        const screenY = height / 2 + (tilePy - centerY) * scale;
        const tileSize = 256 * scale;

        let img = tileCacheRef.current[tileUrl];
        if (!img) {
          img = new Image();
          img.crossOrigin = 'anonymous';
          img.src = tileUrl;
          img.onload = () => {
            if (!redrawRequestedRef.current) {
              redrawRequestedRef.current = true;
              requestAnimationFrame(() => {
                redrawRequestedRef.current = false;
                renderScene();
              });
            }
          };
          tileCacheRef.current[tileUrl] = img;
        } else if (img.complete && img.naturalWidth > 0) {
          ctx.drawImage(img, screenX, screenY, tileSize, tileSize);
        }
      }
    }

    // Reset filter for clear overlay rendering of satellites, tracks, and ISL lines
    ctx.filter = 'none';

    // Calculate dynamic satellite sub-points
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
        screenX: toScreenX(lon),
        screenY: toScreenY(lat)
      };
    });

    // 3. Draw Orbit Ground Tracks
    if (showTracks && scenario?.satellites) {
      ctx.strokeStyle = tileStyle !== 'standard' ? '#38bdf880' : '#2563eb80';
      ctx.lineWidth = 1.5;

      const planes: Record<number, any[]> = {};
      scenario.satellites.forEach(s => {
        const p = s.plane || 1;
        if (!planes[p]) planes[p] = [];
        planes[p].push(s);
      });

      const omegaE = 7.2921159e-5;
      const gmstDeg = (omegaE * currentTime * 180) / Math.PI;
      const earthAngle0Deg = 12.0;

      Object.entries(planes).forEach(([pStr, planeSats]) => {
        if (planeSats.length === 0) return;
        const planeNum = parseInt(pStr, 10);
        if (settings?.hiddenPlanes?.[planeNum]) return;

        const sampleSat = planeSats[0];
        const baseRaanDeg = sampleSat.raan ?? (planeNum - 1) * 90;
        const raanOffsetDeg = settings?.planeRaanMap?.[planeNum] ?? 0;
        const totalRaanRad = ((baseRaanDeg + raanOffsetDeg) % 360) * (Math.PI / 180);
        const incRad = (sampleSat.inc || 53.0) * (Math.PI / 180);

        ctx.beginPath();
        let prevX = 0;
        let first = true;
        const STEPS = 140;

        for (let step = 0; step <= STEPS; step++) {
          const u = (step / STEPS) * Math.PI * 2;

          const xEci = Math.cos(totalRaanRad) * Math.cos(u) - Math.sin(totalRaanRad) * Math.sin(u) * Math.cos(incRad);
          const zEci = Math.sin(totalRaanRad) * Math.cos(u) + Math.cos(totalRaanRad) * Math.sin(u) * Math.cos(incRad);
          const yEci = Math.sin(u) * Math.sin(incRad);

          const latRad = Math.asin(Math.max(-1, Math.min(1, yEci)));
          const latDeg = (latRad * 180) / Math.PI;

          const eciLonRad = Math.atan2(zEci, xEci);
          let lonDeg = (eciLonRad * 180) / Math.PI - earthAngle0Deg - gmstDeg;
          lonDeg = ((lonDeg % 360) + 540) % 360 - 180;

          const sx = toScreenX(lonDeg);
          const sy = toScreenY(latDeg);

          if (!first && Math.abs(sx - prevX) > width * 0.4) {
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(sx, sy);
          } else if (first) {
            ctx.moveTo(sx, sy);
            first = false;
          } else {
            ctx.lineTo(sx, sy);
          }
          prevX = sx;
        }
        ctx.stroke();
      });
    }

    // 4. Draw FOV Coverage Footprints
    if (showFOVs) {
      satList.forEach(sat => {
        if (sat.isOffline) return;
        const radiusPx = 28 * Math.min(2.5, zoom / 3);
        ctx.fillStyle = tileStyle !== 'standard' ? '#1473e618' : '#3b82f620';
        ctx.strokeStyle = tileStyle !== 'standard' ? '#1473e640' : '#2563eb50';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(sat.screenX, sat.screenY, radiusPx, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      });
    }

    // 5. Draw ISL Lines
    if (showISL) {
      ctx.lineWidth = 1.5;
      for (let i = 0; i < satList.length; i++) {
        for (let j = i + 1; j < satList.length; j++) {
          const s1 = satList[i];
          const s2 = satList[j];

          const isSamePlane = s1.plane === s2.plane && Math.abs(s1.idx - s2.idx) === 1;
          const isInterPlane = Math.abs(s1.plane - s2.plane) === 1 && s1.idx === s2.idx;

          if (isSamePlane || isInterPlane) {
            const isAnyOffline = s1.isOffline || s2.isOffline;
            ctx.strokeStyle = isAnyOffline ? '#ff3b3060' : '#00ff8870';

            if (Math.abs(s1.screenX - s2.screenX) < width * 0.5) {
              ctx.beginPath();
              ctx.moveTo(s1.screenX, s1.screenY);
              ctx.lineTo(s2.screenX, s2.screenY);
              ctx.stroke();
            }
          }
        }
      }
    }

    // 6. Draw Gateways & Ground Stations
    if (showGateways) {
      const gws = scenario?.gateways || [
        { id: 'C65', name: 'Москва C65', lat: 55.75, lon: 37.61 },
        { id: 'Pechora', name: 'Печора НСП', lat: 65.14, lon: 57.22 },
        { id: 'Murmansk', name: 'Мурманск Терминал', lat: 68.97, lon: 33.08 },
        { id: 'Novosibirsk', name: 'Новосибирск Хаб', lat: 55.03, lon: 82.93 },
        { id: 'Vladivostok', name: 'Владивосток', lat: 43.11, lon: 131.88 }
      ];

      gws.forEach(gw => {
        const gx = toScreenX(gw.lon);
        const gy = toScreenY(gw.lat);
        const isGwOffline = !!settings?.offlineGateways?.[gw.id];

        ctx.fillStyle = isGwOffline ? '#ff3b30' : '#fbbf24';
        ctx.beginPath();
        ctx.arc(gx, gy, isGwOffline ? 8 : 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = isGwOffline ? '#ff3b30' : (tileStyle !== 'standard' ? '#ffffff' : '#0f172a');
        ctx.font = 'bold 11px monospace';
        const labelText = isGwOffline ? `${gw.name || gw.id} [АВАРИЯ]` : (gw.name || gw.id);
        ctx.fillText(labelText, gx + 9, gy + 4);
      });
    }

    // 7. Draw Satellites
    if (showSatellites) {
      satList.forEach(sat => {
        const color = sat.isOffline
          ? '#ff3b30'
          : sat.telemetry.overheated
          ? '#fbbf24'
          : '#00ff88';

        // Sat halo
        ctx.fillStyle = color + '40';
        ctx.beginPath();
        ctx.arc(sat.screenX, sat.screenY, 9, 0, Math.PI * 2);
        ctx.fill();

        // Sat core
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(sat.screenX, sat.screenY, 4, 0, Math.PI * 2);
        ctx.fill();

        if (showLabels) {
          ctx.fillStyle = sat.isOffline ? '#ff7777' : tileStyle !== 'standard' ? '#e2e8f0' : '#1e293b';
          ctx.font = 'bold 10px monospace';
          ctx.fillText(sat.id, sat.screenX + 7, sat.screenY - 3);
        }
      });
    }

  }, [scenario, outages, currentTime, settings, tileStyle, showISL, showFOVs, showTracks, showGateways, showSatellites, showLabels, center, zoom, lonToX, latToY]);

  useEffect(() => {
    renderScene();
  }, [renderScene]);

  // Real-time animation loop so satellites glide smoothly on 2D map
  useEffect(() => {
    let animId: number;
    const loop = () => {
      renderScene();
      animId = requestAnimationFrame(loop);
    };
    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [renderScene]);

  // Click handler
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas || !scenario) return;

    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const currentZoom = Math.floor(zoom);
    const scale = Math.pow(2, zoom - currentZoom);
    const centerX = lonToX(center.lon, currentZoom);
    const centerY = latToY(center.lat, currentZoom);

    // Satellites
    for (const sat of (scenario?.satellites || [])) {
      const pt = computeSubPoint(sat, currentTime);
      const px = lonToX(pt.lon, currentZoom);
      const py = latToY(pt.lat, currentZoom);
      const sx = canvas.width / 2 + (px - centerX) * scale;
      const sy = canvas.height / 2 + (py - centerY) * scale;

      if (Math.hypot(clickX - sx, clickY - sy) <= 14) {
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

    setSelectedNode(null);
  };

  // Clamp center lat/lon so viewport edges never leave geographic map boundaries
  const clampCenter = useCallback((lat: number, lon: number, z: number) => {
    const canvas = canvasRef.current;
    const w = canvas?.width || 1000;
    const h = canvas?.height || 700;

    const currentZoom = Math.floor(z);
    const scale = Math.pow(2, z - currentZoom);
    const totalMapPx = Math.pow(2, currentZoom) * 256 * scale;

    // Latitude clamping (Mercator limit 78 deg)
    const halfLatSpan = (h / 2) * (180 / totalMapPx);
    const maxCenterLat = Math.max(0, 78.0 - halfLatSpan);
    const clampedLat = Math.max(-maxCenterLat, Math.min(maxCenterLat, lat));

    // Longitude clamping (-180 to +180 deg)
    const halfLonSpan = (w / 2) * (360 / totalMapPx);
    let clampedLon = lon;
    if (halfLonSpan >= 180) {
      clampedLon = 0;
    } else {
      const maxCenterLon = 180 - halfLonSpan;
      clampedLon = Math.max(-maxCenterLon, Math.min(maxCenterLon, lon));
    }

    return { lat: clampedLat, lon: clampedLon };
  }, []);

  // Drag Panning Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStart.x;
    const dy = e.clientY - dragStart.y;
    setDragStart({ x: e.clientX, y: e.clientY });

    const currentZoom = Math.floor(zoom);
    const scale = Math.pow(2, zoom - currentZoom);

    const dLon = (dx / scale) * (360 / (Math.pow(2, currentZoom) * 256));
    const dLat = (dy / scale) * (180 / (Math.pow(2, currentZoom) * 256));

    setCenter(prev => clampCenter(prev.lat + dLat, prev.lon - dLon, zoom));
  };

  const handleWheel = (e: React.WheelEvent) => {
    const delta = e.deltaY < 0 ? 0.25 : -0.25;
    const nextZoom = Math.max(2.0, Math.min(8.0, Number((zoom + delta).toFixed(2))));
    setZoom(nextZoom);
    setCenter(prev => clampCenter(prev.lat, prev.lon, nextZoom));
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <div ref={containerRef} style={{
      width: '100%',
      height: '100%',
      backgroundColor: tileStyle !== 'standard' ? '#0b0f19' : '#e5e7eb',
      position: 'relative',
      overflow: 'hidden',
      userSelect: 'none'
    }}>
      {/* Main OSM Canvas */}
      <canvas
        ref={canvasRef}
        onClick={handleCanvasClick}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
        style={{
          width: '100%',
          height: '100%',
          cursor: isDragging ? 'grabbing' : 'grab',
          display: 'block'
        }}
      />

      {/* Telemetry Card Popup */}
      {selectedNode && (
        <div style={{
          position: 'absolute',
          bottom: '80px',
          left: '16px',
          zIndex: 95,
          backgroundColor: '#121722ee',
          border: `1px solid ${selectedNode.status?.includes('OFFLINE') ? '#ff3b30' : '#1473e6'}`,
          borderRadius: '8px',
          padding: '12px 16px',
          fontSize: '12px',
          minWidth: '240px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
          backdropFilter: 'blur(8px)',
          color: '#ffffff'
        }}>
          <div style={{ fontWeight: 'bold', fontSize: '13px', color: '#00f0ff', marginBottom: '4px' }}>
            Спутник {selectedNode.id}
          </div>
          <div style={{ fontSize: '11px', color: '#ccc', display: 'flex', flexDirection: 'column', gap: '3px' }}>
            <div>Широта: <b>{selectedNode.lat.toFixed(2)}° N</b> | Долгота: <b>{selectedNode.lon.toFixed(2)}° E</b></div>
            <div>Плоскость: <b style={{ color: '#38bdf8' }}>P{selectedNode.plane}</b></div>
            <div>Статус: <b style={{ color: selectedNode.status?.includes('OFFLINE') ? '#ff3b30' : '#00ff88' }}>{selectedNode.status}</b></div>
            {selectedNode.details?.temperature_c && <div>Температура: <b>{selectedNode.details.temperature_c.toFixed(1)}°C</b></div>}
          </div>
        </div>
      )}
    </div>
  );
};

