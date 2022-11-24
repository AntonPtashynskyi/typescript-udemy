"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.average = exports.sum = void 0;
function sum(a, b) {
    return a + b;
}
exports.sum = sum;
const sum2 = (a, b) => a + b;
sum(10, 3);
function log(name, userId) {
    // void tell us that function is finished!
    console.log("Hello", name);
}
log("Anton", 1);
function crash() {
    // never - function never ends
    throw new Error("Error");
}
function average(...numb) {
    const sum = numb.reduce((current, total) => current + total, 0);
    return sum / numb.length;
}
exports.average = average;
