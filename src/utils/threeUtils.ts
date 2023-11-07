import { Object3D, Vector3 } from 'three';
import { getFilledArray } from './array';

/**
 * Get a scale vector with given coefficient
 * @param {number} coefficient Value to apply to x, y, z scale
 * @return {Vector3} Scale vector
 */
export const getScaleVector = (coefficient: number): Vector3 => {
  const scales = getFilledArray(coefficient, 3);
  return new Vector3().fromArray(scales);
};

/**
 * Get whether a 3D object is descendant of another.
 * FYI, object itself is also considered as one of its descendants
 * @param {Object3D} object3D Object to validate whether it is included in tree of another
 * @param {Object3D} rootObject Object which may contain the other object or not
 * @returns {boolean} True if object is descendant of another
 */
export const isDescendantOf = (
  object3D: Object3D,
  rootObject: Object3D,
): boolean => {
  if (!object3D || !rootObject) {
    throw Error('Given inputs are not valid 3D objects');
  }
  if (object3D === rootObject) return true;

  let isDescendant = false;

  object3D.traverseAncestors(ancestor => {
    if (ancestor === rootObject) {
      isDescendant = true;
    }
  });

  return isDescendant;
};

/**
 * Get center point from a group of objects given in an array.
 * This does not put weight on certain object
 * @param {Object3D[]} objects Array of 3D objects to find a center point
 * @returns {Vector3} Center point of the 3D objects
 */
export const getCenterPointOfObjects = (objects: Object3D[]) => {
  const totalPosition = new Vector3();

  objects.forEach(object => {
    const objectWorldPosition = object.getWorldPosition(new Vector3());
    totalPosition.add(objectWorldPosition);
  });

  const centerPoint = totalPosition.divideScalar(objects.length);

  return centerPoint;
};
