import type {
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

/** Compare the top two values in the stack.
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

/** Compare the top two values in the stack.
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

/** Compare the top two values in the stack.
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

/** Find the top value mod the second from top value.
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
