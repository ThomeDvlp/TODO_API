class ControllerUsuario {

  static rotaUsuario(){
      return ((req, resp) => {
          resp.send(`rota /usuario`)})
  }
}

module.exports = ControllerUsuario

// module.exports = (app) => {
//     app.get('/usuario', (req, res) => {
//     res.send('<h1>Rota ativada com GET e recurso usuario: valores de usuarios devem ser retornados</h1>')
//   })};