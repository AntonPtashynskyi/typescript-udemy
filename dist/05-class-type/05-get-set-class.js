"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get area() {
        return this.width * this.height;
    }
}
exports.Rectangle = Rectangle;
const rect1 = new Rectangle(20, 10);
rect1.area; // when we write "get" we may use method without invoking it rect1.area()
class Car {
    constructor(color, _maxSpeed) {
        this.color = color;
        this._maxSpeed = _maxSpeed;
    }
    get maxSpeed() {
        return this._maxSpeed;
    }
    set maxSpeed(speed) {
        if (speed > 0)
            this._maxSpeed = speed;
    }
}
const car1 = new Car("green", 120);
car1.maxSpeed = 100;
car1.maxSpeed;
