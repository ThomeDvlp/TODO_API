//arquivo app é o servidor da aplicação TO_DO_API

// impotando fo framework express 
const express = require('express');
// importando widware body-parser
const bodyParser = require('body-parser');
// criando a constante  app com a funcionalidade do framework express
const app = express()
// importando os controladores do usuario
const usuarioController = require('./controllers/usuario-controller');
// importando os controladores de tarefas
const tarefaController = require ('./controllers/tarefa-controller');
// importando o arquivo bd.js que simula um banco de dados
const dados = require('./infra/bd')
// criando a constante port e atribuindo o valor 8080 que será referenciado como porta de escuta do aplicativo
const port = 8080

app.use(bodyParser.json());

usuarioController(app, dados);

tarefaController(app, dados);
// conectando o express a porta 8080, ao banco de dados e exibindo informação no console sobre o onde o servidor está rodando 
app.listen(port, () => console.log (`[INFO]: Servidor rodando em localhost:${port}`));
