import { DefaultMap } from "./dataStructure/defaultMap";

export const groupBy = <T, K>(array: readonly T[], keyGetter: (item: T) => K) => {
  return array.reduce((acc, item) => {
    const key = keyGetter(item);
    acc.get(key).push(item);
    return acc;
    // use map to support objects as keys
  }, new DefaultMap<K, T[]>(() => []));
};


/**
 * Partition an array into two arrays based on a predicate (does not mutate the original array)
 * @returns A tuple of two arrays, the first containing the items that satisfy the predicate, and the second containing the items that do not satisfy the predicate
 */
export const partition = <T>(array: readonly T[], predicate: (item: T) => boolean) => {
  return array.reduce<[T[], T[]]>((acc, item) => {
    if (predicate(item)) {
      acc[0].push(item);
    } else {
      acc[1].push(item);
    }
    return acc;
  }, [[], []]);
};

export const hasCommonElements = <T>(arr1: readonly T[], arr2: readonly T[]): boolean =>
  arr1.some((item) => arr2.includes(item));