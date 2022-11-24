"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function example1(x) {
    if (typeof x === "string") {
        x.toLowerCase();
    }
    else if (typeof x === "number") {
        x.toFixed();
    }
}
function example2(str) {
    //   if (typeof str === "object ") {} // here is 'null' like and 'Array' is a object in JS.
    //   if (Array.isArray(str))
    if (str && typeof str === "object") {
        // editions check if 'str' is exist
        str.push();
    }
    else if (typeof str === "string") {
        str.toLowerCase();
    }
}
function example3(x) {
    if (x instanceof Date) {
        // checking of instance
        x.getTime();
    }
    else {
        x.forEach((item) => item.toFixed());
    }
}
function example4(animal) {
    if ("swim" in animal) {
        return animal.swim;
    }
    return animal.fly();
}
