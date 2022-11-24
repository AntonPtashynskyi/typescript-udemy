"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor() { }
    go(speed) {
        console.log("Riding", speed.toFixed());
    }
    stop() {
        console.log("Stop");
    }
}
exports.Car = Car;
const car = new Car();
car.go(20);
