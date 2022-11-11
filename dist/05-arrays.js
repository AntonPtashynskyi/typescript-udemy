"use strict";
const numbers = [1, 2, 3, 4, 5];
const strings = [];
const string2 = [];
strings.push("2");
const catsArr = [];
catsArr.push({ name: "Kty", age: 20 });
const arrayOfArray = [];
arrayOfArray.push(["You can push only array with the string"]);
function printArr(arr) {
    arr.forEach((el, i, arr) => {
        console.log(el, i);
    });
}
