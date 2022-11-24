"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
//public, private, protected
class Vehicle {
    drive(speed) {
        console.log("Driving", speed.toFixed());
        this.log(speed);
    }
    stop() {
        console.log("Stopped");
    }
    log(speed) {
        // private method works only inside the class where is was declared.
        console.log("Vehicle has speed", speed);
    }
    alternativeLog(text) {
        // protected  may be use by methods from another classes but "can't modify" it && can't "use it from Instance"
        console.log(text.toLowerCase);
    }
}
exports.Vehicle = Vehicle;
class Car extends Vehicle {
    changeSpeed(speed) {
        this.drive(speed);
        this.alternativeLog("Woooho work");
    }
}
const car1 = new Car();
car1.drive(44);
