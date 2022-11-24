type User = {
  name: string;
  displayName: string | null;
};

//asserts - служить как утверждение что
//user is User and that user & has property displayName!
function assertDisplayName(
  user: User
): asserts user is User & { displayName: string } {
  if (!user.displayName) {
    throw new Error("User has no display name");
  }
}

function loginUserByDisplayName(user: User) {
  assertDisplayName(user);
  console.log(user.displayName.toUpperCase());
}
