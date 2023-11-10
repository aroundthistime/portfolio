/**
 * Utility type which recursively converts type of properties
 * from one to another.
 * @template {T} - Type to replace types of its properties
 * @template {U} - Type to be replaced
 * @template {V} - Type will take place instead of U
 */
export type ReplaceSubType<T, U, V> = {
  [K in keyof T]: T[K] extends U
    ? V
    : T[K] extends object
    ? T[K] extends any[]
      ? Array<ReplaceSubType<T[K][number], U, V>>
      : ReplaceSubType<T[K], U, V>
    : T[K];
};
