import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export interface SatelliteModelTemplates {
  high: THREE.Group;
  med: THREE.Group;
  low: THREE.Group;
}

export type SatelliteStatus = 'active' | 'highLatency' | 'offline';

export interface SatelliteColorConfig {
  satColor?: string;
  offlineSatColor?: string;
  highLatencySatColor?: string;
}

let cachedTemplates: SatelliteModelTemplates | null = null;
let loadPromise: Promise<SatelliteModelTemplates> | null = null;

/**
 * Normalizes a loaded GLTF scene: centers at (0,0,0) and scales so max dimension = 1.0
 */
function normalizeGLTFScene(scene: THREE.Group): THREE.Group {
  scene.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(scene);
  const center = new THREE.Vector3();
  box.getCenter(center);
  const size = new THREE.Vector3();
  box.getSize(size);
  const maxDim = Math.max(size.x, size.y, size.z) || 1.0;

  scene.position.sub(center);

  const wrapper = new THREE.Group();
  wrapper.add(scene);
  wrapper.scale.setScalar(1.0 / maxDim);
  wrapper.updateMatrixWorld(true);
  return wrapper;
}

/**
 * Loads and caches the 3 GLTF satellite models from the public directory.
 */
export function loadSatelliteModels(): Promise<SatelliteModelTemplates> {
  if (cachedTemplates) {
    return Promise.resolve(cachedTemplates);
  }
  if (loadPromise) {
    return loadPromise;
  }

  const loader = new GLTFLoader();
  const baseUrl = (typeof import.meta !== 'undefined' && (import.meta as any).env && (import.meta as any).env.BASE_URL) || '/';
  const cleanBase = baseUrl.endsWith('/') ? baseUrl : baseUrl + '/';

  loadPromise = Promise.all([
    loader.loadAsync(`${cleanBase}satellite_high.gltf`),
    loader.loadAsync(`${cleanBase}satellite_med.gltf`),
    loader.loadAsync(`${cleanBase}satellite_low.gltf`)
  ]).then(([highGltf, medGltf, lowGltf]) => {
    cachedTemplates = {
      high: normalizeGLTFScene(highGltf.scene),
      med: normalizeGLTFScene(medGltf.scene),
      low: normalizeGLTFScene(lowGltf.scene)
    };
    return cachedTemplates;
  }).catch((err) => {
    console.error('Failed to load 3D satellite models, using sphere fallbacks', err);
    throw err;
  });

  return loadPromise;
}

export function getCachedSatelliteModels(): SatelliteModelTemplates | null {
  return cachedTemplates;
}

/**
 * Creates shared materials for a given status and color palette.
 */
export function createSatelliteMaterials(
  status: SatelliteStatus,
  colors: SatelliteColorConfig,
  isFocused: boolean
) {
  const baseHex =
    status === 'offline'
      ? colors.offlineSatColor || '#ff3b30'
      : status === 'highLatency'
      ? colors.highLatencySatColor || '#ff9900'
      : colors.satColor || '#00f0ff';

  const baseColor = new THREE.Color(baseHex);
  // Enhance body brightness and saturation so it clearly pops out in space
  const brightBodyColor = baseColor.clone();
  brightBodyColor.offsetHSL(0, 0.05, 0.12);

  // Body: vivid finish with strong emissive glow so it never blends with the FOV cone
  const bodyMat = new THREE.MeshStandardMaterial({
    color: brightBodyColor,
    metalness: 0.35,
    roughness: 0.2,
    emissive: baseColor,
    emissiveIntensity: isFocused ? 1.1 : 0.75,
  });

  // Solar Panels: high contrast photovoltaic panels with subtle status glow
  const solarColor = new THREE.Color(0x0c1c33).lerp(baseColor, 0.2);
  const solarMat = new THREE.MeshStandardMaterial({
    color: solarColor,
    metalness: 0.92,
    roughness: 0.15,
    emissive: baseColor,
    emissiveIntensity: isFocused ? 0.35 : 0.2,
  });

  return { bodyMat, solarMat, baseColor };
}

/**
 * Checks if a mesh corresponds to the satellite's solar panels.
 */
function isSolarPanelMesh(meshName: string): boolean {
  return (
    meshName.includes('Cylinder.005') ||
    meshName.includes('Cylinder.000') ||
    meshName.includes('Cylinder.007')
  );
}

/**
 * Builds a composite 3D Satellite group with 3 LOD levels and an invisible collision sphere.
 */
export function buildSatellite3DObject(
  templates: SatelliteModelTemplates | null,
  status: SatelliteStatus,
  colors: SatelliteColorConfig,
  satSize: number,
  isFocused: boolean
): {
  satGroup: THREE.Group;
  hitMesh: THREE.Mesh;
  modelMeshes: THREE.Mesh[];
} {
  const satGroup = new THREE.Group();
  satGroup.name = 'Satellite3D';
  satGroup.scale.setScalar(0.65 * satSize);

  const { bodyMat, solarMat } = createSatelliteMaterials(status, colors, isFocused);
  const modelMeshes: THREE.Mesh[] = [];

  // Invisible collision sphere for reliable click selection
  const hitGeo = new THREE.SphereGeometry(0.45, 8, 8);
  const hitMat = new THREE.MeshBasicMaterial({ visible: false, wireframe: false });
  const hitMesh = new THREE.Mesh(hitGeo, hitMat);
  hitMesh.name = 'SatHitBox';
  satGroup.add(hitMesh);

  if (templates) {
    const levels: Array<{ template: THREE.Group; name: string }> = [
      { template: templates.high, name: 'LOD_High' },
      { template: templates.med, name: 'LOD_Med' },
      { template: templates.low, name: 'LOD_Low' }
    ];

    levels.forEach((lvl, idx) => {
      const clone = lvl.template.clone(true);
      clone.name = lvl.name;
      clone.visible = idx === 1; // Med by default until first LOD update

      clone.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          mesh.material = isSolarPanelMesh(mesh.name) ? solarMat : bodyMat;
          mesh.castShadow = false;
          mesh.receiveShadow = false;
          modelMeshes.push(mesh);
        }
      });

      satGroup.add(clone);
    });
  } else {
    // Fallback sphere if models are still loading
    const fallbackGeo = new THREE.SphereGeometry(0.35, 16, 16);
    const fallbackMesh = new THREE.Mesh(fallbackGeo, bodyMat);
    fallbackMesh.name = 'LOD_Fallback';
    satGroup.add(fallbackMesh);
    modelMeshes.push(fallbackMesh);
  }

  return { satGroup, hitMesh, modelMeshes };
}

/**
 * Dynamically switches LOD visibility per satellite based on camera zoom & focus state.
 *
 * Requirements:
 * - High model: if user is focused on this satellite OR strongly zoomed in.
 * - Med model: medium zoom distance.
 * - Low model: zoomed out view of the globe/constellation.
 */
export function updateSatelliteLOD(
  satGroup: THREE.Group,
  camera: THREE.PerspectiveCamera,
  isFocused: boolean
) {
  // Children: 0: HitBox, 1: High, 2: Med, 3: Low (or Fallback if not loaded)
  const highObj = satGroup.getObjectByName('LOD_High');
  const medObj = satGroup.getObjectByName('LOD_Med');
  const lowObj = satGroup.getObjectByName('LOD_Low');

  if (!highObj || !medObj || !lowObj) {
    return;
  }

  const camDistToOrigin = camera.position.length();
  const satDistToCamera = satGroup.position.distanceTo(camera.position);

  // Conditions for High detail:
  // 1. User is specifically focused on this satellite
  // 2. Camera is strongly zoomed in overall (distance to Earth center < 18.0)
  // 3. Camera is close to this specific satellite in space (distance < 14.0)
  const isStronglyZoomedIn = camDistToOrigin < 18.0 || satDistToCamera < 14.0;

  // Medium detail:
  // Camera is at medium distance (< 38.0) or satellite is within 34 units
  const isMediumZoom = camDistToOrigin < 38.0 || satDistToCamera < 34.0;

  let activeIndex: 0 | 1 | 2 = 2; // default: Low
  if (isFocused || isStronglyZoomedIn) {
    activeIndex = 0; // High
  } else if (isMediumZoom) {
    activeIndex = 1; // Med
  } else {
    activeIndex = 2; // Low
  }

  highObj.visible = (activeIndex === 0);
  medObj.visible = (activeIndex === 1);
  lowObj.visible = (activeIndex === 2);
}
