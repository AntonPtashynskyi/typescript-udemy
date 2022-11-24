//public, private, protected
export class Vehicle {
  //   private createdAt: Date;
  constructor(private createdAt: Date) {}

  public drive(speed: number): void {
    console.log("Driving", speed.toFixed());
    this.log(speed);
  }
  public stop() {
    console.log("Stopped");
  }
  private log(speed: number) {
    console.log("Vehicle has speed", speed, this.createdAt);
  }
  protected alternativeLog(text: string) {
    console.log(text.toLowerCase);
  }
}

class Car extends Vehicle {
  //   public color: string; // may be also "private", "protected"
  //   public maxSpeed: number;

  constructor(public readonly color: string, public maxSpeed: number) {
    super(new Date());
    // this.color = color;
    // this.maxSpeed = maxSpeed;
  }

  getInfo() {
    console.log(this.color, this.maxSpeed);
  }
}

const car1 = new Car("black", 200);
