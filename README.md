# ts-challenges
typescript 类型体操练习手册

### Day01 Hello world
实现一个类型HelloWorld，使它的类型和string保持一致
```typescript
type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>];
```
[查看解答](https://github.com/leno23/ts-challenges/blob/main/challenges/hello-world/template.ts)


### Day02 Pick
实现一个MyPick类型，可以从接口中抽取部分key组成新的接口
```typescript
type cases = [
  Expect<Equal<Expected1, MyPick<Todo, "title">>>,
  Expect<Equal<Expected2, MyPick<Todo, "title" | "completed">>>,
  // @ts-expect-error
  MyPick<Todo, "title" | "completed" | "invalid">
];
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}
```
[查看解答](https://github.com/leno23/ts-challenges/blob/main/challenges/pick/template.ts)

> 附：[ts类型体操仓库](https://github.com/type-challenges/type-challenges)
