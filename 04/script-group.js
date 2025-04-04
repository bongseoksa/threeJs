import * as THREE from 'three';

/** Canvas */
const canvas = document.querySelector('canvas.webgl2');

/** Scene */
const scene = new THREE.Scene();

/** Object */
const group = new THREE.Group();
group.position.y = 1;
group.rotation.y = 1;
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 }),
);
group.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
);
cube2.position.x = -2;
group.add(cube2);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff }),
);
cube3.position.x = 2;
group.add(cube3);

// Position

// Scale

// Rotate. PI

/** Axes helper. VECTOR 가이드라인
 * x: 붉은 라인
 * y: 초록 라인
 * z: 파란 라인
 */
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

/** Sizes */
const sizes = { width: 800, height: 600 };

/** Cemera */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.set(0, 0, 5);
scene.add(camera);

/** Renderer */
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
