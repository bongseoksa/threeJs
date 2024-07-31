import * as THREE from 'three';

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
  width: 800,
  height: 600,
};

/** Camera */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

/** Renderer */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Time
let time = Date.now();

/** Animation */
const tick = () => {
  // Time
  const currentTime = Date.now();
  const deltaTime = currentTime - time;
  time = currentTime;
  // console.log('renderTimestamp', `${deltaTime / 1000}s`);

  // Update Objects
  mesh.rotation.y += 0.001 * deltaTime; // 디스플레이 주사율이 다른 pc 에서 동일한 애니메이션 속도 설정을 위함

  // Render
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};
tick();
