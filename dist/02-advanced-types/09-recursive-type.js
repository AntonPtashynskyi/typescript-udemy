"use strict";
const numb = [1, 2, [1, 3, [0, 20]]];
numb.push(1);
numb.push([1, [1, 3, 5]]);
function isJSON(arg) { }
isJSON("hi");
isJSON(200);
isJSON({ a: "123", b: [1, 2], o: {} });
isJSON([1, { x: 20 }]);
