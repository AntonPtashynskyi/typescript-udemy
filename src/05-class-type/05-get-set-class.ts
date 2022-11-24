export class Rectangle {
  constructor(public width: number, public height: number) {}

  get area(): number {
    return this.width * this.height;
  }
}

const rect1 = new Rectangle(20, 10);
rect1.area; // when we write "get" we may use method without invoking it rect1.area()

class Car {
  constructor(public readonly color: string, private _maxSpeed: number) {}

  get maxSpeed(): number {
    return this._maxSpeed;
  }

  set maxSpeed(speed: number) {
    if (speed > 0) this._maxSpeed = speed;
  }
}

const car1 = new Car("green", 120);
car1.maxSpeed = 100;
car1.maxSpeed;
