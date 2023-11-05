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
   * Whether to enable zoom for 3D scene
   */
  enableZoom: boolean;

  /**
   * Whether to enable rotation inside 3D scene
   */
  enableRotate: boolean;

  /**
   * URL of webview page to show up at monitor screen.
   * Could be null if monitor screen is not turned on right now
   */
  monitorScreenUrl: string | null;

  /**
   * Put everything at the center of the screen
   */
  putSceneAtCenter: () => void;

  /**
   * Put everything at the left side of the screen
   */
  putSceneAside: () => void;

  /**
   * Open monitor screen with certain page
   * @param {string} screenPageUrl URL of the page to show through monitor screen
   */
  openMonitor: (screenPageUrl: string) => void;

  /**
   * Close monitor screen
   */
  closeMonitor: () => void;
}
