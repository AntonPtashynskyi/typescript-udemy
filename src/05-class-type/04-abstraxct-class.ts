abstract class Vehicle {
  abstract color: string;
  // from abstract class we CAN'T create instance
  // but we can have note only abstract classes also and property
  abstract drive(speed: number): void;
  // "abstraction" means we came up with! but don't realized
  // abstract class look like Interface where we can describe some class

  public stop() {
    console.log("Stopped");
  }
}

export class Car extends Vehicle {
  constructor(public color: string) {
    super();
  }
  drive(speed: number): void {
    console.log("Driving", speed);
  }
}
