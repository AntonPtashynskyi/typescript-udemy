export function sum(a: number, b: number) {
  return a + b;
}
const sum2 = (a: number, b: number) => a + b;

sum(10, 3);

function log(name: string, userId?: number): void {
  // void tell us that function is finished!
  console.log("Hello", name);
}
log("Anton", 1);

function crash(): never {
  // never - function never ends
  throw new Error("Error");
}

export function average(...numb: number[]) {
  const sum = numb.reduce((current, total) => current + total, 0);
  return sum / numb.length;
}
