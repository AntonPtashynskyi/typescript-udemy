type PcBrand = {
  name: string;
  country: string;
  createAt: Date;
};

type WellKnownBrand = "apple" | "lenovo" | "hp" | "dell" | "onePlus";

type MyPCRecord = {
  // [key: string]: PcBrand;
  // but like the "key" we can't set union literal type like "a" | "b" ect. WellKnownBrand
  // but!!
  // dynamic type type always write with the first Capital character!
  // (if) don't type "?" all fields from Union literal type are obligatory
  [BrandKey in WellKnownBrand]?: PcBrand;
};

const obj: MyPCRecord = {
  lenovo: {
    name: "fef",
    country: "Alabama",
    createAt: new Date(),
  },
};

function printPCCatalog(catalog: MyPCRecord) {
  console.log(catalog.dell);
}

type PartOfWindow = {
  [Key in "document" | "screen" | "navigator"]?: Window[Key];
};

const p: PartOfWindow = {
  screen: window.screen,
};
