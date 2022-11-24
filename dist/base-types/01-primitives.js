"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//number
let x = 10;
let n = NaN;
// let y = 123n; //big int
//string
let str;
str = "Hello world";
let symbol = Symbol("10");
// let add = str + symb
//boolean
let o = true;
o = false;
// o = 1;
//nothing
let h = undefined;
let g = null;
//literal одно значение которое не может быть изменено
const num = 100;
const str2 = "String 2";
// universal
let small = 1;
if (typeof small === "number") {
    small.toFixed();
}
small = "str";
small = [];
let xxx = 2;
if (typeof xxx === "string") {
    xxx.toLowerCase();
}
