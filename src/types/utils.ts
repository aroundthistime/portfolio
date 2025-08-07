export type BuildTuple<L extends number, T extends unknown[] = []> =
  T['length'] extends L ? T : BuildTuple<L, [...T, unknown]>;