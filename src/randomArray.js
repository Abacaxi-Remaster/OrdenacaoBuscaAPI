"use strict";
exports.__esModule = true;
var arrayToFile_1 = require("./arrayToFile");
var array = randomArray(100, 0, 10);
(0, arrayToFile_1.arrayToFile)(array);
function randomArray(length, floor, ceil) {
    var array = [];
    for (var i = 0; i < length; i++) {
        array[i] = randomNumber(ceil, floor);
    }
    return array;
}
function randomNumber(floor, ceil) {
    return Math.floor(Math.random() * (ceil - floor)) + floor;
}
