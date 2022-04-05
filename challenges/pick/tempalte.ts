// keyof T 会遍历得到T的所有key
// K extends keyof T 分布式条件类型
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
};

interface ToDo {
    name: string;
    age: number;
    do:()=>void
}
/************************************学习到的知识************************************/
// 1.静态的类型
// 自定义类型
type Type0 = string;
let v1: Type0 = "string";
// 使用单值作为类型
type Type1 = "jack";
let v2: Type1 = "jack";

// 联合类型
type Type2 = string | number;
let v3: Type2 = "string";
// 泛型
type Type3<T> = T;
let v4: Type3<"123"> = "123";

// 2.有条件的类型
//  T extends U ? X : Y 如果T能够赋值给U，则类型为X，否则为Y

type typeName<T> = T extends string
    ? "string"
    : T extends number
    ? "number"
    : T extends boolean
    ? "boolean"
    : T extends undefined
    ? "undefined"
    : T extends Function
    ? "function"
    : "object";

type t0 = typeName<string>; // 'string'
type t1 = typeName<2 | "jack">; // 'string‘ | 'number'
type t2 = typeName<typeName<"123">>;
type t3 = typeName<() => void>; // 'function
type t5 = typeName<never>; // never
type t6 = typeName<undefined>; // 'string'
type t7 = typeName<unknown>; // 'object
type t8 = typeName<any>; // "string" | "number" | "boolean" | "undefined" | "object" | "function"

// 3.分布式有条件类型
//  T extends U ? X : Y 如果T是联合类型，则结果也会被解析为联合类型
type t4 = typeName<string[] | number[]>; // ‘object'

type boxedValue<T> = { value: T };
type boxedArray<T> = { array: T[] };
type boxed<T> = T extends any[] ? boxedArray<T[number]> : boxedValue<T>;
type t30 = boxed<string>;
type t31 = boxed<string[]>;

type filter<T, U> = T extends U ? T : never;
type diff<T, U> = T extends U ? never : T;

type t32 = filter<1 | 2 | 3, 2 | 3 | 4>;
type NonNull<T> = diff<T, null | undefined>;

type t33 = NonNull<"jack" | 1000 | null | undefined>;

function f1<T>(x: T, y: NonNull<T>) {
    x = y;
    // y = x; // x类型为T，有可能为null，故不能被赋值到 NonNull<T>类型
}

type newType = MyPick<ToDo, "name">;
// 4有条件类型和映射类型结合
// 获取接口中的所有key作为新的联合类型
type PropertyNames<T> = { [K in keyof T]: K };
interface key {
  k1:string
  k2:string
}
type arr = { k1: 1; k2: 2 }[keyof key];
type FunctionPropertyNames<T> = {
    [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];

type t40 = PropertyNames<ToDo>; // 'age' | 'name'

// 5.有条件类型中的类型推断
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : any
type x = () => void
type re = MyReturnType<x>



