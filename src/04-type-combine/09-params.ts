export {};

function f1(arg: { a: number; b: string }) {
  return arg.a + arg.b;
}

// using operator "typeof" & utilities "ReturnType" we can get typeof return value from Function
type T0 = ReturnType<typeof f1>;

// "Parameters" Allow us to recognize entered parameters in the function
type T1 = Parameters<typeof f1>;

type T2 = ConstructorParameters<ErrorConstructor>;

class Car {
  constructor(brand: string, year: number) {}
}

type T3 = ConstructorParameters<typeof Car>;
