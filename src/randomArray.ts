import { arrayToFile } from "./arrayToFile";

var array = randomArray(100, 0, 10);
arrayToFile(array);

const { exec } = require('child_process');

exec("./search/binarySearch 100 3", (err: string, cout: string, cerr: string) => {
    if (err) {
        console.error("could not execute command: ", err);
        return;
    }
    console.log("Output: \n", cout);
    console.log("Errors: \n", cerr);
})

function randomArray(length: number, floor: number, ceil: number): number[] {
    var array: number[] = [];
    for (var i = 0; i < length; i++) {
        array[i] = randomNumber(ceil, floor);
    }
    return array;
}

function randomNumber(floor: number, ceil: number) {
    return Math.floor(Math.random() * (ceil - floor)) + floor;
}