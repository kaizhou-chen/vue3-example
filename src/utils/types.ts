// 定义一个【非数组和函数的对象类型】
export type OnlyObjectType<T> = T extends Function | Array<any> ? never : (T extends object ? T : never)