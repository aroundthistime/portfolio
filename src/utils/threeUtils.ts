import { Vector3 } from 'three';
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
