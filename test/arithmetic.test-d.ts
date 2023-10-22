import type { Expect, Equal } from "@type-challenges/utils";
import type { Add, Sub, Mul, Div, Mod } from "../src/index";

type _ = [
  // addition
  Expect<Equal<Add<[1, 2, 3]>, [1, 5]>>,
  Expect<Equal<Add<[1, 0.2, 0.3]>, [1, 0.5]>>,
  // subtraction
  Expect<Equal<Sub<[1, 2, 3]>, [1, 1]>>,
  Expect<Equal<Sub<[1, 0.2, 0.3]>, [1, 0.1]>>,
  // multiplication
  Expect<Equal<Mul<[1, 2, 3]>, [1, 6]>>,
  Expect<Equal<Mul<[1, 0.2, 0.3]>, [1, 0.06]>>,
  // division
  Expect<Equal<Div<[1, 2, 3]>, [1, 1.5]>>,
  Expect<Equal<Div<[1, 0.2, 0.3]>, [1, 1.5]>>,
  // modulus
  Expect<Equal<Mod<[1, 2, 3]>, [1, 1]>>,
  Expect<Equal<Mod<[1, 0.2, 0.3]>, [1, 0.1]>>,
];
