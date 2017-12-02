import * as THREE from 'three';

function Scene({cameraPos, cameraFov, cameraAspect}) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( cameraFov, cameraAspect, 1, 10000 );
	camera.position.set(...cameraPos);
	camera.lookAt(scene.position);
	
	scene.add(camera);
  return { scene, camera };
}

export default Scene;