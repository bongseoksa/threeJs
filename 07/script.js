import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

/** Cursor */
const cursor = { x: 0, y: 0 };

/** Canvas */
const canvas = document.querySelector('canvas.webgl');

/** Scene */
const scene = new THREE.Scene();

/** Object */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

/** Sizes */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

/** Camera */
// perspected camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  1,
  1000,
);

camera.position.z = 3;
console.log(camera.position.length());
camera.lookAt(mesh.position);
scene.add(camera);

/** Controls */
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/** Renderer */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/** Clock */
const clock = new THREE.Clock();

/** Animation */
const tick = () => {
  // Clock
  const elapsedTime = clock.getElapsedTime();

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};
tick();

window.addEventListener('mousemove', (event) => {
  cursor.x = -(event.clientX / sizes.width - 0.5);
  cursor.y = event.clientY / sizes.height - 0.5;
});

window.addEventListener('resize', () => {
  /* 1.사이즈 설정 2.카메라 비율 세팅 3.랜더러 사이즈 설정 */
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
});
