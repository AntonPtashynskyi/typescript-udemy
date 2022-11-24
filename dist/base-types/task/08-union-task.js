"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function gradeDeveloper(developLevel: Level) {
//   switch (developLevel) {
//     case "junior":
//       return "Salary 1000$";
//     case "middle":
//       return "Salary 1500$";
//     case "senior":
//       return "Salary 3000$";
//     default:
//       return developLevel;
//   }
// }
function gradeDeveloper(user, newLevel) {
    user.level = newLevel;
}
const dev1 = {
    level: "junior",
    name: "bob",
    skills: [],
};
gradeDeveloper(dev1, "middle");
console.log(dev1);
