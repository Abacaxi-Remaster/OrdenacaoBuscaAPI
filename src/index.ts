import express from 'express'
import cors from 'cors'
import { randomArray, randomNumber } from './randomArray'
import { arrayToFile } from './arrayToFile'
const { exec } = require('child_process');
// Porta do servidor
const PORT = process.env.PORT || 4000
// Host do servidor
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'
// App Express
const app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// endpoint raiz
app.get('/', (req, res) => {
    var fileName = "/home.html";
    res.sendFile(__dirname + fileName, function (err) {
        if (err) {
            console.error(err);
        } else {
            console.log('Sent:', fileName);
        }
    })
    return;
})

// endpoint raiz
app.get('/favicon.ico', (req, res) => {
    var fileName = "/favicon.ico";
    res.sendFile(__dirname + fileName, function (err) {
        if (err) {
            console.error(err);
        } else {
            console.log('Sent:', fileName);
        }
    })
    return;
})

app.post('/run', (req, res) => {
    var length = req.body.length;
    var floor = req.body.floor;
    var ceil = req.body.ceil;
    var array = randomArray(length, floor, ceil);
    arrayToFile(array);

    var p = new Promise((resolve, reject) => {
        exec("./src/search/binarySearch " + length + " " + randomNumber(floor, ceil), function (err: string, cout0: string, cerr: string) {
            console.log(cout0);
        });

        exec("./src/search/ternarySearch " + length + " " + randomNumber(floor, ceil), function (err: string, cout1: string, cerr: string) {
            console.log(cout1);
        });

        exec("./src/sort/quickSort " + length, function (err: string, cout2: string, cerr: string) {
            console.log(cout2);
        });

        exec("./src/sort/mergeSort " + length, function (err: string, cout3: string, cerr: string) {
            console.log(cout3);
        });
        exec("./src/sort/bubb1eS" + length, function (err: string, cout4: string, cerr: string) {
            console.log(cout4);        });
    });

    p.then(function (resolve) {
        res.send("oi");
    });
    res.send("terminou");
})

// Cors
app.use(cors({
    origin: ['http://localhost:3000']
}))

// Resposta padrão para quaisquer outras requisições:
app.use((req, res) => {
    console.log(req);
    res.status(404);
})

// Inicia o sevidor
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
})