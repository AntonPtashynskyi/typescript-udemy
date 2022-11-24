"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMap = void 0;
function createMap(list) {
    return function (cb) {
        const result = [];
        for (let el of list) {
            result.push(cb(el));
        }
        return result;
    };
}
exports.createMap = createMap;
const mapNum = createMap([1, 2, 3]);
const res = mapNum((num) => num + 2);
