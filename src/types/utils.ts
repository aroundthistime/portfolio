export type BuildTuple<L extends number, T extends unknown[] = []> =
  T['length'] extends L ? T : BuildTuple<L, [...T, unknown]>;

export const getTypedObjectKeys = <T extends object>(obj: T) => {
  return Object.keys(obj) as Array<keyof T>;
};

export const getTypedObjectValues = <T extends object>(obj: T) => {
  return Object.values(obj) as Array<T[keyof T]>;
};

export const getTypedObjectEntries = <T extends object>(obj: T) => {
  return Object.entries(obj) as Array<[keyof T, T[keyof T]]>;
};