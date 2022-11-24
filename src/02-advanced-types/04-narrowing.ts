function example1(x?: number | string) {
  if (typeof x === "string") {
    x.toLowerCase();
  } else if (typeof x === "number") {
    x.toFixed();
  }
}

function example2(str: string | string[] | null) {
  //   if (typeof str === "object ") {} // here is 'null' like and 'Array' is a object in JS.
  //   if (Array.isArray(str))
  if (str && typeof str === "object") {
    // editions check if 'str' is exist
    str.push();
  } else if (typeof str === "string") {
    str.toLowerCase();
  }
}

function example3(x: number[] | Date) {
  if (x instanceof Date) {
    // checking of instance
    x.getTime();
  } else {
    x.forEach((item) => item.toFixed());
  }
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function example4(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim;
  }
  return animal.fly();
}

export {};
