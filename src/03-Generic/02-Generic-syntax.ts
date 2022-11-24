//Array<string>

type TypeFactory<T> = T;
// pass type<T> parameter like arguments in function, where further we can use it
type XType = TypeFactory<string>;

function toArray<T>(...arg: T[]): T[] {
  return arg;
}

toArray<number>(1, 2, 3);
toArray("1", "2", "3");

interface IStatusGeneric<T> {
  title: string;
  value: T; // number, array ...
}

const statusObj: IStatusGeneric<number> = {
  title: "Success",
  value: 200,
};

const statusObjArray: IStatusGeneric<Array<number>> = {
  title: "Success",
  value: [1, 2],
};

const bigHead = <T>(v: readonly T[]): T => {
  return v[0];
};
