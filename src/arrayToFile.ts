import * as fs from 'fs';

const myArray = [1, 2, 3, 4, 5];
arrayToFile(myArray);

export function arrayToFile(array: number[]): void {
    const filename = 'data/array.csv';
    const stream = fs.createWriteStream(filename);

    clearFile(filename);

    // stream.write('Value\n'); // Add header row

    const value = array.join(',');
    stream.write(value);

    stream.end();
}

function clearFile(filename: string): void {
    fs.writeFileSync(filename, '');
}