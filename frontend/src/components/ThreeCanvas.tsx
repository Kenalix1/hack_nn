import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { ScenarioData, OutlinerSettings, Satellite, SatelliteOutage } from '../types';
import { getDynamicSatelliteTelemetry } from '../utils/telemetry';
import {
  loadSatelliteModels,
  getCachedSatelliteModels,
  buildSatellite3DObject,
  updateSatelliteLOD,
  SatelliteStatus
} from '../utils/satelliteModelLoader';
import {
  loadDishModel,
  getCachedDishModel,
  buildDish3DObject
} from '../utils/dishModelLoader';

interface ThreeCanvasProps {
  scenario: ScenarioData | null;
  settings: OutlinerSettings;
  currentTime: number;
  outages: SatelliteOutage[];
  criticalSatellites?: string[];
  focusedSatelliteId: string | null;
  onSelectSatellite: (sat: Satellite) => void;
  onResetCamera?: () => void;
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({
  scenario,
  settings,
  currentTime,
  outages,
  criticalSatellites = [],
  focusedSatelliteId,
  onSelectSatellite
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const groupsRef = useRef<{
    earthGroup: THREE.Group;
    orbits: THREE.Group;
    satellites: THREE.Group;
    gateways: THREE.Group;
    gatewayDomes: THREE.Group;
    islLines: THREE.Group;
    satLinks: THREE.Group;
    labels: THREE.Group;
    fovCones: THREE.Group;
    packets: THREE.Group;
    atmosMesh?: THREE.Mesh;
    starField?: THREE.Points;
  }>({
    earthGroup: new THREE.Group(),
    orbits: new THREE.Group(),
    satellites: new THREE.Group(),
    gateways: new THREE.Group(),
    gatewayDomes: new THREE.Group(),
    islLines: new THREE.Group(),
    satLinks: new THREE.Group(),
    labels: new THREE.Group(),
    fovCones: new THREE.Group(),
    packets: new THREE.Group()
  });

  const satMeshMapRef = useRef<Map<THREE.Mesh, Satellite>>(new Map());
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const satPosMapRef = useRef<Record<string, THREE.Vector3>>({});
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [dishLoaded, setDishLoaded] = useState(false);

  const focusedSatelliteIdRef = useRef<string | null>(focusedSatelliteId);
  useEffect(() => {
    focusedSatelliteIdRef.current = focusedSatelliteId;
  }, [focusedSatelliteId]);

  useEffect(() => {
    loadSatelliteModels()
      .then(() => setModelsLoaded(true))
      .catch((e) => console.warn('Could not load 3D satellite models:', e));

    loadDishModel()
      .then(() => setDishLoaded(true))
      .catch((e) => console.warn('Could not load Dish_LowPoly model:', e));
  }, []);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const getWidth = () => container.clientWidth || window.innerWidth;
    const getHeight = () => container.clientHeight || (window.innerHeight - 44);

    // 1. Scene Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x05070c);

    // 1b. 3D Starfield Background
    const starCount = 4500;
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 400 + Math.random() * 250;

      starPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      starPositions[i * 3 + 2] = r * Math.cos(phi);

      const brightness = 0.65 + Math.random() * 0.35;
      const tint = Math.random();
      if (tint > 0.88) {
        // Soft blue-white star glow
        starColors[i * 3] = 0.8 * brightness;
        starColors[i * 3 + 1] = 0.92 * brightness;
        starColors[i * 3 + 2] = 1.0 * brightness;
      } else if (tint > 0.72) {
        // Warm white star
        starColors[i * 3] = 1.0 * brightness;
        starColors[i * 3 + 1] = 0.96 * brightness;
        starColors[i * 3 + 2] = 0.88 * brightness;
      } else {
        // Pure silver white star
        starColors[i * 3] = 0.95 * brightness;
        starColors[i * 3 + 1] = 0.95 * brightness;
        starColors[i * 3 + 2] = 0.95 * brightness;
      }
    }

    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    // Circular particle texture with soft radial glow
    const starCanvas = document.createElement('canvas');
    starCanvas.width = 32;
    starCanvas.height = 32;
    const starCtx = starCanvas.getContext('2d');
    if (starCtx) {
      const grad = starCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.2, 'rgba(240, 245, 255, 0.9)');
      grad.addColorStop(0.5, 'rgba(200, 220, 255, 0.35)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      starCtx.fillStyle = grad;
      starCtx.beginPath();
      starCtx.arc(16, 16, 16, 0, Math.PI * 2);
      starCtx.fill();
    }
    const starTex = new THREE.CanvasTexture(starCanvas);

    const starMat = new THREE.PointsMaterial({
      size: 2.2,
      map: starTex,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const starPoints = new THREE.Points(starGeo, starMat);
    scene.add(starPoints);
    groupsRef.current.starField = starPoints;

    const camera = new THREE.PerspectiveCamera(
      45,
      getWidth() / getHeight(),
      0.1,
      1000
    );
    camera.position.set(0, 16, 28);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(getWidth(), getHeight());
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 7;
    controls.maxDistance = 120;
    controlsRef.current = controls;

    // Raycaster Click Handler
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleCanvasClick = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const satMeshes = Array.from(satMeshMapRef.current.keys());
      const intersects = raycaster.intersectObjects(satMeshes, false);

      if (intersects.length > 0) {
        let sat: Satellite | undefined;
        for (const inter of intersects) {
          sat = satMeshMapRef.current.get(inter.object as THREE.Mesh);
          if (sat) break;
          let parent = inter.object.parent;
          while (parent) {
            if ((parent as any).userData?.satellite) {
              sat = (parent as any).userData.satellite;
              break;
            }
            parent = parent.parent;
          }
          if (sat) break;
        }
        if (sat) {
          onSelectSatellite(sat);
        }
      }
    };

    renderer.domElement.addEventListener('click', handleCanvasClick);

    // Bright studio lighting for Earth globe and satellites
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.1);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 0.9);
    dirLight1.position.set(30, 40, 50);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
    dirLight2.position.set(-30, -20, -40);
    scene.add(dirLight2);

    // 3. Globe Mesh (WGS84 Oblate Spheroid: a = 6378.137km, b = 6356.752km)
    const earthRadius = 6.371; // Reference sphere radius
    const earthGeo = new THREE.SphereGeometry(earthRadius, 64, 64);
    // Apply WGS84 polar compression flattening (b / a = 6356.752 / 6378.137 = 0.9966471)
    earthGeo.scale(1.0, 6356.752 / 6378.137, 1.0);

    const fallbackCanvas = createEarth2026FallbackCanvas();
    const fallbackTex = new THREE.CanvasTexture(fallbackCanvas);
    fallbackTex.wrapS = THREE.RepeatWrapping;

    const earthMat = new THREE.MeshPhongMaterial({
      map: fallbackTex,
      shininess: 30,
      specular: new THREE.Color(0x1a3a66)
    });
    const earthMesh = new THREE.Mesh(earthGeo, earthMat);

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg',
      (texture) => {
        texture.wrapS = THREE.RepeatWrapping;
        earthMat.map = texture;
        earthMat.needsUpdate = true;
      },
      undefined,
      () => {
        textureLoader.load(
          'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg',
          (backupTex) => {
            backupTex.wrapS = THREE.RepeatWrapping;
            earthMat.map = backupTex;
            earthMat.needsUpdate = true;
          },
          undefined,
          () => {
            textureLoader.load(
              'https://unpkg.com/three-globe/example/img/earth-day.jpg',
              (dayTex) => {
                dayTex.wrapS = THREE.RepeatWrapping;
                earthMat.map = dayTex;
                earthMat.needsUpdate = true;
              }
            );
          }
        );
      }
    );

    textureLoader.load('https://unpkg.com/three-globe/example/img/earth-topology.png', (bumpTex) => {
      bumpTex.wrapS = THREE.RepeatWrapping;
      earthMat.bumpMap = bumpTex;
      earthMat.bumpScale = 0.05;
      earthMat.needsUpdate = true;
    });

    const earthGroup = groupsRef.current.earthGroup;
    earthGroup.add(earthMesh);

    const atmosGeo = new THREE.SphereGeometry(earthRadius * 1.025, 48, 48);
    atmosGeo.scale(1.0, 6356.752 / 6378.137, 1.0);
    const atmosMat = new THREE.MeshBasicMaterial({
      color: 0x334155,
      transparent: true,
      opacity: 0.15,
      side: THREE.BackSide
    });
    const atmosMesh = new THREE.Mesh(atmosGeo, atmosMat);
    earthGroup.add(atmosMesh);
    groupsRef.current.atmosMesh = atmosMesh;

    earthGroup.add(groupsRef.current.orbits);
    earthGroup.add(groupsRef.current.satellites);
    earthGroup.add(groupsRef.current.gateways);
    earthGroup.add(groupsRef.current.gatewayDomes);
    earthGroup.add(groupsRef.current.islLines);
    earthGroup.add(groupsRef.current.satLinks);
    earthGroup.add(groupsRef.current.labels);
    earthGroup.add(groupsRef.current.fovCones);
    earthGroup.add(groupsRef.current.packets);

    scene.add(earthGroup);

    const updateSize = () => {
      const w = getWidth();
      const h = getHeight();
      if (w > 0 && h > 0) {
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }
    };

    const resizeObserver = new ResizeObserver(() => updateSize());
    resizeObserver.observe(container);
    window.addEventListener('resize', updateSize);

    let animId: number;
    const tempVec = new THREE.Vector3();
    const animate = () => {
      animId = requestAnimationFrame(animate);
      controls.update();

      if (groupsRef.current.starField) {
        groupsRef.current.starField.rotation.y += 0.00003;
      }
      
      // Update label opacity based on visibility (front vs back of Earth)
      const camPos = camera.position.clone().normalize();
      groupsRef.current.labels.children.forEach(label => {
        label.getWorldPosition(tempVec);
        tempVec.normalize();
        const dot = tempVec.dot(camPos);
        const sprite = label as THREE.Sprite;
        
        let op = 1.0;
        if (dot < 0.0) op = 0.15;
        else if (dot < 0.2) op = 0.15 + (0.85) * (dot / 0.2);
        
        sprite.material.opacity = op;
      });

      // 60 FPS Smooth Position Interpolation for Satellites
      groupsRef.current.satellites.children.forEach(satGroup => {
        const uData = (satGroup as any).userData;
        if (uData && uData.targetPos) {
          satGroup.position.lerp(uData.targetPos, 0.18);
          if (Math.abs(satGroup.position.y / (satGroup.position.length() || 1)) > 0.95) {
            satGroup.up.set(1, 0, 0);
          } else {
            satGroup.up.set(0, 1, 0);
          }
          satGroup.lookAt(0, 0, 0);
        }
      });

      // Update 3D Satellite LOD based on map zoom & camera distance
      const currentFocusedId = focusedSatelliteIdRef.current;
      groupsRef.current.satellites.children.forEach(child => {
        if (child.name === 'Satellite3D') {
          const sat = (child as any).userData?.satellite as Satellite | undefined;
          const isFocused = !!(sat && sat.id === currentFocusedId);
          updateSatelliteLOD(child as THREE.Group, camera, isFocused);
        }
      });

      // Animate Cisco Packet Tracer data packets flying along ground-to-satellite links
      const curTimeSec = performance.now() * 0.001;
      groupsRef.current.packets.children.forEach((child: THREE.Object3D) => {
        const pData = (child as any).userData;
        if (pData && pData.startPos && pData.endPos) {
          const progress = ((curTimeSec * pData.speed) + pData.phase) % 1.0;
          child.position.lerpVectors(pData.startPos, pData.endPos, progress);
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      renderer.domElement.removeEventListener('click', handleCanvasClick);
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateSize);
      cancelAnimationFrame(animId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Smooth Camera Fly-to Target Satellite OR Reset to Earth Center
  useEffect(() => {
    if (!cameraRef.current || !controlsRef.current) return;
    const camera = cameraRef.current;
    const controls = controlsRef.current;

    let targetPos: THREE.Vector3;
    let camOffset: THREE.Vector3;

    if (focusedSatelliteId && satPosMapRef.current[focusedSatelliteId]) {
      targetPos = satPosMapRef.current[focusedSatelliteId].clone();
      camOffset = targetPos.clone().multiplyScalar(1.32);
    } else {
      // Detach from satellite back to full Earth view
      targetPos = new THREE.Vector3(0, 0, 0);
      camOffset = new THREE.Vector3(0, 0, 25);
    }

    let step = 0;
    const flyInterval = setInterval(() => {
      step += 0.05;
      controls.target.lerp(targetPos, 0.12);
      camera.position.lerp(camOffset, 0.12);
      if (step >= 1.0) {
        clearInterval(flyInterval);
      }
    }, 20);

    return () => clearInterval(flyInterval);
  }, [focusedSatelliteId]);

  // Sync Scene, RAAN, Phase & 3D Field of View Cones
  useEffect(() => {
    if (!scenario) return;

    const { earthGroup, orbits, satellites, gateways, gatewayDomes, islLines, satLinks, labels, fovCones, packets, atmosMesh } = groupsRef.current;

    if (atmosMesh) {
      atmosMesh.visible = settings.showAtmosphere;
      (atmosMesh.material as THREE.MeshBasicMaterial).color.set(settings.atmosphereColor || '#1e3a8a');
    }

    [orbits, satellites, gateways, gatewayDomes, islLines, satLinks, labels, fovCones, packets].forEach(g => {
      while (g.children.length > 0) {
        g.remove(g.children[0]);
      }
    });

    satMeshMapRef.current.clear();
    satPosMapRef.current = {};
    const earthRadius = 6.371;
    const MU = 398600.435507;
    const earthAngle0 = 12.0 * (Math.PI / 180);

    // Static Earth Y rotation (fixed, clear geographic orientation)
    earthGroup.rotation.y = earthAngle0;

    const offlineSet = new Set(outages.map(o => o.satellite_id));
    const planeMap: Record<number, Array<{ sat: Satellite; pos: THREE.Vector3; posKm: THREE.Vector3; isOffline: boolean; isHighLatency: boolean; uAngle: number }>> = {};
    const satPosMap: Record<string, THREE.Vector3> = {};

    const activeSatMat = new THREE.MeshBasicMaterial({ color: settings.satColor || '#ffffff' });
    const highLatencySatMat = new THREE.MeshBasicMaterial({ color: settings.highLatencySatColor || '#ff9900' });
    const offlineSatMat = new THREE.MeshBasicMaterial({ color: settings.offlineSatColor || '#ff3b30' });
    const satGeo = new THREE.SphereGeometry(0.22 * settings.satSize, 16, 16);

    // High latency satellites set
    const highLatencySatSet = new Set<string>();
    (scenario.routes_sample || []).forEach(r => {
      if (r.latency_ms > 35.0 || r.path.length >= 4) {
        r.path.forEach(sid => {
          if (sid.startsWith('S')) highLatencySatSet.add(sid);
        });
      }
    });

    // Build Plane Base RAAN and Phase map from scenario if available
    const planeBaseMap: Record<number, { raanDeg: number; phaseDeg: number }> = {};
    if (scenario.raw_scenario?.design?.planes) {
      scenario.raw_scenario.design.planes.forEach((p: any) => {
        const pNum = parseInt(String(p.id).replace('P', '')) || 1;
        planeBaseMap[pNum] = {
          raanDeg: p.raan_deg ?? 0,
          phaseDeg: p.phase_deg ?? 0
        };
      });
    }

    const satByIdMap = new Map<string, Satellite>();
    (scenario.satellites || []).forEach(s => satByIdMap.set(s.id, s));

    const isSatHidden = (satId: string) => {
      const sat = satByIdMap.get(satId);
      if (!sat) return false;
      return !!(settings.hiddenPlanes?.[sat.plane] || settings.hiddenSatellites?.[satId]);
    };

    const isGwHidden = (gwId: string) => {
      return settings.showGateways === false || !!settings.hiddenGateways?.[gwId];
    };

    const onlineSatPosList: THREE.Vector3[] = [];

    // Find max plane num to distribute default RAAN evenly if missing
    let maxPlaneNum = 1;
    (scenario.satellites || []).forEach(sat => {
      const pNum = typeof sat.plane === 'number'
        ? sat.plane
        : parseInt(String((sat as any).plane_id || sat.plane || '1').replace('P', '')) || 1;
      if (pNum > maxPlaneNum) maxPlaneNum = pNum;
    });

    (scenario.satellites || []).forEach(sat => {
      const planeNum = typeof sat.plane === 'number'
        ? sat.plane
        : parseInt(String((sat as any).plane_id || sat.plane || '1').replace('P', '')) || 1;

      const isVisible = !isSatHidden(sat.id);
      const isOffline = offlineSet.has(sat.id);
      const isHighLatency = !isOffline && highLatencySatSet.has(sat.id);

      const altKm = sat.altitude || 550.0;
      const orbRadiusKm = 6371.0 + altKm;
      const rThree = earthRadius + (altKm / 1000.0) * 1.2;

      let baseRaanDeg: number;
      if (planeBaseMap[planeNum]?.raanDeg !== undefined) {
        baseRaanDeg = planeBaseMap[planeNum].raanDeg;
      } else if (typeof sat.raan === 'number' && sat.raan > 0) {
        baseRaanDeg = sat.raan;
      } else {
        baseRaanDeg = (planeNum - 1) * (360.0 / Math.max(1, maxPlaneNum));
      }

      let basePhaseDeg: number;
      if (planeBaseMap[planeNum]?.phaseDeg !== undefined) {
        basePhaseDeg = planeBaseMap[planeNum].phaseDeg;
      } else if (typeof (sat as any).phase === 'number') {
        basePhaseDeg = (sat as any).phase;
      } else {
        basePhaseDeg = (planeNum - 1) * 15.0;
      }

      let slotDeg = 0;
      if (typeof (sat as any).slot_deg === 'number') {
        slotDeg = (sat as any).slot_deg;
      } else if (typeof (sat as any).slot === 'number') {
        slotDeg = (sat as any).slot;
      } else if (typeof sat.true_anomaly === 'number' && sat.true_anomaly !== 0) {
        slotDeg = sat.true_anomaly;
      } else if (typeof sat.idx === 'number') {
        slotDeg = sat.idx >= 15 ? sat.idx : sat.idx * 45;
      }

      const raanOffsetDeg = (settings?.planeRaanMap && settings.planeRaanMap[planeNum]) ?? 0;
      const phaseOffsetDeg = (settings?.planePhaseMap && settings.planePhaseMap[planeNum]) ?? 0;

      const totalRaanRad = ((baseRaanDeg + raanOffsetDeg) % 360) * (Math.PI / 180);
      const totalPhaseRad = ((basePhaseDeg + phaseOffsetDeg) % 360) * (Math.PI / 180);

      const n = Math.sqrt(MU / Math.pow(orbRadiusKm, 3));
      const slotRad = slotDeg * (Math.PI / 180);
      const u = slotRad + totalPhaseRad + n * currentTime;
      const inc = (sat.inc || 87.0) * (Math.PI / 180);

      // Pure ECI 3D Cartesian coordinates (Three.js frame: Y is North Pole, X-Z is Equatorial Plane)
      const xEci = rThree * (Math.cos(totalRaanRad) * Math.cos(u) - Math.sin(totalRaanRad) * Math.sin(u) * Math.cos(inc));
      const zEci = rThree * (Math.sin(totalRaanRad) * Math.cos(u) + Math.cos(totalRaanRad) * Math.sin(u) * Math.cos(inc));
      const yEci = rThree * (Math.sin(u) * Math.sin(inc));

      const xKm = orbRadiusKm * (Math.cos(totalRaanRad) * Math.cos(u) - Math.sin(totalRaanRad) * Math.sin(u) * Math.cos(inc));
      const zKm = orbRadiusKm * (Math.sin(totalRaanRad) * Math.cos(u) + Math.cos(totalRaanRad) * Math.sin(u) * Math.cos(inc));
      const yKm = orbRadiusKm * (Math.sin(u) * Math.sin(inc));

      const pos = new THREE.Vector3(xEci, yEci, zEci);
      const posKm = new THREE.Vector3(xKm, yKm, zKm);
      satPosMap[sat.id] = pos;
      satPosMapRef.current[sat.id] = pos;

      if (!isOffline && isVisible) {
        onlineSatPosList.push(pos);
      }

      const dynTelemetry = getDynamicSatelliteTelemetry(sat, currentTime);

      if (!planeMap[planeNum]) planeMap[planeNum] = [];
      planeMap[planeNum].push({ sat, pos, posKm, isOffline, isHighLatency, uAngle: u });

      if (settings.showSatellites && isVisible) {
        const modelsTemplate = getCachedSatelliteModels();
        const status: SatelliteStatus = isOffline ? 'offline' : isHighLatency ? 'highLatency' : 'active';
        const isFocused = sat.id === focusedSatelliteId;

        const { satGroup, hitMesh, modelMeshes } = buildSatellite3DObject(
          modelsTemplate,
          status,
          settings,
          settings.satSize,
          isFocused
        );

        satGroup.position.copy(pos);

        // Orient satellite body towards Earth (nadir) with solar panels tangential
        if (Math.abs(pos.y / (pos.length() || 1)) > 0.95) {
          satGroup.up.set(1, 0, 0);
        } else {
          satGroup.up.set(0, 1, 0);
        }
        satGroup.lookAt(0, 0, 0);

        satGroup.userData = { satellite: sat, targetPos: pos.clone(), satId: sat.id };
        satellites.add(satGroup);

        // Register both hitMesh and model meshes for click selection
        satMeshMapRef.current.set(hitMesh, sat);
        modelMeshes.forEach(mesh => {
          satMeshMapRef.current.set(mesh, sat);
        });

        // Initialize LOD state immediately
        if (cameraRef.current) {
          updateSatelliteLOD(satGroup, cameraRef.current, isFocused);
        }

        if (settings.satGlow) {
          const isCritical = criticalSatellites.includes(sat.id);
          const hexStr = isCritical ? '#ff0000' : isOffline ? '#888888' : isHighLatency ? settings.highLatencySatColor : settings.satColor;
          
          // Make offline satellites blink
          let opacity = isFocused ? 0.4 : 0.85;
          if (isOffline) {
              opacity = (Math.sin(currentTime * 0.5) * 0.5 + 0.5) * 0.8;
          }
          if (isCritical) {
              opacity = 1.0;
          }
          
          const glowMat = new THREE.SpriteMaterial({
            map: createGlowTextureFromHex(hexStr || '#ffffff'),
            color: 0xffffff,
            transparent: true,
            opacity: opacity,
            blending: THREE.AdditiveBlending
          });
          const glowSprite = new THREE.Sprite(glowMat);
          const scaleFactor = isCritical ? 2.5 : 1.1;
          glowSprite.scale.set(scaleFactor * settings.satSize, scaleFactor * settings.satSize, 1);
          glowSprite.position.copy(pos);
          satellites.add(glowSprite);
        }
      }

      if (settings.showLabels && isVisible) {
        const isFocused = sat.id === focusedSatelliteId;
        const labelText = sat.id;
        const labelColor = isOffline ? settings.offlineSatColor : isFocused ? '#ffffff' : isHighLatency ? settings.highLatencySatColor : settings.satColor;
        const labelSprite = createTextLabelSprite(labelText, '#ffffff', labelColor || '#ffffff');
        const satNormal = pos.clone().normalize();
        labelSprite.position.copy(pos).addScaledVector(satNormal, 0.38 * settings.satSize);
        labels.add(labelSprite);
      }

      // Render 3D Translucent Field of View Cone when satellite is focused/selected
      if (focusedSatelliteId === sat.id && isVisible) {
        const coneHeight = rThree - earthRadius;
        const coneRadius = coneHeight * Math.tan((35 * Math.PI) / 180); // 10 deg min elevation FOV beam

        const coneGeo = new THREE.ConeGeometry(coneRadius, coneHeight, 32, 1, true);
        const coneMat = new THREE.MeshBasicMaterial({
          color: isOffline ? settings.offlineSatColor : (settings.fovConeColor || settings.satColor),
          transparent: true,
          opacity: 0.18,
          side: THREE.DoubleSide,
          depthWrite: false
        });

        const coneMesh = new THREE.Mesh(coneGeo, coneMat);
        
        const centerDir = new THREE.Vector3(0, 0, 0).sub(pos).normalize();
        const midPoint = pos.clone().add(centerDir.clone().multiplyScalar(coneHeight / 2));
        
        coneMesh.position.copy(midPoint);
        coneMesh.lookAt(0, 0, 0);
        coneMesh.rotateX(Math.PI / 2);

        fovCones.add(coneMesh);

        // Illuminating accent light on focused satellite so 3D model pops out
        const satHighlightLight = new THREE.PointLight(0xffffff, 3.0, 10);
        satHighlightLight.position.copy(pos);
        fovCones.add(satHighlightLight);

        // Coverage circle footprint on Earth surface
        const footGeo = new THREE.RingGeometry(coneRadius * 0.96, coneRadius, 48);
        const footMat = new THREE.MeshBasicMaterial({
          color: isOffline ? settings.offlineSatColor : (settings.fovConeColor || settings.satColor),
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.8
        });
        const footMesh = new THREE.Mesh(footGeo, footMat);
        const surfPos = pos.clone().normalize().multiplyScalar(earthRadius * 1.002);
        footMesh.position.copy(surfPos);
        footMesh.lookAt(0, 0, 0);
        fovCones.add(footMesh);
      }

      // Render 3D Surface Coverage Zones when showCoverageHeatmap is toggled ON
      if (settings.showCoverageHeatmap && isVisible) {
        const coneHeight = rThree - earthRadius;
        const coneRadius = coneHeight * Math.tan((35 * Math.PI) / 180);
        
        // Translucent surface coverage zone disc
        const footGeo = new THREE.CircleGeometry(coneRadius, 32);
        const footMat = new THREE.MeshBasicMaterial({
          color: isOffline ? settings.offlineSatColor : (settings.fovConeColor || '#00ff88'),
          side: THREE.DoubleSide,
          transparent: true,
          opacity: isOffline ? 0.15 : 0.22,
          depthWrite: false
        });
        const footMesh = new THREE.Mesh(footGeo, footMat);
        const surfPos = pos.clone().normalize().multiplyScalar(earthRadius * 1.002);
        footMesh.position.copy(surfPos);
        footMesh.lookAt(0, 0, 0);
        fovCones.add(footMesh);

        // Ring border outline for the zone
        const borderGeo = new THREE.RingGeometry(coneRadius * 0.97, coneRadius, 32);
        const borderMat = new THREE.MeshBasicMaterial({
          color: isOffline ? settings.offlineSatColor : (settings.fovConeColor || '#00ff88'),
          side: THREE.DoubleSide,
          transparent: true,
          opacity: isOffline ? 0.35 : 0.65
        });
        const borderMesh = new THREE.Mesh(borderGeo, borderMat);
        borderMesh.position.copy(surfPos.clone().multiplyScalar(1.0005));
        borderMesh.lookAt(0, 0, 0);
        fovCones.add(borderMesh);
      }
    });

    // 3D Smooth Orbit Rings
    if (settings.showOrbits) {
      Object.keys(planeMap).forEach(pStr => {
        const pNum = parseInt(pStr);
        if (settings.hiddenPlanes?.[pNum]) return; // Skip hidden orbital plane

        const sampleSat = planeMap[pNum][0]?.sat;
        if (!sampleSat) return;

        const altKm = sampleSat.altitude || 550.0;
        const rThree = earthRadius + (altKm / 1000.0) * 1.2;
        const baseRaanDeg = planeBaseMap[pNum]?.raanDeg ?? sampleSat.raan ?? ((pNum - 1) * 60);
        const raanOffsetDeg = (settings?.planeRaanMap && settings.planeRaanMap[pNum]) ?? 0;
        const totalRaanRad = ((baseRaanDeg + raanOffsetDeg) % 360) * (Math.PI / 180);
        const inc = (sampleSat.inc || 87.0) * (Math.PI / 180);

        const ringPoints: THREE.Vector3[] = [];
        const STEPS = 128;
        for (let i = 0; i <= STEPS; i++) {
          const u = (i / STEPS) * Math.PI * 2;
          const xEci = rThree * (Math.cos(totalRaanRad) * Math.cos(u) - Math.sin(totalRaanRad) * Math.sin(u) * Math.cos(inc));
          const zEci = rThree * (Math.sin(totalRaanRad) * Math.cos(u) + Math.cos(totalRaanRad) * Math.sin(u) * Math.cos(inc));
          const yEci = rThree * (Math.sin(u) * Math.sin(inc));

          ringPoints.push(new THREE.Vector3(xEci, yEci, zEci));
        }

        const orbitGeo = new THREE.BufferGeometry().setFromPoints(ringPoints);
        const orbitMat = new THREE.LineBasicMaterial({
          color: settings.orbitColor || '#475569',
          transparent: true,
          opacity: settings.orbitOpacity
        });
        const orbitLine = new THREE.LineLoop(orbitGeo, orbitMat);
        orbits.add(orbitLine);
      });
    }

    // Sort plane items along orbital ring angle for clean ISL connection
    Object.keys(planeMap).forEach(pStr => {
      planeMap[parseInt(pStr)].sort((a, b) => a.uAngle - b.uAngle);
    });

    // Ground Objects (Gateways & Clients: C65, Pechora, Murmansk...)
    const gwPosMap: Record<string, THREE.Vector3> = {};
    const greenGroundMat = new THREE.MeshBasicMaterial({ color: settings.gatewayColor || '#00d084' });

    // WGS84 Ellipsoid constants (scaled to Three.js reference radius 6.371)
    const aWgs = 6.371; // Equatorial semi-major axis
    const bWgs = 6.371 * (6356.752 / 6378.137); // Polar semi-minor axis
    const e2Wgs = 1.0 - (bWgs * bWgs) / (aWgs * aWgs); // First eccentricity squared

    (scenario.gateways || []).forEach(gw => {
      const latRad = (gw.lat * Math.PI) / 180;
      const lonRad = (gw.lon * Math.PI) / 180;
      const N = aWgs / Math.sqrt(1.0 - e2Wgs * Math.sin(latRad) * Math.sin(latRad));

      const xG = N * Math.cos(latRad) * Math.cos(lonRad);
      const zG = N * Math.cos(latRad) * Math.sin(lonRad);
      const yG = N * (1.0 - e2Wgs) * Math.sin(latRad);

      const pos = new THREE.Vector3(xG, yG, zG);
      gwPosMap[gw.id] = pos;

      const isGwVisible = !isGwHidden(gw.id);

      if (settings.showGateways && isGwVisible) {
        const dishTemplate = getCachedDishModel();
        const dishObj = buildDish3DObject(dishTemplate, settings.gatewayColor || '#00d084', settings.satSize);
        dishObj.position.copy(pos);
        // Align dish to point radially outward from Earth center into space
        const normal = pos.clone().normalize();
        dishObj.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), normal);
        gateways.add(dishObj);

        // Ground Gateway Signal Reach Dome (20% translucent dome)
        if (settings.showGatewayCoverage !== false) {
          const scenarioAltKm = scenario.raw_scenario?.environment?.altitude_km ?? 550.0;
          const satHeight = (scenarioAltKm / 1000.0) * 1.2;
          const domeRadius = Math.max(1.2, satHeight * 1.85);

          // 1. Translucent Hemisphere Dome (20% opacity)
          const domeGeo = new THREE.SphereGeometry(
            domeRadius,
            32,
            16,
            0,
            Math.PI * 2,
            0,
            Math.PI / 2
          );

          const domeMat = new THREE.MeshBasicMaterial({
            color: settings.gatewayColor || '#00d084',
            transparent: true,
            opacity: 0.20,
            side: THREE.DoubleSide,
            depthWrite: false
          });

          const domeMesh = new THREE.Mesh(domeGeo, domeMat);
          domeMesh.position.copy(pos);
          const normal = pos.clone().normalize();
          domeMesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), normal);

          // 2. Base perimeter ring along ground tangent
          const baseRingPts: THREE.Vector3[] = [];
          const ringSegments = 48;
          for (let i = 0; i <= ringSegments; i++) {
            const ang = (i / ringSegments) * Math.PI * 2;
            baseRingPts.push(new THREE.Vector3(Math.cos(ang) * domeRadius, 0, Math.sin(ang) * domeRadius));
          }
          const baseRingGeo = new THREE.BufferGeometry().setFromPoints(baseRingPts);
          const baseRingMat = new THREE.LineBasicMaterial({
            color: settings.gatewayColor || '#00d084',
            transparent: true,
            opacity: 0.45,
            depthWrite: false
          });
          const baseRing = new THREE.LineLoop(baseRingGeo, baseRingMat);
          domeMesh.add(baseRing);

          // 3. Elevation reference ring (45 degrees elevation)
          const midElevPts: THREE.Vector3[] = [];
          const rMid = domeRadius * Math.cos(Math.PI / 4);
          const yMid = domeRadius * Math.sin(Math.PI / 4);
          for (let i = 0; i <= ringSegments; i++) {
            const ang = (i / ringSegments) * Math.PI * 2;
            midElevPts.push(new THREE.Vector3(Math.cos(ang) * rMid, yMid, Math.sin(ang) * rMid));
          }
          const midRingGeo = new THREE.BufferGeometry().setFromPoints(midElevPts);
          const midRingMat = new THREE.LineBasicMaterial({
            color: settings.gatewayColor || '#00d084',
            transparent: true,
            opacity: 0.25,
            depthWrite: false
          });
          const midRing = new THREE.LineLoop(midRingGeo, midRingMat);
          domeMesh.add(midRing);

          // 4. Cross-Meridian Arches for radar dome structure
          const archMat = new THREE.LineBasicMaterial({
            color: settings.gatewayColor || '#00d084',
            transparent: true,
            opacity: 0.28,
            depthWrite: false
          });
          const arch1Pts: THREE.Vector3[] = [];
          const arch2Pts: THREE.Vector3[] = [];
          for (let i = 0; i <= 32; i++) {
            const ang = (i / 32) * Math.PI;
            arch1Pts.push(new THREE.Vector3(Math.cos(ang) * domeRadius, Math.sin(ang) * domeRadius, 0));
            arch2Pts.push(new THREE.Vector3(0, Math.sin(ang) * domeRadius, Math.cos(ang) * domeRadius));
          }
          domeMesh.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(arch1Pts), archMat));
          domeMesh.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(arch2Pts), archMat));

          gatewayDomes.add(domeMesh);
        }
      }

      if (settings.showLabels && settings.showGateways && isGwVisible) {
        const labelSprite = createTextLabelSprite(gw.id, '#ffffff', settings.gatewayColor || '#00d084');
        const gwNormal = pos.clone().normalize();
        labelSprite.position.copy(pos).addScaledVector(gwNormal, 0.35);
        labels.add(labelSprite);
      }
    });

    // Dynamic ISL Lines (Intra-plane and Inter-plane with Spherical Earth Arcs)
    if (settings.showISL) {
      const planeKeys = Object.keys(planeMap).map(Number).sort((a, b) => a - b);
      
      // 1. Intra-plane ISLs (Along orbital ring)
      planeKeys.forEach(p => {
        if (settings.hiddenPlanes?.[p]) return; // Skip hidden plane

        const items = planeMap[p];
        for (let i = 0; i < items.length; i++) {
          const itemA = items[i];
          const itemB = items[(i + 1) % items.length];

          if (isSatHidden(itemA.sat.id) || isSatHidden(itemB.sat.id)) {
            continue; // Skip ISL connection to/from hidden satellites
          }

          const isBroken = itemA.isOffline || itemB.isOffline;
          const isHighLatencyHop = itemA.isHighLatency || itemB.isHighLatency;

          const isTrafficMode = !!settings.showTrafficLoad;
          const simLoadPct = Math.min(99, Math.max(12, Math.round(35 + Math.sin(currentTime * 0.08 + p * 1.5) * 40 + (isHighLatencyHop ? 35 : 0))));
          const trafficColor = isBroken ? settings.offlineSatColor : isTrafficMode ? (simLoadPct > 80 ? '#ef4444' : simLoadPct > 55 ? '#f59e0b' : '#38bdf8') : isHighLatencyHop ? settings.highLatencySatColor : (settings.islColor || '#00ff88');

          const arcPts = createCurvedArcPoints(itemA.pos, itemB.pos, 16);
          const lineGeo = new THREE.BufferGeometry().setFromPoints(arcPts);
          const lineMat = new THREE.LineBasicMaterial({
            color: trafficColor,
            transparent: true,
            opacity: isBroken ? 0.25 : isTrafficMode ? 0.9 : isHighLatencyHop ? 0.85 : 0.65
          });
          const line = new THREE.Line(lineGeo, lineMat);
          islLines.add(line);

          if (settings.showDistances === true) {
            const distKm = Math.round(itemA.posKm.distanceTo(itemB.posKm));
            if (distKm > 0) {
              const midPos = getArcMidPoint(itemA.pos, itemB.pos, 0.15);
              const isFocused = itemA.sat.id === focusedSatelliteId || itemB.sat.id === focusedSatelliteId;
              const labelStr = isTrafficMode ? `${distKm} км | ${simLoadPct}%` : `${distKm} км`;
              const distSprite = createDistanceLabelSprite(labelStr, isFocused || simLoadPct > 80);
              distSprite.position.copy(midPos);
              labels.add(distSprite);
            }
          }
        }
      });

      // 2. Inter-plane ISLs (Between adjacent planes)
      const scenarioIslRangeKm = scenario.raw_scenario?.environment?.isl_range_km ?? 3000.0;

      for (let i = 0; i < planeKeys.length; i++) {
        const pCurrent = planeKeys[i];
        const pNext = planeKeys[(i + 1) % planeKeys.length];

        if (settings.hiddenPlanes?.[pCurrent] || settings.hiddenPlanes?.[pNext]) {
          continue; // Skip inter-plane links if either plane is hidden
        }

        const currentItems = planeMap[pCurrent];
        const nextItems = planeMap[pNext];

        currentItems.forEach(itemA => {
          if (isSatHidden(itemA.sat.id)) return;

          let closestDist = Infinity;
          let closestPos: THREE.Vector3 | null = null;
          let closestPosKm: THREE.Vector3 | null = null;
          let targetOffline = false;
          let targetHighLatency = false;

          nextItems.forEach(itemB => {
            if (isSatHidden(itemB.sat.id)) return;

            const distKm = itemA.posKm.distanceTo(itemB.posKm);
            if (distKm <= scenarioIslRangeKm && !isLineOccludedByEarthKm(itemA.posKm, itemB.posKm)) {
              if (distKm < closestDist) {
                closestDist = distKm;
                closestPos = itemB.pos;
                closestPosKm = itemB.posKm;
                targetOffline = itemB.isOffline;
                targetHighLatency = itemB.isHighLatency;
              }
            }
          });

          if (closestPos && closestPosKm) {
            const isBroken = itemA.isOffline || targetOffline;
            const isHighLatencyHop = itemA.isHighLatency || targetHighLatency;
            const isTrafficMode = !!settings.showTrafficLoad;
            const simLoadPct = Math.min(99, Math.max(15, Math.round(42 + Math.cos(currentTime * 0.06 + i * 2.1) * 38 + (isHighLatencyHop ? 30 : 0))));
            const trafficColor = isBroken ? settings.offlineSatColor : isTrafficMode ? (simLoadPct > 80 ? '#ef4444' : simLoadPct > 55 ? '#f59e0b' : '#38bdf8') : isHighLatencyHop ? settings.highLatencySatColor : (settings.islColor || '#cbd5e1');

            const arcPts = createCurvedArcPoints(itemA.pos, closestPos, 16);
            const lineGeo = new THREE.BufferGeometry().setFromPoints(arcPts);
            const lineMat = new THREE.LineBasicMaterial({
              color: trafficColor,
              transparent: true,
              opacity: isBroken ? 0.25 : isTrafficMode ? 0.9 : isHighLatencyHop ? 0.75 : 0.5
            });
            const line = new THREE.Line(lineGeo, lineMat);
            islLines.add(line);


          }
        });
      }
    }

    // Ground-to-Sat Link & Active Traffic Route Path Rendering (Straight Rays for Ground-to-Sat, Curved Arcs for ISL)
    if (settings.showSatLinks) {
      const activeRoutes = scenario.routes_sample || [];
      const drawnHops = new Set<string>();
      const scenarioAltKm = scenario.raw_scenario?.environment?.altitude_km ?? 550.0;

      activeRoutes.forEach(route => {
        const path = route.path || [];
        const isRouteBroken = path.some(sid => offlineSet.has(sid));
        const isFocusedRoute = !!(focusedSatelliteId && path.includes(focusedSatelliteId));

        if (path.length >= 2) {
          for (let i = 0; i < path.length - 1; i++) {
            const nodeA = path[i];
            const nodeB = path[i + 1];

            // If either endpoint is hidden, skip drawing this link hop
            if (isGwHidden(nodeA) || isGwHidden(nodeB) || isSatHidden(nodeA) || isSatHidden(nodeB)) {
              continue;
            }

            const hopKey = [nodeA, nodeB].sort().join('--');
            drawnHops.add(hopKey);

            const posA = gwPosMap[nodeA] || satPosMap[nodeA];
            const posB = gwPosMap[nodeB] || satPosMap[nodeB];
            const isGroundLink = !!(gwPosMap[nodeA] || gwPosMap[nodeB]);

            if (posA && posB) {
              if (isGroundLink) {
                const gwPos = gwPosMap[nodeA] || gwPosMap[nodeB];
                const satPos = gwPosMap[nodeA] ? posB : posA;
                if (!isSatVisibleFromGround(gwPos, satPos, 0.0)) {
                  continue; // Skip rendering ground link cutting through solid Earth
                }
              }

              const linePoints = isGroundLink ? [posA, posB] : createCurvedArcPoints(posA, posB, 20);
              const lineGeo = new THREE.BufferGeometry().setFromPoints(linePoints);

              const lineColor = isRouteBroken
                ? settings.offlineSatColor
                : isFocusedRoute
                ? '#00ff88'
                : isGroundLink
                ? (settings.groundLinkColor || '#94a3b8')
                : (settings.islColor || '#cbd5e1');

              const lineMat = new THREE.LineBasicMaterial({
                color: lineColor,
                transparent: true,
                opacity: isFocusedRoute ? 1.0 : isRouteBroken ? 0.9 : isGroundLink ? 0.95 : 0.85
              });
              const line = new THREE.Line(lineGeo, lineMat);
              satLinks.add(line);

              if (isGroundLink && settings.showDistances === true) {
                const gwPos = gwPosMap[nodeA] || gwPosMap[nodeB];
                const satPos = gwPosMap[nodeA] ? posB : posA;
                const distKm = calculateGroundToSatDistance(gwPos, satPos, scenarioAltKm);
                if (distKm > 0) {
                  const midPos = new THREE.Vector3().addVectors(posA, posB).multiplyScalar(0.51);
                  const distSprite = createDistanceLabelSprite(`${distKm} км`, true);
                  distSprite.position.copy(midPos);
                  labels.add(distSprite);
                }
              }

              if (isGroundLink || isFocusedRoute) {
                // Spawn Cisco Packet Tracer animated packets along link
                const pktColor = isRouteBroken
                  ? settings.offlineSatColor
                  : isFocusedRoute
                  ? '#00ff88'
                  : (settings.groundLinkColor || '#94a3b8');

                const numPkts = isFocusedRoute ? 4 : 2;
                for (let k = 0; k < numPkts; k++) {
                  const pktUp = createCiscoPacketSprite(pktColor);
                  (pktUp as any).userData = {
                    startPos: posA.clone(),
                    endPos: posB.clone(),
                    speed: isFocusedRoute ? 1.2 : 0.65,
                    phase: k / numPkts
                  };
                  packets.add(pktUp);

                  const pktDown = createCiscoPacketSprite(isFocusedRoute ? '#ffffff' : '#38bdf8');
                  (pktDown as any).userData = {
                    startPos: posB.clone(),
                    endPos: posA.clone(),
                    speed: isFocusedRoute ? 1.3 : 0.75,
                    phase: (k + 0.5) / numPkts
                  };
                  packets.add(pktDown);
                }
              }
            }
          }
        }
      });

      // 2. Default straight ray beam connections from ground sites to OVERHEAD satellites (above horizon)
      const minElevDeg = scenario.raw_scenario?.environment?.min_elevation_deg ?? 10.0;

      Object.keys(gwPosMap).forEach(gwId => {
        if (isGwHidden(gwId)) return;
        const gwPos = gwPosMap[gwId];

        const sortedSats = (scenario.satellites || [])
          .filter(s => !isSatHidden(s.id))
          .map(s => {
            const satPos = satPosMap[s.id];
            if (!satPos) return null;
            if (!isSatVisibleFromGround(gwPos, satPos, minElevDeg)) return null;
            return { pos: satPos, dist: gwPos.distanceTo(satPos) };
          })
          .filter((item): item is { pos: THREE.Vector3; dist: number } => item !== null)
          .sort((a, b) => a.dist - b.dist);

        sortedSats.slice(0, 2).forEach(item => {
          const lineGeo = new THREE.BufferGeometry().setFromPoints([gwPos, item.pos]);
          const lineMat = new THREE.LineBasicMaterial({
            color: settings.groundLinkColor || '#f59e0b',
            transparent: true,
            opacity: 0.6
          });
          const line = new THREE.Line(lineGeo, lineMat);
          satLinks.add(line);

          if (settings.showDistances === true) {
            const distKm = calculateGroundToSatDistance(gwPos, item.pos, scenarioAltKm);
            if (distKm > 0) {
              const midPos = new THREE.Vector3().addVectors(gwPos, item.pos).multiplyScalar(0.51);
              const distSprite = createDistanceLabelSprite(`${distKm} км`, true);
              distSprite.position.copy(midPos);
              labels.add(distSprite);
            }
          }

          // Add Cisco Packet Tracer animated packets flying to/from ground station
          const pktColor = settings.groundLinkColor || '#f59e0b';
          for (let k = 0; k < 2; k++) {
            const pktUp = createCiscoPacketSprite(pktColor);
            (pktUp as any).userData = {
              startPos: gwPos.clone(),
              endPos: item.pos.clone(),
              speed: 0.7,
              phase: k * 0.5
            };
            packets.add(pktUp);

            const pktDown = createCiscoPacketSprite('#34d399');
            (pktDown as any).userData = {
              startPos: item.pos.clone(),
              endPos: gwPos.clone(),
              speed: 0.8,
              phase: (k + 0.5) * 0.5
            };
            packets.add(pktDown);
          }
        });
      });
    }

  }, [scenario, settings, currentTime, outages, focusedSatelliteId, modelsLoaded, dishLoaded]);

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1
      }}
    />
  );
};

function createTextLabelSprite(text: string, _textColor: string, bgColor: string): THREE.Sprite {
  const canvas = document.createElement('canvas');
  // High-resolution canvas for crisp Retina rendering
  canvas.width = 384;
  canvas.height = 96;
  const ctx = canvas.getContext('2d')!;

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';

  // Medium (500) weight: clean, modern, and not excessively bold
  ctx.font = '500 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // Crisp dark outline for high contrast against Earth oceans, continents, and space
  ctx.strokeStyle = 'rgba(5, 10, 20, 0.88)';
  ctx.lineWidth = 4.5;
  ctx.lineJoin = 'round';
  ctx.strokeText(text, 192, 48);

  ctx.fillStyle = bgColor;
  ctx.fillText(text, 192, 48);

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = true;

  const spriteMaterial = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthTest: true,
    depthWrite: false
  });

  const sprite = new THREE.Sprite(spriteMaterial);
  sprite.scale.set(1.28, 0.32, 1);
  return sprite;
}

function createDistanceLabelSprite(text: string, isHighlight: boolean = false): THREE.Sprite {
  const canvas = document.createElement('canvas');
  // High-resolution canvas (2x)
  canvas.width = 260;
  canvas.height = 72;
  const ctx = canvas.getContext('2d')!;

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';

  ctx.fillStyle = isHighlight ? 'rgba(0, 240, 255, 0.95)' : 'rgba(15, 23, 38, 0.88)';
  ctx.beginPath();
  if (typeof ctx.roundRect === 'function') {
    ctx.roundRect(8, 8, 244, 56, 12);
  } else {
    ctx.rect(8, 8, 244, 56);
  }
  ctx.fill();

  ctx.strokeStyle = isHighlight ? '#ffffff' : '#475569';
  ctx.lineWidth = 2.5;
  ctx.stroke();

  ctx.fillStyle = isHighlight ? '#000000' : '#ffffff';
  ctx.font = '500 20px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 130, 36);

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = true;

  const spriteMaterial = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthTest: true,
    depthWrite: false
  });

  const sprite = new THREE.Sprite(spriteMaterial);
  sprite.scale.set(0.85, 0.235, 1);
  return sprite;
}

function calculateGroundToSatDistance(posG: THREE.Vector3, posS: THREE.Vector3, altKm: number = 550.0): number {
  const rEarth = 6371.0;
  const rSat = 6371.0 + altKm;
  const cosTheta = Math.max(-1.0, Math.min(1.0, posG.clone().normalize().dot(posS.clone().normalize())));
  const distSq = rSat * rSat + rEarth * rEarth - 2.0 * rSat * rEarth * cosTheta;
  return Math.round(Math.sqrt(Math.max(0, distSq)));
}

function createGlowTextureFromHex(hexColor: string): THREE.Texture {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d')!;

  const c = new THREE.Color(hexColor);
  const r = Math.round(c.r * 255);
  const g = Math.round(c.g * 255);
  const b = Math.round(c.b * 255);

  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 1.0)`);
  gradient.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, 0.5)`);
  gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);

  return new THREE.CanvasTexture(canvas);
}

function createCurvedArcPoints(posA: THREE.Vector3, posB: THREE.Vector3, numPoints = 16): THREE.Vector3[] {
  const dirA = posA.clone().normalize();
  const dirB = posB.clone().normalize();
  const lenA = posA.length();
  const lenB = posB.length();
  const angle = dirA.angleTo(dirB);

  if (angle < 0.001) {
    return [posA, posB];
  }

  const sinAngle = Math.sin(angle);
  const points: THREE.Vector3[] = [];

  for (let i = 0; i <= numPoints; i++) {
    const t = i / numPoints;
    const wA = Math.sin((1 - t) * angle) / sinAngle;
    const wB = Math.sin(t * angle) / sinAngle;

    const interpDir = new THREE.Vector3()
      .addScaledVector(dirA, wA)
      .addScaledVector(dirB, wB)
      .normalize();

    const baseLen = lenA * (1 - t) + lenB * t;
    const bulge = Math.sin(t * Math.PI) * (angle * 0.3);
    const pointLen = baseLen + bulge;

    points.push(interpDir.multiplyScalar(pointLen));
  }

  return points;
}

function getArcMidPoint(posA: THREE.Vector3, posB: THREE.Vector3, elevationOffset = 0.15): THREE.Vector3 {
  const dirA = posA.clone().normalize();
  const dirB = posB.clone().normalize();
  const angle = dirA.angleTo(dirB);

  if (angle < 0.001) {
    return new THREE.Vector3().addVectors(posA, posB).multiplyScalar(0.5);
  }

  const sinAngle = Math.sin(angle);
  const w = Math.sin(0.5 * angle) / sinAngle;
  const interpDir = new THREE.Vector3()
    .addScaledVector(dirA, w)
    .addScaledVector(dirB, w)
    .normalize();

  const lenA = posA.length();
  const lenB = posB.length();
  const baseLen = (lenA + lenB) * 0.5;
  const bulge = Math.sin(0.5 * Math.PI) * (angle * 0.3);
  const pointLen = baseLen + bulge + elevationOffset;

  return interpDir.multiplyScalar(pointLen);
}

function isLineOccludedByEarthKm(posAKm: THREE.Vector3, posBKm: THREE.Vector3, rEarthKm = 6371.0): boolean {
  const delta = new THREE.Vector3().subVectors(posBKm, posAKm);
  const lenSq = delta.lengthSq();
  if (lenSq < 1e-6) return false;
  const lam = THREE.MathUtils.clamp(-posAKm.dot(delta) / lenSq, 0, 1);
  const closest = new THREE.Vector3().copy(posAKm).addScaledVector(delta, lam);
  return closest.length() <= rEarthKm;
}

function isSatVisibleFromGround(gwPos: THREE.Vector3, satPos: THREE.Vector3, minElevationDeg: number = 0.0): boolean {
  const gwNormal = gwPos.clone().normalize();
  const dirToSat = satPos.clone().sub(gwPos);
  const dist = dirToSat.length();
  if (dist < 0.001) return false;

  dirToSat.divideScalar(dist);
  const sinElevation = dirToSat.dot(gwNormal);
  const minSinElevation = Math.sin((minElevationDeg * Math.PI) / 180);

  return sinElevation >= minSinElevation;
}

function createEarth2026FallbackCanvas(): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d')!;

  // Daytime Ocean Blue Gradient
  const oceanGrad = ctx.createLinearGradient(0, 0, 0, 1024);
  oceanGrad.addColorStop(0, '#103056');
  oceanGrad.addColorStop(0.5, '#19497c');
  oceanGrad.addColorStop(1, '#103056');
  ctx.fillStyle = oceanGrad;
  ctx.fillRect(0, 0, 2048, 1024);

  const toXY = (lat: number, lon: number): [number, number] => {
    const x = ((lon + 180) / 360) * 2048;
    const y = ((90 - lat) / 180) * 1024;
    return [x, y];
  };

  const drawPolygon = (pts: Array<[number, number]>, fillColor = '#2a542a', strokeColor = '#3e753e') => {
    if (pts.length < 3) return;
    ctx.beginPath();
    const [startX, startY] = toXY(pts[0][0], pts[0][1]);
    ctx.moveTo(startX, startY);
    for (let i = 1; i < pts.length; i++) {
      const [x, y] = toXY(pts[i][0], pts[i][1]);
      ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 1.5;
    ctx.stroke();
  };

  // Eurasia (Europe + Russia + Asia)
  drawPolygon([
    [70, 10], [72, 40], [70, 70], [75, 100], [70, 140], [65, 170], [60, 175],
    [50, 140], [40, 120], [35, 100], [25, 120], [10, 105], [10, 75], [25, 60],
    [30, 50], [35, 35], [40, 30], [36, 5], [38, -9], [44, -9], [55, 10],
    [60, 5], [62, 20], [70, 10]
  ], '#2a542a', '#3e753e');

  // North America
  drawPolygon([
    [70, -170], [75, -120], [70, -80], [60, -60], [45, -65], [30, -80],
    [25, -90], [15, -90], [15, -105], [30, -115], [40, -125], [60, -165], [70, -170]
  ], '#2a542a', '#3e753e');

  // South America
  drawPolygon([
    [10, -75], [0, -50], [-10, -38], [-25, -45], [-45, -65], [-55, -70], [-35, -75], [0, -80], [10, -75]
  ], '#244824', '#386638');

  // Africa
  drawPolygon([
    [35, -5], [37, 10], [32, 32], [10, 50], [-10, 40], [-34, 20], [-34, 18], [-10, 12], [5, 2], [5, -15], [15, -17], [35, -5]
  ], '#544c2a', '#786d3e');

  // Australia
  drawPolygon([
    [-12, 130], [-15, 145], [-35, 150], [-38, 140], [-32, 115], [-20, 115], [-12, 130]
  ], '#54482a', '#78683e');

  // Grid Lines
  ctx.strokeStyle = '#25588c';
  ctx.lineWidth = 1;
  for (let x = 0; x <= 2048; x += 128) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 1024); ctx.stroke();
  }
  for (let y = 0; y <= 1024; y += 64) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(2048, y); ctx.stroke();
  }

  // Major Cities / Gateways Daytime Markers
  const cities: Array<[number, number]> = [
    [55.75, 37.61], [59.93, 30.31], [68.97, 33.08], [65.14, 57.22],
    [51.50, -0.12], [40.71, -74.00], [35.67, 139.65], [39.90, 116.40]
  ];

  cities.forEach(([lat, lon]) => {
    const [cx, cy] = toXY(lat, lon);
    const radGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 8);
    radGlow.addColorStop(0, 'rgba(0, 255, 136, 0.9)');
    radGlow.addColorStop(0.5, 'rgba(20, 115, 230, 0.4)');
    radGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = radGlow;
    ctx.beginPath();
    ctx.arc(cx, cy, 8, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(cx, cy, 2.0, 0, Math.PI * 2);
    ctx.fill();
  });

  return canvas;
}

function createSunFlareTexture(): THREE.Texture {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d')!;

  const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  gradient.addColorStop(0, 'rgba(255, 255, 230, 1.0)');
  gradient.addColorStop(0.2, 'rgba(255, 210, 80, 0.85)');
  gradient.addColorStop(0.5, 'rgba(255, 130, 20, 0.4)');
  gradient.addColorStop(1, 'rgba(255, 100, 0, 0)');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 128, 128);

  return new THREE.CanvasTexture(canvas);
}

function createCiscoPacketSprite(colorHex: string): THREE.Sprite {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d')!;

  ctx.imageSmoothingEnabled = true;

  // Outer glowing aura
  const grad = ctx.createRadialGradient(32, 32, 2, 32, 32, 28);
  grad.addColorStop(0, '#ffffff');
  grad.addColorStop(0.4, colorHex);
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(32, 32, 28, 0, Math.PI * 2);
  ctx.fill();

  // Cisco Packet shape (small glowing data envelope / packet box)
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(18, 20, 28, 24);
  ctx.strokeStyle = colorHex;
  ctx.lineWidth = 3;
  ctx.strokeRect(18, 20, 28, 24);

  // Packet line chevron symbol (Cisco Packet Tracer emblem)
  ctx.strokeStyle = colorHex;
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(22, 27);
  ctx.lineTo(32, 35);
  ctx.lineTo(42, 27);
  ctx.stroke();

  const texture = new THREE.CanvasTexture(canvas);
  const mat = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    opacity: 0.95,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(0.24, 0.24, 1);
  return sprite;
}
