interface AnyObject {
  [ket: string]: unknown;
}

export async function request<T = AnyObject>(url: string): Promise<T> {
  const response = await fetch(url);
  return response.json();
}

interface IResponseTodo {
  id: number;
  completed: boolean;
}
const data = request<IResponseTodo[]>("");
