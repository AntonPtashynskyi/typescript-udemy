"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prop = void 0;
// export function prop<T>(key: keyof T, obj: T): T[keyof T]
function prop(key, obj) {
    return obj[key];
}
exports.prop = prop;
// interface Laptop {
//   brand: string;
// }
// type F = Laptop["brand"];
const obj1 = { a: 1, b: 2, c: 3 };
prop("a", obj1);
// prop("x", obj1); // Error
