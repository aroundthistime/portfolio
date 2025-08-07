import { BuildTuple } from "./utils";

// Add one to a number
type AddOne<N extends number> = [...BuildTuple<N>, unknown]['length'];

type RangeUnionHelper<
  F extends number,
  T extends number,
  R = never
> = F extends T
  ? R | F
  : AddOne<F> extends number
    ? RangeUnionHelper<AddOne<F>, T, R | F>
    : never;

/**
 * 주어진 범위 내 포함되는 모든 정수들의 유니온 타입을 생성
 * (제네릭으로 넘긴 기준값 역시 범위에 포함됨)
 * 
 * @example
 * type Result = RangeUnion<1, 3>; // 1 | 2 | 3
 */
export type RangeUnion<F extends number, T extends number> = F extends T
  ? F
  : RangeUnionHelper<F, T>;

export type Digit = RangeUnion<0, 9>;