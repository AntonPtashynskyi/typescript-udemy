let word: string | null = null;
const num = 10;

if (num < 5) {
  word = "abc";
}

// exclamation mark "!" tell us that value in variable is exist!!! (var is't null or undefined)
console.log(word!.toLowerCase());

export function printName(name?: string) {
  const fullName: string = name!;
}

interface Person {
  name: string;
  age: number;
}

function showName(person: Person) {
  person!.name;
}
