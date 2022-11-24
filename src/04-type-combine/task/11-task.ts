export {};

type Style = "none" | "dotted" | "dashed" | "solid";
type Color = "Red" | "Green" | "Black" | "White";

type BorderStyle = `${Lowercase<Style>} ${Lowercase<Color>}`;

let BorderStyle1: BorderStyle = "dashed black";
