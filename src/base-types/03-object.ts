interface ICar {
  wheels: number;
  brand: string;
  type: string;
  isNew?: boolean;
  [key: string]: unknown; //dynamic property
}

const car: ICar = {
  wheels: 4,
  brand: "Audi",
  type: "Hatchback",
  isNew: true,
};

// car.go = true;
car["go"] = true; // if it is dynamic recommended use like this.
