import { Vector3 } from 'three';
import { create } from 'zustand';
import { CameraStoreState } from './state';

/**
 * Default camera position
 */
const DEFAULT_POSITION = new Vector3(8.5, 10, 8.5);

/**
 * Default target position that the camera is looking at
 */
const DEFAULT_TARGET = new Vector3(0, 0, 0);

/**
 * Global store fore handling scene camera.
 * Is required to change camera status outside 3D canvas
 */
const useCameraStore = create<CameraStoreState>()(set => ({
  position: DEFAULT_POSITION,
  target: DEFAULT_TARGET,

  setToDefault: () => {
    set({
      position: DEFAULT_POSITION,
      target: DEFAULT_TARGET,
    });
  },
}));

export default useCameraStore;
