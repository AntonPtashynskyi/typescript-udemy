type WindowProp = keyof Window;
const myValue: WindowProp = "onabort";

interface PC {
  brand: string;
  year: number;
}

type Type1 = keyof PC; // in this case we get UNION with two key = brand | year
const newPc: Type1 = "brand";

type Tup1 = keyof [string, number];
const val2: Tup1 = "1";
