import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/loaders/GLTFLoader.js";

const container = document.getElementById("helmet3D");

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
45,
container.clientWidth/container.clientHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer({
alpha:true,
antialias:true
});

renderer.setSize(
container.clientWidth,
container.clientHeight
);

container.appendChild(renderer.domElement);

// Lights
const ambient = new THREE.AmbientLight(0xffffff,2);
scene.add(ambient);

const light = new THREE.DirectionalLight(0xffffff,3);
light.position.set(5,5,5);
scene.add(light);

// Load Model
const loader = new GLTFLoader();

loader.load(

"assets/models/hero.glb",

function(gltf){

const model = gltf.scene;

model.scale.set(2,2,2);

model.position.set(0,-2,0);

scene.add(model);

animate(model);

},

undefined,

function(error){

console.log(error);

}

);

camera.position.z = 5;

// Animation
function animate(model){

requestAnimationFrame(()=>animate(model));

model.rotation.y += 0.01;

renderer.render(scene,camera);

}