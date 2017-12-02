import * as THREE from 'three';

function ExampleCube({fragmentShader}) {
  const geo = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.ShaderMaterial( {
    uniforms: {
      time: { value: 1.0 },
      resolution: { value: new THREE.Vector2() }
    },
    fragmentShader
  });
  return new THREE.Mesh(geo, material)
}

export default ExampleCube;
