"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
//public, private, protected
class Vehicle {
    //   private createdAt: Date;
    constructor(createdAt) {
        this.createdAt = createdAt;
    }
    drive(speed) {
        console.log("Driving", speed.toFixed());
        this.log(speed);
    }
    stop() {
        console.log("Stopped");
    }
    log(speed) {
        console.log("Vehicle has speed", speed, this.createdAt);
    }
    alternativeLog(text) {
        console.log(text.toLowerCase);
    }
}
exports.Vehicle = Vehicle;
class Car extends Vehicle {
    //   public color: string; // may be also "private", "protected"
    //   public maxSpeed: number;
    constructor(color, maxSpeed) {
        super(new Date());
        this.color = color;
        this.maxSpeed = maxSpeed;
        // this.color = color;
        // this.maxSpeed = maxSpeed;
    }
    getInfo() {
        console.log(this.color, this.maxSpeed);
    }
}
const car1 = new Car("black", 200);
