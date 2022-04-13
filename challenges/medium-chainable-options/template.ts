type Id<T> = {[K in keyof T]: T[K]}

type Chainable<STATE extends object = {}> = {
  option<K extends string, V extends any>(key: K, value: V): Chainable<STATE & {[X in K]: V}>
  get(): Id<STATE>
}