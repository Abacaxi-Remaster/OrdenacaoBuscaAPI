"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const randomArray_1 = require("./randomArray");
const arrayToFile_1 = require("./arrayToFile");
const { exec } = require('child_process');
// Porta do servidor
const PORT = process.env.PORT || 4000;
// Host do servidor
const HOSTNAME = process.env.HOSTNAME || 'http://localhost';
// App Express
const app = (0, express_1.default)();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
// endpoint raiz
app.get('/', (req, res) => {
    var fileName = "/home.html";
    res.sendFile(__dirname + fileName, function (err) {
        if (err) {
            console.error(err);
        }
        else {
            console.log('Sent:', fileName);
        }
    });
    return;
});
// endpoint raiz
app.get('/favicon.ico', (req, res) => {
    var fileName = "/favicon.ico";
    res.sendFile(__dirname + fileName, function (err) {
        if (err) {
            console.error(err);
        }
        else {
            console.log('Sent:', fileName);
        }
    });
    return;
});
app.post('/run', (req, res) => {
    var length = req.body.length;
    var floor = req.body.floor;
    var ceil = req.body.ceil;
    var array = (0, randomArray_1.randomArray)(length, floor, ceil);
    (0, arrayToFile_1.arrayToFile)(array);
    var p = new Promise((resolve, reject) => {
        exec("./src/search/binarySearch " + length + " " + (0, randomArray_1.randomNumber)(floor, ceil), function (err, cout0, cerr) {
            console.log(cout0);
        });
        exec("./src/search/ternarySearch " + length + " " + (0, randomArray_1.randomNumber)(floor, ceil), function (err, cout1, cerr) {
            console.log(cout1);
        });
        exec("./src/sort/quickSort " + length, function (err, cout2, cerr) {
            console.log(cout2);
        });
        exec("./src/sort/mergeSort " + length, function (err, cout3, cerr) {
            console.log(cout3);
        });
        exec("./src/sort/bubb1eS" + length, function (err, cout4, cerr) {
            console.log(cout4);
        });
    });
    p.then(function (resolve) {
        res.send("oi");
    });
    res.send("terminou");
});
// Cors
app.use((0, cors_1.default)({
    origin: ['http://localhost:3000']
}));
// Resposta padrão para quaisquer outras requisições:
app.use((req, res) => {
    console.log(req);
    res.status(404);
});
// Inicia o sevidor
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`);
});
//# sourceMappingURL=index.js.map