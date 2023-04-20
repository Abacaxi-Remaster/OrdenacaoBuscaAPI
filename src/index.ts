import express from 'express'
import cors from 'cors'
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
    console.log("Teste");
    res.end();
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