interface Cat {
  name: string;
  age: number;
}

const numbers = [1, 2, 3, 4, 5];
const strings: string[] = [];
const string2: Array<number> = [];

strings.push("2");

const catsArr: Cat[] = [];
catsArr.push({ name: "Kty", age: 20 });

const arrayOfArray: string[][] = [];
arrayOfArray.push(["You can push only array with the string"]);

function printArr(arr: unknown[]): void {
  arr.forEach((el, i, arr) => {
    console.log(el, i);
  });
}
