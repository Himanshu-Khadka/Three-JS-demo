import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({canvas: document.querySelector('canvas')});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(new THREE.Color(0xffffff));

const controls = new OrbitControls(camera,renderer.domElement);
controls.enableDamping = true;

//Loader Object
const loader = new GLTFLoader();
let model;
loader.load(
  './s.w.a.t._operator.glb', //Path to model
  function(gltf){
    model = gltf.scene;
    scene.add(model);
  },
  undefined,
  function(error){
    console.error(error);
  }
);

camera.position.z = 5;


//Animate
function animate(){
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene,camera);
}

animate();