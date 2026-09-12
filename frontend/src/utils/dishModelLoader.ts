import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

let cachedDishTemplate: THREE.Group | null = null;
let dishLoadPromise: Promise<THREE.Group> | null = null;

/**
 * Normalizes the dish model:
 * - Centers X and Z at 0
 * - Places the base (min Y) exactly at Y = 0 (standing flush on the ground)
 * - Normalizes total height to 1.0
 */
function normalizeDishOBJ(group: THREE.Group): THREE.Group {
  group.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(group);
  const size = new THREE.Vector3();
  box.getSize(size);
  const center = new THREE.Vector3();
  box.getCenter(center);

  // Position base on ground (Y=0), center X and Z
  group.position.set(-center.x, -box.min.y, -center.z);

  const wrapper = new THREE.Group();
  wrapper.name = 'DishNormalizedTemplate';
  wrapper.add(group);
  const height = size.y || 1.0;
  wrapper.scale.setScalar(1.0 / height);
  wrapper.updateMatrixWorld(true);

  return wrapper;
}

/**
 * Loads and caches Dish_LowPoly.obj from the public directory.
 */
export function loadDishModel(): Promise<THREE.Group> {
  if (cachedDishTemplate) {
    return Promise.resolve(cachedDishTemplate);
  }
  if (dishLoadPromise) {
    return dishLoadPromise;
  }

  const loader = new OBJLoader();
  const baseUrl = (typeof import.meta !== 'undefined' && (import.meta as any).env && (import.meta as any).env.BASE_URL) || '/';
  const cleanBase = baseUrl.endsWith('/') ? baseUrl : baseUrl + '/';

  dishLoadPromise = loader.loadAsync(`${cleanBase}Dish_LowPoly.obj`)
    .then((objGroup) => {
      cachedDishTemplate = normalizeDishOBJ(objGroup);
      return cachedDishTemplate;
    })
    .catch((err) => {
      console.warn('Failed to load Dish_LowPoly.obj, falling back to cone geometry', err);
      throw err;
    });

  return dishLoadPromise;
}

export function getCachedDishModel(): THREE.Group | null {
  return cachedDishTemplate;
}

/**
 * Builds a styled 3D ground station dish object with metallic finish and gateway color.
 */
export function buildDish3DObject(
  template: THREE.Group | null,
  gatewayColor: string,
  sizeScale: number = 1.0
): THREE.Group {
  const dishContainer = new THREE.Group();
  dishContainer.name = 'GroundStationDish';

  const baseColor = new THREE.Color(gatewayColor || '#00d084');

  // Vibrant cyber-green / metallic material for the radar dish
  const dishMat = new THREE.MeshStandardMaterial({
    color: baseColor,
    metalness: 0.65,
    roughness: 0.28,
    emissive: baseColor,
    emissiveIntensity: 0.35,
  });

  if (template) {
    const clone = template.clone(true);
    clone.name = 'DishMeshGroup';

    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.material = dishMat;
        mesh.castShadow = false;
        mesh.receiveShadow = false;
      }
    });

    dishContainer.add(clone);
  } else {
    // Fallback cone if model not yet loaded
    const coneGeo = new THREE.ConeGeometry(0.24, 0.48, 8);
    const coneMat = new THREE.MeshStandardMaterial({
      color: baseColor,
      metalness: 0.5,
      roughness: 0.3,
      emissive: baseColor,
      emissiveIntensity: 0.3
    });
    const coneMesh = new THREE.Mesh(coneGeo, coneMat);
    coneMesh.position.set(0, 0.24, 0);
    dishContainer.add(coneMesh);
  }

  // Base height ~0.48 units on Earth surface (proportional to 6.371 reference sphere)
  dishContainer.scale.setScalar(0.48 * sizeScale);

  return dishContainer;
}
