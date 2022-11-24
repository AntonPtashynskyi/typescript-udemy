"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Vehicle {
    // "abstraction" means we came up with! but don't realized
    // abstract class look like Interface where we can describe some class
    stop() {
        console.log("Stopped");
    }
}
class Car extends Vehicle {
    constructor(color) {
        super();
        this.color = color;
    }
    drive(speed) {
        console.log("Driving", speed);
    }
}
exports.Car = Car;
