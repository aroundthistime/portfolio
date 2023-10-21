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
  const resultArray = [];

  for (let i = 0; i < length; i += 1) {
    resultArray.push(cloneDeep(value));
  }

  return resultArray;
};
