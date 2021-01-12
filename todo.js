
const express = require('express')
const app = express()
const port = 8080

app.get('/usuario', (req, res) => {
  res.send('<h1>Rota ativada com GET e recurso usuario: valores de usuarios devem ser retornados</h1>')
})

app.get('/tarefa', (req, res) => {
  res.send('<h1>Rota ativada com GET e recurso tarefa: valores de tarefa devem ser retornados</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
