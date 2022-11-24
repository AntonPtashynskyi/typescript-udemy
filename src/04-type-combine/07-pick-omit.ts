export {};

type WellKnownBrand = "apple" | "lenovo" | "hp" | "dell" | "onePlus";

//create type for Object where utilities "Record" as a first parameter take <object key> and second <object value>
type Names = Record<string, number>;
type BrandNames = Record<WellKnownBrand, number>;

//===============
// utilities "Pick" take some object key from existing interface and create new with selected properties
interface Todo {
  id: string;
  title: string;
  isDone: boolean;
}

type PickTodo = Pick<Todo, "id" | "isDone">;

//===============
// "Omit" - remove some properties from interface
type OmittedTodo = Omit<Todo, "title">;
