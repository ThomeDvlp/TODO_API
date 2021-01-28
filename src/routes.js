const usuarioController = require('./controllers/usuario-controller');
const tarefaController = require('./controllers/tarefa-controller');

module.exports = (app) => {

    app.get('/usuarios', usuarioController.getAllUsuarios());
    
    app.get('/usuarios/:email', usuarioController.getUsuarioByEmail());

    // app.post('/usuarios', usuarioController.postNovoUsuario());

}