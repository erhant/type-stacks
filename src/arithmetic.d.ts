import type {
  Add as ADD,
  Subtract as SUB,
  Multiply as MUL,
  Divide as DIV,
  Mod as MOD,
} from "ts-arithmetic";

/** Add the top two values in the stack.
 *
 * ```ts
 * // takes
 * [..., b, a]
 *
 * // returns
 * [..., a + b]
 * ```
 */
export type Add<S extends number[]> = S extends [
  ...infer Rest,
  infer B,
  infer A,
]
  ? A extends number
    ? B extends number
      ? [...Rest, ADD<A, B>]
      : never
    : never
  : never;

/** Subtract the second top value from the top value.
 *
 * ```ts
 * // takes
 * [..., b, a]
 *
 * // returns
 * [..., a - b]
 * ```
 */
export type Sub<S extends number[]> = S extends [
  ...infer Rest,
  infer B,
  infer A,
]
  ? A extends number
    ? B extends number
      ? [...Rest, SUB<A, B>]
      : never
    : never
  : never;

/** Multiply the top two values in the stack.
 *
 * ```ts
 * // takes
 * [..., b, a]
 *
 * // returns
 * [..., a * b]
 * ```
 */
export type Mul<S extends number[]> = S extends [
  ...infer Rest,
  infer B,
  infer A,
]
  ? A extends number
    ? B extends number
      ? [...Rest, MUL<A, B>]
      : never
    : never
  : never;

/** Divide the top value to the second from-top value.
 *
 * ```ts
 * // takes
 * [..., b, a]
 *
 * // returns
 * [..., a / b]
 * ```
 */
export type Div<S extends number[]> = S extends [
  ...infer Rest,
  infer B,
  infer A,
]
  ? A extends number
    ? B extends number
      ? [...Rest, DIV<A, B>]
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
 * [..., a % b]
 * ```
 */
export type Mod<S extends number[]> = S extends [
  ...infer Rest,
  infer B,
  infer A,
]
  ? A extends number
    ? B extends number
      ? [...Rest, MOD<A, B>]
      : never
    : never
  : never;
