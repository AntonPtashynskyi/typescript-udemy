type Stat = "ok" | "loading" | "error";

const staticX: Stat = "loading";

function printID(id: number | string): number | string {
  if (typeof id === "string") {
    return id.toLowerCase();
  }
  return id;
}

function welcome(person: [string, string] | string) {
  if (Array.isArray(person)) {
    return person.join(" ");
  }
  return person.toUpperCase();
}
