import * as THREE from 'three';

function Scene({cameraPos, cameraFov, cameraAspect}) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( cameraFov, cameraAspect, 1, 10000 );
	camera.position.set(...cameraPos);
  camera.lookAt(scene.position);
  
  // just to get some insanely basic lighting
  const hemiLight = new THREE.HemisphereLight('#b7ae8f', '#cdf7f7', 2)

  scene.add(camera);
  scene.add(hemiLight);
  return { scene, camera };
}

export default Scene;