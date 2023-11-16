import { useThree } from '@react-three/fiber';
import { Box3, Object3D, Sphere, Vector3 } from 'three';
import { Geometry } from 'three-stdlib';
import TWEEN from '@tweenjs/tween.js';
import use3DSceneStore from '@/store/use3DSceneStore';

/**
 * Hook related to logic for setting perspective camera to focus onto a certain object
 */
const useObjectFocus = () => {
  const { scene } = useThree();

  /**
   * Update perspective camera to focus on a certain object in the scene
   * @param {Object3D} object3D 3D object to focus onto
   * @param {Vector3} offsetBetweenObjectAndCamera 3D vector to set the offset between camera and the object
   *
   * @throws {Error} Throws error is given offset vector is empty (0, 0, 0)
   */
  const focusOnObject = (
    object3D: Object3D,
    offsetBetweenObjectAndCamera: Vector3,
  ) => {
    updateSceneImmediately();

    const objectWorldPosition = object3D.getWorldPosition(new Vector3());

    focusOnCoordinate(objectWorldPosition, offsetBetweenObjectAndCamera);
  };

  /**
   * Update perspective camera to focus on a certain coordinate
   * @param {Vector3} coordinate Coordinate in world position to focus on
   * @param {Vector3} offsetBetweenCoordAndCamera  3D vector to set the offset between camera and the target point
   */
  const focusOnCoordinate = (
    coordinate: Vector3,
    offsetBetweenCoordAndCamera: Vector3,
  ) => {
    const EMPTY_VECTOR = new Vector3();

    if (offsetBetweenCoordAndCamera.equals(EMPTY_VECTOR)) {
      throw Error(
        'Invalid offset given! You cannot see anything if the camera is at the same position with the object',
      );
    }

    updateSceneImmediately();

    const cameraPosition = new Vector3().addVectors(
      coordinate,
      offsetBetweenCoordAndCamera,
    );

    use3DSceneStore.setState({
      camera: {
        position: cameraPosition,
        target: coordinate,
      },
    });
  };

  /**
   * Update scene immediately.
   * The following calculations get affected by scene position and
   * using scene tween animation might not give correct value.
   * Please call this function before calculating world position of an object for accurate results
   */
  const updateSceneImmediately = () => {
    const {
      x: sceneX,
      y: sceneY,
      z: sceneZ,
    } = use3DSceneStore.getState().scene.position;

    scene.position.set(sceneX, sceneY, sceneZ);
  };

  /**
   * Get center point of the given object.
   * If the object has geometry, we use bounding sphere.
   * Otherwise, we create wrapping box3 for the object and use bounding sphere of the box
   * @param {Object3D} object 3D object to get the center point
   * @returns {Vector3} Center point in 3D vector
   */
  const getObjectCenterPoint = (object: Object3D): Vector3 => {
    // @ts-ignore
    if (object.geometry) {
      // @ts-ignore
      const geometry = object.geometry as Geometry;
      geometry.computeBoundingSphere();
      return geometry.boundingSphere.center;
    }
    const objectWrappingBox = new Box3().setFromObject(object);
    const boundingSphere = objectWrappingBox.getBoundingSphere(new Sphere());
    return boundingSphere.center;
  };

  return {
    focusOnObject,
    focusOnCoordinate,
    getObjectCenterPoint,
    updateSceneImmediately,
  };
};

export default useObjectFocus;
