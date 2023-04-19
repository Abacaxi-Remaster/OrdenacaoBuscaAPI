import express from 'express'
import cors from 'cors'
// Porta do servidor
const PORT = process.env.PORT || 4000
// Host do servidor
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'
// App Express
const app = express()
// Endpoint raiz
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
// Cors
app.use(cors({
    origin: ['http://localhost:3000']
}))
// Resposta padrão para quaisquer outras requisições:
app.use((req, res) => {
    res.status(404)
})
// Inicia o sevidor
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
})