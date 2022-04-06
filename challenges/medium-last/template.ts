// 首先，约束T为数组类型
// 然后，借助infer关键字，判断T能够解构出最后一个元素last，可以的话，返回last；否则，返回never
type Last<T extends any[]> = T extends [...any,infer last] ? last : never
