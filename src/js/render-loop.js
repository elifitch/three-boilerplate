function RenderLoop({ renderer, scene, camera, controls }) {
  if (controls) {
    controls.update();
  }
  window.requestAnimationFrame(() => RenderLoop({ renderer, scene, camera, controls }));
  renderer.render(scene, camera);
}

export default RenderLoop;
