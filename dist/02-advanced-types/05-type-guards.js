"use strict";
// type guard as a Function!
function isFish(pet) {
    return pet.swim !== undefined;
    // проверяемна ключи в типе рыбы, в данном случае на плавать
}
function example4(animal) {
    if (isFish(animal)) {
        return animal.swim;
    }
    return animal.fly();
}
