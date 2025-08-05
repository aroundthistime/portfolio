import { DefaultMap } from "./dataStructure/defaultMap";

export const groupBy = <T, K>(array: T[], keyGetter: (item: T) => K) => {
  return array.reduce((acc, item) => {
    const key = keyGetter(item);
    acc.get(key).push(item);
    return acc;
    // use map to support objects as keys
  }, new DefaultMap<K, T[]>(() => []));
};