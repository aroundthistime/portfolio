import { Vector3 } from 'three';

export interface CameraStoreState {
  position: Vector3;
  target: Vector3;

  setToDefault: () => void;
}
