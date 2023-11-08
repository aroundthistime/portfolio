import { Vector3 } from 'three';
import { CurrentSection } from './types';
import { SectionTitle } from '@/types/enums/SectionTitle';

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
   * Data about current section of the portfolio
   */
  currentSection: CurrentSection;

  /**
   * Get whether the perspective camera is fixed at the moment
   * @returns {boolean} True if the perspective camera is fixed
   */
  getCameraIsFixed: () => boolean;

  /**
   * Put everything at the center of the screen
   */
  putSceneAtCenter: () => void;

  /**
   * Put everything at the left side of the screen
   */
  putSceneAside: () => void;

  /**
   * Update current section of the portfolio (with corresponding data and methods)
   */
  updateCurrentSection: (sectionTitle: SectionTitle) => void;

  /**
   * Fix camera of the scene (rotation, zoom all disabled)
   */
  fixCamera: () => void;

  /**
   * Allow control of the camera (rotation, zoom all enabled)
   */
  unfixCamera: () => void;
}
