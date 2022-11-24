"use strict";
//asserts - служить как утверждение что
//user is User and that user & has property displayName!
function assertDisplayName(user) {
    if (!user.displayName) {
        throw new Error("User has no display name");
    }
}
function loginUserByDisplayName(user) {
    assertDisplayName(user);
    console.log(user.displayName.toUpperCase());
}
