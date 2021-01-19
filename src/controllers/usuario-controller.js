module.exports = (app) => {
  app.get('/usuario', (req, res) =>
  {
    res.send('<h2>Rota ativada: Olá sou o Usuario</h2>');
  })

  app.post('/usuario', (req, res) => {
    console.log(`Corpo da requisição: ${req.body.nome}`);
    res.send('Ok')
  })
}
