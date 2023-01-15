"use strict";
exports.__esModule = true;
exports.add = void 0;
exports.subtract = void 0;
exports.divide = void 0;
exports.multiply = void 0;

var add = function (a, b) {
    return a + b;
};

var subtract = function (a, b) {
    return a - b;
};

var divide = function (a, b) {
    return a / b;
};

var multiply = function (a, b) {
    return a * b;
};

exports.add = add;
exports.subtract = subtract;
exports.divide = divide;
exports.multiply = multiply;

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
    console.log("Add 2 + 3 =", add(2, 3));
    console.log("Subtract 2 - 3 =", subtract(2, 3));
    console.log("Divide 2 / 3 =", divide(2, 3));
    console.log("Muliply 2 * 3 =", multiply(2, 3));
}
