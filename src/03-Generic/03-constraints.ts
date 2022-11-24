function printLength<T extends { length: number }>(arg: T): number {
  return arg.length;
}
// object - in some cases we can required object like and argument in generic

printLength("111"); // good
printLength("qwe"); // good
printLength([1, 2, 3]); // good
// printLength(true); // bad
// printLength(123); // bad

const objWithLength = {
  a: 1,
  length: 1,
};

printLength(objWithLength);
