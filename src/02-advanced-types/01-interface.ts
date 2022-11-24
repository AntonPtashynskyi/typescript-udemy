interface IUser {
  readonly email: string;
  readonly login: string;
  password: string;
}

interface IUser {
  // мы в любом месте можем дописывать значения к интерфейсу
  isOnline?: boolean;
}
//=============================
interface Person {
  readonly firstName: string;
  lastName: string;
  phone?: string;
  yearOfBirth?: number;
}

interface Employee extends Person, IUser {}
interface Developer extends Employee {
  skills: string[];
  level?: "junior" | "middle";
  phone: string;
  say?(): void;
  coding?: (arg: string) => void;
}

// class MyDeveloper implements Developer {}

//=============================
// можем добавлять свойства на обьет window
interface Window {
  isAuth?: boolean;
}

window.isAuth;
