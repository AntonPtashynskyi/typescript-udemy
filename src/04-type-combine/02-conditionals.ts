const x = 16; // when we declare variable with CONST we get type LITERAL cause it can't be changed
const isXNegative = x >= 0 ? "no" : "yes"; // as condition result we get UNION type  "yes" ord "no"

// use like library
interface StringRecord {
  [key: string]: string;
}
interface DateRecord {
  [key: string]: Date;
}

type MyRecord<T> = T extends string ? StringRecord : DateRecord;
type Object1 = MyRecord<string>; //should be string!
type Object2 = MyRecord<number>; //should be number!
const o1: Object1 = { name: "Bob" };

export {};
