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


---

### Day05
#### easy-push

向数组尾部添加一个元素
```typescript
import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'
type Push<T extends any[],U> = [...T,U]

type cases = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2], '3'>, [1, 2, '3']>>,
  Expect<Equal<Push<['1', 2, '3'], boolean>, ['1', 2, '3', boolean]>>,
]
```
[查看解答](https://github.com/leno23/ts-challenges/blob/main/challenges/easy-push/template.ts)

#### easy-concat

连接两个数组
```typescript
import { Equal, Expect } from '@type-challenges/utils'
type Concat<T extends any[],U extends any[]> = [...T,...U] 
type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
]
```
[查看解答](https://github.com/leno23/ts-challenges/blob/main/challenges/easy-concat/template.ts)

#### easy-unshift

向一个数组头部添加一个元素
```typescript
import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type Unshift<T extends any[],U> = [U,...T]
type cases = [
  Expect<Equal<Unshift<[], 1>, [1]>>,
  Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2,]>>,
  Expect<Equal<Unshift<['1', 2, '3'],boolean>, [boolean, '1', 2, '3']>>,
]
```
[查看解答](https://github.com/leno23/ts-challenges/blob/main/challenges/asy-unshift/template.ts)


#### easy-parameters

返回函数类型的参数类型序列
```typescript
import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

const foo = (arg1: string, arg2: number): void => {}
const bar = (arg1: boolean, arg2: {a: 'A'}): void => {}
const baz = (): void => {}

type cases = [
  Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
  Expect<Equal<MyParameters<typeof bar>, [boolean, {a: 'A'}]>>,
  Expect<Equal<MyParameters<typeof baz>, []>>,
]
```
[查看解答](https://github.com/leno23/ts-challenges/blob/main/challenges/easy-parameters/template.ts)

#### medium-last

返回元组的最后一个元素
```typescript
import { Equal, Expect } from '@type-challenges/utils'
type cases = [
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
]
```
[查看解答](https://github.com/leno23/ts-challenges/blob/main/challenges/medium-last/template.ts)

### DAY06

#### medium-chainable-options

支持链式操作的类型
```typescript
import { Equal, Expect } from '@type-challenges/utils'
type cases = [
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
]
```
[查看解答](https://github.com/leno23/ts-challenges/blob/main/challenges/medium-chainable-options/template.ts)

#### medium-deep-readonly

对一个对象深度可读
```typescript
import { Equal, Expect } from "@type-challenges/utils";

type cases = [Expect<Equal<DeepReadonly<X>, Expected>>];

type X = {
    a: () => 22;
    b: string;
    c: {
        d: boolean;
        e: {
            g: {
                h: {
                    i: true;
                    j: "string";
                };
                k: "hello";
            };
            l: [
                "hi",
                {
                    m: ["hey"];
                }
            ];
        };
    };
};

type Expected = {
    readonly a: () => 22;
    readonly b: string;
    readonly c: {
        readonly d: boolean;
        readonly e: {
            readonly g: {
                readonly h: {
                    readonly i: true;
                    readonly j: "string";
                };
                readonly k: "hello";
            };
            readonly l: readonly [
                "hi",
                {
                    readonly m: readonly ["hey"];
                }
            ];
        };
    };
};

```
[查看解答](https://github.com/leno23/ts-challenges/blob/main/challenges/medium-deep-readonly/template.ts)

#### medium-readonly-2

指定对象中部分属性可读
```typescript
import { Alike, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>,
]

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  description?: string
  completed: boolean
}

interface Expected {
  readonly title: string
  readonly description?: string
  completed: boolean
}
```
[查看解答](https://github.com/leno23/ts-challenges/blob/main/challenges/medium-readonly-2/template.ts)
#### medium-omit

去掉接口中部分字段组成新接口
```typescript
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>
]

// @ts-expect-error
type error = MyOmit<Todo, 'description' | 'invalid'>

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}
```
[查看解答](https://github.com/leno23/ts-challenges/blob/main/challenges/medium-omit/template.ts)
#### medium-pop

去除数组中的最后一个元素
```typescript
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd', ]>, ['a', 'b', 'c']>>,
]
```
[查看解答](https://github.com/leno23/ts-challenges/blob/main/challenges/medium-pop/template.ts)

---
> 附：[ts类型体操仓库](https://github.com/type-challenges/type-challenges)