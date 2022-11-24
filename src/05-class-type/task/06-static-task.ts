export class Temperature {
  constructor(public celsius: number) {}

  get fahrenheit(): number {
    return this.celsius * 1.8 + 32;
  }

  set fahrenheit(value: number) {
    this.celsius = (value - 32) / 1.8;
  }

  public static fromFahrenheit(value: number) {
    return new Temperature(Math.round((value - 32) / 1.8));
  }
}

const temp0 = Temperature.fromFahrenheit(80); // create instance from static method also we will be have all method and properties
temp0.celsius;

const temp1 = new Temperature(20);
temp1.fahrenheit = 22;
temp1.fahrenheit;
