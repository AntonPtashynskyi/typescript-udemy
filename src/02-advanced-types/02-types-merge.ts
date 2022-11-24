type Union = "a" | "b" | "c" | "d";
type Union2 = "e" | "a" | "d" | "x";
type Union3 = Union | Union2; // all variaton
type Union4 = Union & Union2; // хранит только одинаковые типы 'd' 'a'!

type Union5 = { a: string; b?: string; c?: number } & {
  a: string;
  y?: boolean;
  z?: null;
}; // другая логика если работаем с обьектами
// const exampleUnion: Union5 = {
//   // a: 'hello'
//   b: "bye",
// };

export type User = {
  readonly email: string;
  readonly login: string;
  password: string;
};

type IPerson = {
  readonly firstName: string;
  lastName: string;
  phone?: string;
  yearOfBirth?: number;
};

type Employees = {
  skills: string[];
} & Person &
  IUser;

// const user10: Employees = {};
