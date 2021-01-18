class ControllerTarefa {

  static rotaTeste(){
      return ((req, resp) => {
          resp.send(`rota /teste`)})
  }
}

module.exports = ControllerTarefa


// module.exports = (app)=> {
//     app.get('/tarefa', (req, res) => {
//     res.send('<h1>Rota ativada com GET e recurso tarefa: valores de tarefa devem ser retornados</h1>');
//     app.post('/tarefa', (req, res) => {

//     })
//   })};