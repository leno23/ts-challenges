
// 元组转化成对象
// 元组只读，需要指派为 数组类型，元素类型为string或bumber或symbol
// 将元组通过分布式条件类型转化成 联合类型，通过in关键字遍历、生成对象
type TupleToObject<
  T extends readonly (string | number | symbol)[]
> = {
  [P in T[number]]: P
}