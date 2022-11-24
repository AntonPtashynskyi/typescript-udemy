interface ICar {
  go(speed: number): void;
}

export class Car implements ICar {
  constructor() {}
  go(speed: number) {
    console.log("Riding", speed.toFixed());
  }
  stop() {
    console.log("Stop");
  }
}

const car = new Car();
car.go(20);
