import { Digit, RangeUnion } from "./number";

export type YearStr = `20${Digit}${Digit}`;
export type MonthStr = `0${RangeUnion<1, 9>}` | `1${RangeUnion<0, 2>}`;

export type YYYYMMStr = `${YearStr}-${MonthStr}`;