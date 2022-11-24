function fromPair(pair: [string, string]) {
  const [key, value] = pair;

  return {
    [key]: value,
  };
}

// Infer let us get Type from already exist structure like function or Class!

type FirstArg<T> = T extends (first: infer First, ...args: any[]) => any
  ? First
  : never;

const MyPair: FirstArg<typeof fromPair> = ["myKey", "myValue"];
fromPair(MyPair);

type ConstructorFirstArgs<T> = T extends {
  new (arg: infer FirstArgs, ...args: any[]): any;
}
  ? FirstArgs
  : never;

class Computer {
  constructor(brand: string) {}
}

let brand: ConstructorFirstArgs<typeof Computer> = "21";
let date: ConstructorFirstArgs<typeof Date> = 131232321312;
