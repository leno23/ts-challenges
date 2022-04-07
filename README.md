# ts-challenges
typescript 类型体操练习手册

### Day01 Hello world
实现一个类型HelloWorld，使它的类型和string保持一致
```typescript
type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>];
```
[查看解答](https://github.com/leno23/ts-challenges/blob/main/challenges/hello-world/template.ts)

---

### Day02 Pick
实现一个MyPick类型，可以从接口中抽取部分key组成新的接口
```typescript
type cases = [
  Expect<Equal<Expected1, MyPick<Todo, "title">>>,
  Expect<Equal<Expected2, MyPick<Todo, "title" | "completed">>>,
  // @ts-expect-error
  MyPick<Todo, "title" | "completed" | "invalid">
];
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}
```
[查看解答](https://github.com/leno23/ts-challenges/blob/main/challenges/pick/template.ts)

---
### Day03 
#### readonly
实现一个MyReadonly类型，设置接口中所有字段只读

```typescript
type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}
```
[查看解答](https://github.com/leno23/ts-challenges/blob/main/challenges/readonly/template.ts)

#### tuple-to-object

实现一个TupleToObject类型，遍历元组中所有key生成对象，value也为key
```typescript
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y'}>>,
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>
```
[查看解答](https://github.com/leno23/ts-challenges/blob/main/challenges/easy-first/template.ts)

#### first of array

实现一个First类型，获取数组中的第一个元素
```typescript
type cases = [
    Expect<Equal<First<[3, 2, 1]>, 3>>,
    Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
    Expect<Equal<First<[]>, never>>,
    Expect<Equal<First<[undefined]>, undefined>>
]

type errors = [
    // @ts-expect-error
    First<'notArray'>,
    // @ts-expect-error
    First<{ 0: 'arrayLike' }>,
]
```
[查看解答](https://github.com/leno23/ts-challenges/blob/main/challenges/easy-first/template.ts)

---

### Day04
#### length-of-tuple

返回元组的最后一个元素
```typescript
import { Equal, Expect } from '@type-challenges/utils'

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const


type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  // @ts-expect-error
  Length<5>,
  // @ts-expect-error
  Length<'hello world'>,
]
```
[查看解答](https://github.com/leno23/ts-challenges/blob/main/challenges/length-of-tuple/template.ts)

#### exclude

返回元组的最后一个元素
```typescript
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<MyExclude<"a" | "b" | "c", "a">, Exclude<"a" | "b" | "c", "a">>>,
    Expect<Equal<MyExclude<"a" | "b" | "c", "a" | "b">, Exclude<"a" | "b" | "c", "a" | "b">>>,
    Expect<Equal<MyExclude<string | number | (() => void), Function>, Exclude<string | number | (() => void), Function>>>,
]
```
[查看解答](https://github.com/leno23/ts-challenges/blob/main/challenges/exclude/template.ts)

#### easy-if

声明一个类型,传入三个类型,第一个为boolean类型,结果为后两个类型是否相同
```typescript
import { Equal, Expect } from "@type-challenges/utils";
// 使用 extends undefined 来判断传入类型为null
type If<C, T, F> = C extends undefined ? error : C extends true ? T : F;
type cases = [
    Expect<Equal<If<true, "a", "b">, "a">>,
    Expect<Equal<If<false, "a", 2>, 2>>
];
// @ts-expect-error
type error = If<null, "a", "b">;

```
[查看解答](https://github.com/leno23/ts-challenges/blob/main/challenges/eay-if/template.ts)

#### easy-await

声明一个类型，用来判断传入的是Promise类型
```typescript
    Expect<Equal<MyAwaited<Z>, string | number>>

```
[查看解答](https://github.com/leno23/ts-challenges/blob/main/challenges/easy-await/template.ts)

> 附：[ts类型体操仓库](https://github.com/type-challenges/type-challenges)

---
