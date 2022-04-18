type Item<T> = { 
  [K in keyof T]: T[K] extends Promise<infer R> ? R : T[K] 
};
declare function PromiseAll<T extends any[]>(
    values: readonly [...T]
): Promise<Item<T>>;
