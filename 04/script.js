import * as THREE from 'three';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const meterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, meterial);
// mesh.position.x = 1;
// mesh.position.y = -0.6;
// mesh.position.z = -1;
mesh.position.set(1, -0.6, -1);
scene.add(mesh);

// Sizes
const sizes = { width: 800, height: 600 };

// Cemera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);
mesh.position.normalize(); // 오브젝트를 씬 중심에서 1 거리에 위치하게 함
console.log(mesh.position.length());
console.log(mesh.position.distanceTo(camera.position));

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
