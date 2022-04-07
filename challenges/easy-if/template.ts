
// 这里的类型声明使用到error，写在这里会报错，但是写在test-cases里不会
// 暂时还没有找到原因。。
// type If<C, T, F> = C extends undefined ? error : C extends true ? T : F;