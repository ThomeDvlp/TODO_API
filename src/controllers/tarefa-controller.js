module.exports = (app) => {
  app.get('/tarefa', (req, res) =>
  {
    res.send('<h1>Oi, sou a tarefa!!!</h1>');
  })
  app.post('/tarefa', (req, res) => {
    res.send('Route post sendo utilizada por tarefa')
  })
}