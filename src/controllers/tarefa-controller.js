module.exports = (app) => {
  app.get('/tarefa', (req, res) =>
  {
    res.send('<h2>Rota ativada: Tarefa sendo consultadas</h2>');
  })

  app.post('/tarefa', (req, res) => {
    console.log(`Corpo da requisição: Nome: ${req.body.nome} curso: ${req.body.curso}`);
    res.send('Ok')
  })
}