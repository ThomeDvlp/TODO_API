const express = require('express');
const bodyParser = require('body-parser');
const tarefaController = require ('./controllers/tarefa-controller');
const usuarioController = require('./controllers/usuario-controller');

const port = 8080

const app = express()

app.use(bodyParser.json());

usuarioController(app);
tarefaController(app);

app.listen(port, () => console.log (`[INFO]: Servidor rodando em localhost:${port}`));