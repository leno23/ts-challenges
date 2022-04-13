// 用于处理无值的情况，无参数则为T的所有key
type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [p in K]: T[p]
} & {
  [key in keyof Omit<T, K>] : T[key]
}