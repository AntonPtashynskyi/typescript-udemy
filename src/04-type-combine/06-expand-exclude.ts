//EXCLUDE - исключить с первого второе!
type TO = Exclude<"a" | "b" | "c", "a">; // вычитает второе значение от первого Юниона // we get "b", "c"
type T1 = Exclude<"a" | "b" | "c", "b" | "c">; // we get "a"
type T2 = Exclude<string | number | (() => void), Function>; // string | number

type Status1 = "success" | "clientError" | "serverError" | 200 | 401 | 504;
type NumericStatus = Exclude<Status1, string>; // исключит из статуса все значениея которые являються STRING // we get| 200 | 401 | 504
type TextStatus = Exclude<Status1, number>; // we get all strings

//EXTRACT - извлекать схожие!
type T00 = Extract<"a" | "b" | "c", "a">;
type T01 = Extract<"a" | "b" | "c", "b" | "c">;
type T02 = Extract<string | number | (() => void), Function>;
type Status01 = "success" | "clientError" | "serverError" | 200 | 401 | 504;
type NumericStatus0 = Extract<Status1, number>;

interface Person {
  firstName: string;
  lastName: string;
  phone: string;
  yearOfBirth: number;
  sex: "female" | "male";
}

type OnlyName = Extract<keyof Person, "firstName" | "lastName" | "fullName">;

// NonNullable - выбрасывает пустые значения
type T001 = NonNullable<string | number | undefined>;
type T002 = NonNullable<string[] | null | undefined>;

export function keys<O extends object>(obj: O) {
  const currentKeys = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) currentKeys.push(key);
  }

  return currentKeys;
}

export {};
