const express = require('express');
const app = express()
// const routes = require('./routes');

const port = 8080

const tarefaController = require ('./controllers/tarefa-controller');

tarefaController(app);

const usuarioController = require('./controllers/usuario-controller');

usuarioController(app);

app.listen(port, () => console.log (`Ouvindo a porta em http://${port}`));