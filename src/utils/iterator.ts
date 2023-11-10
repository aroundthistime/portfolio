/**
 * Recursively replace data which fulfills certain condition into another.
 * The call of this function does not affect the original data
 *
 * @template {T} - Type of data you want to be replaced
 * @template {U} - Type of data which will replace the original data
 *
 * @param {any} data Data to process
 * @param {(item: any) => item is T} isTypeToReplace Callback which validates whether certain data needs to be replaced or not
 * @param {(replaceTarget: T) => U} converterFunc Callback which is used to obtain data to replace (could utilize the original value)
 * @returns {any} Processed data
 */
export const replaceRecursively = <T, U>(
  data: any,
  isTypeToReplace: (item: any) => item is T,
  converterFunc: (replaceTarget: T) => U,
) => {
  if (isTypeToReplace(data)) {
    return converterFunc(data);
  }

  if (data instanceof Array) {
    return data.map(item =>
      replaceRecursively(item, isTypeToReplace, converterFunc),
    );
  }

  if (typeof data === 'object' && data !== null) {
    const result = {};

    Object.entries(data).forEach(([key, value]) => {
      result[key] = replaceRecursively(value, isTypeToReplace, converterFunc);
    });

    return result;
  }

  return data;
};
