"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logIn(user) {
    if (user.login.length > 0 && user.password.length > 0) {
        console.log(`Welcome ${logIn}`);
    }
    console.log("Please fill the fields");
}
const user = {
    email: "joe@mail.com",
    isOnline: false,
    lastVisited: new Date(2022, 5, 22),
    login: "CoolJoe",
    password: "111023",
};
logIn(user); // Good :)
