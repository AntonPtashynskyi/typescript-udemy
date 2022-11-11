"use strict";
function printPoint(point) {
    console.log(point.x, point.y);
}
const obj1 = {
    x: "10",
    y: "20",
};
printPoint(obj1);
const obj2 = {
    x: "100",
    y: "200",
};
function printName(user) {
    console.log("Hello", user.firstName.toLocaleUpperCase());
    if (user.lastName) {
        console.log("Last name", user.lastName.toLocaleUpperCase());
    }
}
