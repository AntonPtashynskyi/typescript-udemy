export {};

interface Todo {
  id: string;
  title: string;
  description?: boolean;
  isDone: boolean;
}

type ReadOnlyTodo = Readonly<Todo>; // make all [keys] in interface read only!
type PartialTodo = Partial<Todo>; // all fields are optional

function updateTodo(todo: Todo, fieldsToUpdate: PartialTodo) {
  return { ...todo, ...fieldsToUpdate };
}

type RequireTodo = Required<Todo>; //Make all fields are Required!
