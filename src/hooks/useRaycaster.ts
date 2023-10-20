import { useThree } from '@react-three/fiber';
import { Vector2, Vector4 } from 'three';

/**
 * Hook for controlling raycaster of the current 3D canvas.
 * This hook uses the raycaster obtained by useThree hook of r3f,
 * and therefore you can obtain the raycaster object from the hook
 */
const useRaycaster = () => {
  const { gl, camera, raycaster } = useThree();

  /**
   * Setup raycaster with the given mouse event
   * @param {MouseEvent} event Mouse event to apply to the raycaster properties
   */
  const setRaycasterFromMouseEvent = (mouseEvent: MouseEvent) => {
    const viewport = new Vector4();
    gl.getViewport(viewport);

    const { x, y, width, height } = viewport;

    /**
     * Get mouse clicked position in the 3D scene
     * (Keep in mind that the size of viewport and renderer DOM element could differ)
     * (1) Get clicked position relative to the top-left corner of the viewport
     * (2) Normalize between range of -1 ~ 1 in accordance with NDC system
     */
    const mouseVector = new Vector2(
      ((mouseEvent.clientX - x) / width) * 2 - 1,
      -((mouseEvent.clientY - y) / height) * 2 + 1,
    );

    raycaster.setFromCamera(mouseVector, camera);
  };

  return {
    setRaycasterFromMouseEvent,
  };
};

export default useRaycaster;
