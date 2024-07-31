import gsap from 'gsap';
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

/* // Time
let time = Date.now(); */

/* // Clock
const clock = new THREE.Clock(); */

gsap.to(mesh.position, { duration: 1, delay: 1, x: 2, ease: 'power1' });
gsap.to(mesh.position, { duration: 1, delay: 2, x: 0, ease: 'power1' });

/** Animation */
const tick = () => {
  /* // Time
  const currentTime = Date.now();
  const deltaTime = currentTime - time; // 랜더링 프레임당 경과시간(밀리초)
  time = currentTime; */

  /* // Clock
  const elapsedTime = clock.getElapsedTime(); // Clock 초기화 후 지난 시간(초)

  // Update Objects
  camera.position.y = Math.sin((elapsedTime * Math.PI) / 2);
  camera.position.x = Math.cos((elapsedTime * Math.PI) / 2);
  camera.lookAt(mesh.position); // 카메라 transform이 변경되더라도 mesh오브젝트 바라보기 */

  // Render
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};
tick();
