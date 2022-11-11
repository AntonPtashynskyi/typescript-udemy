interface IPrintPointProp {
  x: string;
  y: string;
}

function printPoint(point: IPrintPointProp): void {
  console.log(point.x, point.y);
}

const obj1: IPrintPointProp = {
  x: "10",
  y: "20",
};
printPoint(obj1);

const obj2: IPrintPointProp = {
  x: "100",
  y: "200",
};

function printName(user: { firstName: string; lastName?: string }): void {
  console.log("Hello", user.firstName.toLocaleUpperCase());
  if (user.lastName) {
    console.log("Last name", user.lastName.toLocaleUpperCase());
  }
}
