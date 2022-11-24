"use strict";
const staticX = "loading";
function printID(id) {
    if (typeof id === "string") {
        return id.toLowerCase();
    }
    return id;
}
function welcome(person) {
    if (Array.isArray(person)) {
        return person.join(" ");
    }
    return person.toUpperCase();
}
