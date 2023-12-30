import cloneDeep from 'lodash/cloneDeep';

/**
 * Get a random item from the given array.
 * This doesn't pop out the item. The array stays in the original state
 * @param {Array} array Array to extract the random item
 * @returns Randomly selected item
 */
export const getRandomItemFromArray = <T>(array: T[]): T | undefined => {
  if (array.length === 0) {
    return undefined;
  }

  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

/**
 * Get an array filled with same elements (the elements will be deep-cloned)
 *
 * @template {T}
 * @param {T} value Value to fill the entire array
 * @param {number} length Number of elements to fill out the array
 * @returns {T[]} An array filled with same elements
 */
export const getFilledArray = <T>(value: T, length: number): T[] => {
  if (length < 0) {
    throw new Error('Invalid length given - should be greater or equal to 0');
  }

  const resultArray = [];

  for (let i = 0; i < length; i += 1) {
    resultArray.push(cloneDeep(value));
  }

  return resultArray;
};

/**
 * Get an array with parameter added between each elements of the original array
 * @template {T}
 * @param {T[]} array Array to update
 * @param {U} elementToAdd Element to add between elements of the original array
 * @returns {(T|U)[]} Array with parameter element added between elements
 */
export const addBetweenElements = <T, U>(
  array: T[],
  elementToAdd: U,
): (T | U)[] => {
  const newArray: any[] = [];
  for (let i = 0; i < array.length; i += 1) {
    newArray.push(array[i]);
    if (i < array.length - 1) {
      newArray.push(cloneDeep(elementToAdd));
    }
  }
  return newArray;
};
