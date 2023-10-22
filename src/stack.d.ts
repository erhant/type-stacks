/** Push a value to the stack.
 *
 * ```ts
 * // takes
 * [..., b, a], v
 *
 * // returns
 * [..., b, a, v]
 * ```
 */
export type Push<S extends number[], V extends number> = [...S, V];

/** Discard a value from stack.
 *
 * ```ts
 * // takes
 * [..., b, a]
 *
 * // returns
 * [..., b]
 * ```
 */
export type Pop<S extends number[]> = S extends [...infer R, infer _]
  ? R
  : never;

/** Duplicate the top value.
 *
 * ```ts
 * // takes
 * [..., b, a]
 *
 * // returns
 * [..., b, a, a]
 * ```
 */
export type Dup<S extends number[]> = S extends [...infer R, infer A]
  ? [...R, A, A]
  : never;

/** Swap the top two values.
 * ```ts
 * // takes
 * [..., b, a]
 *
 * // returns
 * [..., a, b]
 * ```
 */
export type Swap<S extends number[]> = S extends [...infer R, infer B, infer A]
  ? [...R, A, B]
  : never;
