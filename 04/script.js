import * as THREE from 'three';

/** Canvas */
const canvas = document.querySelector('canvas.webgl');

/** Scene */
const scene = new THREE.Scene();

/** Object */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const meterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, meterial);

// Position
// mesh.position.x = 1;
// mesh.position.y = -0.6;
// mesh.position.z = -1;
mesh.position.set(1, -0.6, -1);
scene.add(mesh);

// Scale
// mesh.scale.x = 1;
// mesh.scale.y = 0.5;
// mesh.scale.z = 0.5;
mesh.scale.set(1, 0.5, 0.5);

// Rotate. PI
mesh.rotation.reorder('YXZ');
// mesh.rotation.x = Math.PI * 0.25;
// mesh.rotation.y = Math.PI * 0.25;
mesh.rotation.set(Math.PI * 0.25, Math.PI * 0.5, 0);

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
camera.position.set(1, 1, 3);
scene.add(camera);
console.log(mesh.position.length());
console.log(mesh.position.distanceTo(camera.position));

/** Renderer */
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
