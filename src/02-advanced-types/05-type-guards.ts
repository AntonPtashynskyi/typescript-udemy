//Using type predicates!!!
type Fish = { swim: () => void };
type Bird = { fly: () => void };

// type guard as a Function!
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
  // проверяемна ключи в типе рыбы, в данном случае на плавать
}

function example4(animal: Fish | Bird) {
  if (isFish(animal)) {
    return animal.swim;
  }
  return animal.fly();
}
