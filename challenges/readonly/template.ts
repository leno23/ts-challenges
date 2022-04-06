
// ts中使用in 遍历一个接口，
// 由于接口中的key只能是string | number | symbol中的一种，而T是未约束类型，不能直接分配给接口的key
// 需要借助keyup
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};