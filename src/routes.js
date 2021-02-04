const usuarioController = require('./controllers/usuario-controller');
const tarefaController = require('./controllers/tarefa-controller');

module.exports = (app) => {

    app.get('/usuarios', usuarioController.getAllUsuarios());
    
    app.get('/usuarios/:email', usuarioController.getUsuarioByEmail());

    app.get('/usuarios/:id', usuarioController.getUsuarioById());

    app.post('/usuarios', usuarioController.postNovoUsuario());

    app.put('/usuarios/:id', usuarioController.updateUsuario());

    app.delete('/usuarios/:email', usuarioController.deleteUsuario());

    app.get('/tarefas', tarefaController.getTarefasUsuario());

    
}