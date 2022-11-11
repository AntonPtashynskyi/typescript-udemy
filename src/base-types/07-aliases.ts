type MyBoolean = false | true;
type Status = "admin" | "user";

type ArrayOfPair = [string, string];
type Pairs = ArrayOfPair[];

type DifCar = {
  wheels: number;
  brand: string;
  type: string;
  isNew?: boolean;
  [key: string]: unknown; //dynamic property
};
