//public, private, protected
export class Vehicle {
  public drive(speed: number): void {
    console.log("Driving", speed.toFixed());
    this.log(speed);
  }
  public stop() {
    console.log("Stopped");
  }
  private log(speed: number) {
    // private method works only inside the class where is was declared.
    console.log("Vehicle has speed", speed);
  }
  protected alternativeLog(text: string) {
    // protected  may be use by methods from another classes but "can't modify" it && can't "use it from Instance"
    console.log(text.toLowerCase);
  }
}

class Car extends Vehicle {
  public changeSpeed(speed: number) {
    this.drive(speed);
    this.alternativeLog("Woooho work");
  }
}

const car1 = new Car();
car1.drive(44);
