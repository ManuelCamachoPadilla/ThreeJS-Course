import './style.css';
import * as THREE from 'three';
import gsap from 'gsap';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

/* // Time
let time = Date.now();

// Animations
const tick = () => {

    // Time
    const currentTime = Date.now();
    const deltaTime = currentTime - time;
    time = currentTime;

    // Update objects
    mesh.rotation.y += 0.001 * deltaTime;
    mesh.rotation.x += 0.001 * deltaTime;

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
}
tick(); */

/* // Clock
let clock = new THREE.Clock();

// Animations
const tick = () => {

    // Clock
    const elapsedTime = clock.getElapsedTime();
    console.log(elapsedTime);

    // Update objects
    mesh.rotation.y = elapsedTime;
    mesh.rotation.x = elapsedTime;
    mesh.position.y = Math.sin(elapsedTime);
    mesh.position.x = Math.cos(elapsedTime);

    // Camera look at the mesh position (the center of the mesh)
    camera.lookAt(mesh.position); // You can comment this line to see the difference

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
}
tick(); */

// Animations with GSAP
// duration: 1, // 1 second
// delay: 1, // 1 second delay before the animation starts
gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });
gsap.to(mesh.position, { duration: 1, delay: 2, x: 0 });
const tick = () => {
    // Render   
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
}
tick();