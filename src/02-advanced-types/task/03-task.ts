interface IProduct {
  price: number;
  isNew: boolean;
  title: string;
}

interface IVehicle {
  wheels: number;
  year: number;
  brand: string;
}

interface ICar1 extends IProduct, IVehicle {
  type: string;
  model: string;
}

// const newCar: ICar = {
// }

type Product = {
  price: number;
  isNew: boolean;
  title: string;
};

type Vehicle = {
  wheels: number;
  year: number;
  brand: string;
};

type Car = Product &
  Vehicle & {
    type: string;
    model: string;
  };
