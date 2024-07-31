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
// perspected camera
// const camera = new THREE.PerspectiveCamera(
//   75,
//   sizes.width / sizes.height,
//   1,
//   1000,
// );
// orthographic camera
const aspectRatio = sizes.width / sizes.height; // 오브젝트의 랜더링 사이즈 비율 조정을 위함
const camera = new THREE.OrthographicCamera(
  -1 * aspectRatio,
  1 * aspectRatio,
  1,
  -1,
  1,
  100,
);
camera.position.x = 2;
camera.position.y = 2;
camera.position.z = 2;
console.log(camera.position.length());
camera.lookAt(mesh.position);
scene.add(camera);

/** Renderer */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

/** Clock */
const clock = new THREE.Clock();

/** Animation */
const tick = () => {
  // Clock
  const elapsedTime = clock.getElapsedTime();

  mesh.rotation.y = elapsedTime * Math.PI * 0.5;

  // Render
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};
tick();
