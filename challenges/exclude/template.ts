
// 分布式条件类型，剔除掉T中的类型K 
// 1|2|3  extends 2相当于 (1 extends 2) | (2 extends 2) | (3 extends 2)
// 最终结果为 1 | never | 3 --> 1 | 3
type MyExclude<T,K> = T extends K ? never :T