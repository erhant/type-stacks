import type {
  Not as NOT,
  Eq as EQ,
  GtOrEq as GTEQ,
  LtOrEq as LTEQ,
  Lt as LT,
  Gt as GT,
} from "ts-arithmetic";

/** Check if the top is `0`.
 *
 * ```ts
 * // takes
 * [..., a]
 *
 * // returns
 * [..., a == 0]
 * ```
 */
export type IsZero<S extends number[]> = S extends [...infer Rest, infer A]
  ? A extends number
    ? A extends 0
      ? [...Rest, 1]
      : [...Rest, 0]
    : never
  : never;

/** Check if the top two values are equal.
 *
 * ```ts
 * // takes
 * [..., b, a]
 *
 * // returns
 * [..., a == b]
 * ```
 */
export type Eq<S extends number[]> = S extends [...infer Rest, infer B, infer A]
  ? A extends number
    ? B extends number
      ? [...Rest, EQ<A, B>]
      : never
    : never
  : never;

/** Check if the top two values are not equal.
 *
 * ```ts
 * // takes
 * [..., b, a]
 *
 * // returns
 * [..., a != b]
 * ```
 */
export type NotEq<S extends number[]> = S extends [
  ...infer Rest,
  infer B,
  infer A,
]
  ? A extends number
    ? B extends number
      ? [...Rest, NOT<EQ<A, B>>]
      : never
    : never
  : never;

/** Check if the top two value is greater or equal to the second-top value.
 *
 * ```ts
 * // takes
 * [..., b, a]
 *
 * // returns
 * [..., a >= b]
 * ```
 */
export type GtOrEq<S extends number[]> = S extends [
  ...infer Rest,
  infer B,
  infer A,
]
  ? A extends number
    ? B extends number
      ? [...Rest, GTEQ<A, B>]
      : never
    : never
  : never;

/** Check if the top two value is lesser or equal to the second-top value.
 *
 * ```ts
 * // takes
 * [..., b, a]
 *
 * // returns
 * [..., a <= b]
 * ```
 */
export type LtOrEq<S extends number[]> = S extends [
  ...infer Rest,
  infer B,
  infer A,
]
  ? A extends number
    ? B extends number
      ? [...Rest, LTEQ<A, B>]
      : never
    : never
  : never;

/** Check if the top two value is less than the second-top value.
 *
 * ```ts
 * // takes
 * [..., b, a]
 *
 * // returns
 * [..., a < b]
 * ```
 */
export type Lt<S extends number[]> = S extends [...infer Rest, infer B, infer A]
  ? A extends number
    ? B extends number
      ? [...Rest, LT<A, B>]
      : never
    : never
  : never;

/** Check if the top two value is greater than the second-top value.
 *
 * ```ts
 * // takes
 * [..., b, a]
 *
 * // returns
 * [..., a > b]
 * ```
 */
export type Gt<S extends number[]> = S extends [...infer Rest, infer B, infer A]
  ? A extends number
    ? B extends number
      ? [...Rest, GT<A, B>]
      : never
    : never
  : never;
