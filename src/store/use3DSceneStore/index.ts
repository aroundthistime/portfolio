import { create } from 'zustand';
import { Vector3 } from 'three';
import { SceneStoreState } from './state';

const CAMERA_DEFAULT_POSITION = new Vector3(8.5, 10, 8.5);
const CAMERA_DEFAULT_TARGET = new Vector3(0, 0, 0);

const SCENE_DEFAULT_POSITION = new Vector3(0, 0, 0);
const SCENE_ASIDE_POSITION = new Vector3(-5.5, 0, 5.5);

/**
 * Global store for handling 3D scene.
 * Is required to change something in the scene outside 3D canvas
 */
const use3DSceneStore = create<SceneStoreState>()(set => ({
  camera: {
    position: CAMERA_DEFAULT_POSITION,
    target: CAMERA_DEFAULT_TARGET,
  },
  scene: {
    position: SCENE_DEFAULT_POSITION,
  },

  putSceneAtCenter: () => {
    set({
      camera: {
        position: CAMERA_DEFAULT_POSITION,
        target: CAMERA_DEFAULT_TARGET,
      },
      scene: {
        position: SCENE_DEFAULT_POSITION,
      },
    });
  },

  putSceneAside: () => {
    set({
      camera: {
        position: CAMERA_DEFAULT_POSITION,
        target: CAMERA_DEFAULT_TARGET,
      },
      scene: {
        position: SCENE_ASIDE_POSITION,
      },
    });
  },
}));

export default use3DSceneStore;
