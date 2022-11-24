export {};
interface Header {
  title: string;
  description: string;
  links: string[];
}
interface Footer {
  description: string;
  links: string[];
}
interface Body {
  title: string;
  content: {};
}

interface DataModel {
  id: string;
  title: string;
  elements: {
    header: Header;
    footer: Footer;
    body: [Body];
  };
}

type T0 = DataModel["elements"]["footer"]; // get footer from "Big" interface structure

type someTuple = [number, string, boolean, ...string[]];
const arr: someTuple = [1, "two", true, "three", "fore"];
type T1 = someTuple[0]; // get firs type of "someTuple";

const sizes = ["small", "medium", "large"] as const; //"as const" make array "read only" and we can't push something in this array
type T2 = typeof sizes[number]; // we get from array "literal Union type"
