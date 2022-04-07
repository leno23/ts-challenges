
type MyAwaited<T extends Promise<any>> = T extends Promise<infer F>
? F extends Promise<any>
    ? MyAwaited<F>
    : F
: never;