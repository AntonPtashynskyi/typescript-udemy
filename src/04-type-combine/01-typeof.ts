import { average } from "../base-types/02-functions";

let str = "Hello world";
type x = typeof str;
//automatically calculate the type, for example we can take the function and get there type

type Fn = typeof average;
const max: Fn = (...numbers) => Math.max(...numbers);

type ReturnFn = ReturnType<typeof average>;
// show us only returned value!!!
