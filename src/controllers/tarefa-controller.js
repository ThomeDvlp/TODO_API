const Tarefa = require('../models/tarefa');

module.exports = (app, dados) => {
  app.get('/tarefa', (req, res) =>
  {
    res.send(dados.Tarefa);
  })

  // app.get('/tarefa/:')

  app.post('/tarefa', (req, res) => {
    const novaTarefa = req.body;
    dados.tarefa.push(novaTarefa);
    res.send('<h1> Rota Post de Tarefa ativada: tarefa adicionada ao bando de dados</h1>');
  });
};