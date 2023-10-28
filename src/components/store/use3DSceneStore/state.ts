import { Vector3 } from 'three';

/**
 * Global state related to 3D scene rendering
 */
export interface SceneStoreState {
  /**
   * Perspective camera of the scene
   */
  camera: {
    position: Vector3;
    target: Vector3;
  };

  /**
   * Root scene
   */
  scene: {
    position: Vector3;
  };

  /**
   * Put everything at the center of the screen
   */
  putSceneAtCenter: () => void;

  /**
   * Put everything at the left side of the screen
   */
  putSceneAside: () => void;
}
