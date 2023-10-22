import type { Expect, Equal } from "@type-challenges/utils";
import type { Gt, GtOrEq, Lt, LtOrEq, Eq, IsZero, NotEq } from "../src/index";

type _ = [
  // eq
  Expect<Equal<Eq<[1, 9, 9]>, [1, 1]>>,
  Expect<Equal<Eq<[1, 9, 2]>, [1, 0]>>,
  Expect<Equal<Eq<[1]>, never>>,
  Expect<Equal<Eq<[]>, never>>,
  // noteq
  Expect<Equal<NotEq<[1, 9, 9]>, [1, 0]>>,
  Expect<Equal<NotEq<[1, 9, 2]>, [1, 1]>>,
  Expect<Equal<NotEq<[1]>, never>>,
  Expect<Equal<NotEq<[]>, never>>,
  // gt
  Expect<Equal<Gt<[1, 2, 3]>, [1, 1]>>,
  Expect<Equal<Gt<[1, 3, 2]>, [1, 0]>>,
  Expect<Equal<Gt<[1, 2, 2]>, [1, 0]>>,
  Expect<Equal<Gt<[1]>, never>>,
  Expect<Equal<Gt<[]>, never>>,
  // lt
  Expect<Equal<Lt<[1, 2, 3]>, [1, 0]>>,
  Expect<Equal<Lt<[1, 3, 2]>, [1, 1]>>,
  Expect<Equal<Lt<[1, 2, 2]>, [1, 0]>>,
  Expect<Equal<Lt<[1]>, never>>,
  Expect<Equal<Lt<[]>, never>>,
  // gteq
  Expect<Equal<GtOrEq<[1, 2, 3]>, [1, 1]>>,
  Expect<Equal<GtOrEq<[1, 3, 2]>, [1, 0]>>,
  Expect<Equal<GtOrEq<[1, 2, 2]>, [1, 1]>>,
  Expect<Equal<GtOrEq<[1]>, never>>,
  Expect<Equal<GtOrEq<[]>, never>>,
  // lteq
  Expect<Equal<LtOrEq<[1, 2, 3]>, [1, 0]>>,
  Expect<Equal<LtOrEq<[1, 3, 2]>, [1, 1]>>,
  Expect<Equal<LtOrEq<[1, 2, 2]>, [1, 1]>>,
  Expect<Equal<LtOrEq<[1]>, never>>,
  Expect<Equal<LtOrEq<[]>, never>>,
  // is-zero
  Expect<Equal<IsZero<[1]>, [0]>>,
  Expect<Equal<IsZero<[0]>, [1]>>,
  Expect<Equal<IsZero<[]>, never>>,
];
