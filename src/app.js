const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

const routes = require('./routes')

const port = process.env.PORT

routes(app);

app.listen(port, () => console.log (`[INFO]: Servidor rodando em localhost:${port}`));

// const usuarioController = require('./controllers/usuario-controller');
// const tarefaController = require ('./controllers/tarefa-controller');

// const dados = require('./infra/sqlite-db')

// usuarioController(app, dados);
// tarefaController(app, dados);


