import { Equal, Expect } from "@type-challenges/utils";
// 使用 extends undefined 来判断传入类型为null
type If<C, T, F> = C extends undefined ? error : C extends true ? T : F;
type cases = [
    Expect<Equal<If<true, "a", "b">, "a">>,
    Expect<Equal<If<false, "a", 2>, 2>>
];
// @ts-expect-error
type error = If<null, "a", "b">;
