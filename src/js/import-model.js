import * as THREE from 'three';
import 'three/LoaderSupport';
import 'three/OBJLoader2';
import 'three/MTLLoader';
import suzanneObj from '../models/suzanne.obj';
import suzanneMtl from '../models/suzanne.mtl';

function ImportModel({ fragmentShader }) {
  const loadingMgr = new THREE.LoadingManager();
  const objLoader = new THREE.OBJLoader2(loadingMgr);
  objLoader.crossOrigin = '';

  return new Promise(resolve => {
    // objLoader.load(url, onLoad, onProgress, onError, onMeshAlter, useAsync)
    // objLoader.loadMtl(url, name, content, callbackOnLoad, crossOrigin)
    const onLoaderProgress = prog => console.log('proggy: ', prog);
    const onLoaderError = err => console.error(err);
    const onLoadMtl = materials => {
      // these materials will be overridden by a shader example
      objLoader.setMaterials(materials);
      objLoader.setUseIndices(true);
      loadObj();
    };
    const onObjLoad = loaderEvent => {
      const meshGroup = loaderEvent.detail.loaderRootNode;
      const suzanne = meshGroup.children[0];
      if (fragmentShader) {
        suzanne.material = new THREE.ShaderMaterial({
          fragmentShader
        })
      }
      resolve(suzanne);
    };
    const loadObj = () => objLoader.load(suzanneObj, onObjLoad, onLoaderProgress, onLoaderError);
    
    objLoader.loadMtl(suzanneMtl, 'suzanne.mtl', onLoadMtl, 'anonymous')
  });
}

export default ImportModel;
