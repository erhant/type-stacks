import type { Equal, Expect } from "@type-challenges/utils";
import type { Dup, Pop, Push, Swap } from "../src/stack";

type _ = [
  // push
  Expect<Equal<Push<[1, 2, 3], 4>, [1, 2, 3, 4]>>,
  Expect<Equal<Push<[], 1>, [1]>>,
  // pop
  Expect<Equal<Pop<[1, 2, 3, 4]>, [1, 2, 3]>>,
  Expect<Equal<Pop<[1]>, []>>,
  Expect<Equal<Pop<[]>, never>>,
  // dup
  Expect<Equal<Dup<[1]>, [1, 1]>>,
  Expect<Equal<Dup<[]>, never>>,
  // swap
  Expect<Equal<Swap<[1, 2, 3, 4]>, [1, 2, 4, 3]>>,
  Expect<Equal<Swap<[1, 2, 3]>, [1, 3, 2]>>,
  Expect<Equal<Swap<[1, 2]>, [2, 1]>>,
  Expect<Equal<Swap<[1]>, never>>,
  Expect<Equal<Swap<[]>, never>>,
];
