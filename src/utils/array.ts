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
