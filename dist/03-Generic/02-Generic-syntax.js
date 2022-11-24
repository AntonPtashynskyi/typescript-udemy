"use strict";
//Array<string>
function toArray(...arg) {
    return arg;
}
toArray(1, 2, 3);
toArray("1", "2", "3");
const statusObj = {
    title: "Success",
    value: 200,
};
const statusObjArray = {
    title: "Success",
    value: [1, 2],
};
const bigHead = (v) => {
    return v[0];
};
