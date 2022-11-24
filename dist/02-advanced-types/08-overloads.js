"use strict";
function add(a, b) {
    return a + b;
}
function asyncSum(a, b, cb) {
    const res = a + b;
    if (cb) {
        return cb(res);
    }
    return Promise.resolve(res);
}
asyncSum(2, 2);
