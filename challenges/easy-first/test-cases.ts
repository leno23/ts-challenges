import { Equal, Expect } from '@type-challenges/utils'

// 使用T extends any[]  来约束T的类型是数组
// 确定数组是否有第一项，有四种判断方法

// 1判断length是否为0
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

// 2如果T是空数组的话，返回never；否则，返回第一项
// type First<T extends any[]> = T extends [] ? never : T[0]

// 3使用infer关键字，意思是如果T可以使用数组解构出第一个元素的话，返回第一个元素，否则返回never
// type First<T extends any[]> = T extends [infer A,...infer B] ? A:never

// 4使用分布式条件类型 将数组T转换成union类型([1,2,3] --> 1|2|3),借助到 T[number]
type First<T extends any[]> = T[0] extends T[number] ? T[0]:never



type t0 = { 0: 'arrayLike' }
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