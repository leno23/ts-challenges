
// 使用readonly约束类型T可读，然后取出length属性即可
type Length<T extends readonly any[]> = T['length']

