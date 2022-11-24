export class Circle {
  constructor(public radius: number) {}

  protected static pi: number = 3.14;
  // "static" - may be properties and method

  private static calculateArea(radius: number) {
    return this.pi * radius * radius;
  }

  get area() {
    return Circle.pi * this.radius * this.radius;
  }
}

const c1 = new Circle(15);
c1.area;

class Ellipse extends Circle {
  constructor(public radius: number) {
    super(radius);
    Circle.pi;
  }
}
