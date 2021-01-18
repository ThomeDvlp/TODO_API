module.exports = (app) => {
  app.get('/usuario', (req, res) =>
  {
    res.send('<h1>Oi, sou o usuario!!!</h1>');
  })
  app.post('/usuario', (req, res) => {
    res.send('Route post sendo utilizada por usuario')
  })
}