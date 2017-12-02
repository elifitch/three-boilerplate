import '../css/reset.css';
import '../css/style.css';
import * as THREE from 'three';
import frag from './shaders/example-frag.glsl'
import Renderer from './renderer';
import Scene from './scene';
import RenderLoop from './render-loop';
import ExampleCube from './example-cube';
import makeOrbitControls from 'three-orbit-controls';
const OrbitControls = makeOrbitControls(THREE);

const containerEl = document.getElementsByClassName('container')[0];

const renderer = Renderer({containerEl, clearColor: 0xEFEFEF});
const { scene, camera } = Scene({
  cameraPos: [10, 0, 0],
  cameraAspect: containerEl.offsetWidth / containerEl.offsetHeight,
  cameraFov: 45
});

const controls = new OrbitControls(camera);
controls.enableDamping = true;
controls.rotateSpeed = 0.5;
controls.dampingFactor = 0.25;

scene.add(ExampleCube({fragmentShader: frag}));

RenderLoop({renderer, scene, camera, controls});
