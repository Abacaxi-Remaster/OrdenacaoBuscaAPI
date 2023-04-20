import { arrayToFile } from "./arrayToFile";


// var array = randomArray(100000, 0, 10000);
// var qntNumerosArray = "100000";
// var acharNumero = "5";
// var arrayPromises = [];
// var vetorDosAlgoritmos = ['search/binarySearch', 'search/ternarySearch'];

// arrayToFile(array);

// const { exec } = require('child_process');

// for (var i = 0; i < 2; i++) {
//     var arrayAuxiliar = vetorDosAlgoritmos[i];
//     console.log("g++ " + arrayAuxiliar + ".cpp -o " + arrayAuxiliar);
//     arrayPromises[i] = new Promise((resolve, reject) => {
//         exec("g++ " + arrayAuxiliar + ".cpp -o " + arrayAuxiliar, function (err: string, cout: string, cerr: string) {
//             if (err) {
//                 console.error("could not execute command: ", err);
//                 return;
//             }
//             resolve(true);
//         });
//     });

// }

// for (var i = 0; i < 2; i++) {
//     var arrayAuxiliar = vetorDosAlgoritmos[i];
//     arrayPromises[i].then(function (resolve) {
//         exec("./" + arrayAuxiliar + " " + qntNumerosArray + " " + acharNumero, function (err: string, cout: string, cerr: string) {
//             if (err) {
//                 console.error("could not execute command: ", err);
//                 return;
//             }
//             console.log("Output: " + i + " \n", cout);
//             console.log("Errors: \n", cerr);
//         });

//     });
// }

// var array = randomArray(10, 0, 10);
// arrayToFile(array);

// exec("./search/ternarySearch 10 3", function (err: string, cout: string, cerr: string) {
//     if (err) {
//         console.error("could not execute command: ", err);
//         return;
//     }
//     console.log("Output: \n", cout);
//     console.log("Errors: \n", cerr);
// });


export function randomArray(length: number, floor: number, ceil: number): number[] {
    var array: number[] = [];
    for (var i = 0; i < length; i++) {
        array[i] = randomNumber(ceil, floor);
    }
    return array;
}

export function randomNumber(floor: number, ceil: number) {
    return Math.floor(Math.random() * (ceil - floor)) + floor;
}