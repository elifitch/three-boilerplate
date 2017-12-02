void main() {
  #pragma glslify: someVec = require('./example-module.glsl')
  gl_FragColor = someVec;
}