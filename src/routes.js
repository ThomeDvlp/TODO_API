const usuarioController = require('./controllers/usuario-controller');
const tarefaController = require('./controllers/tarefa-controller');

module.exports = (app) => {

    app.get('/usuarios', usuarioController.getAllUsuarios());
    
    app.get('/usuarios/:email', usuarioController.getUsuarioByEmail());

    app.post('/usuarios', usuarioController.postNovoUsuario());

    app.put('/usuarios/:id', usuarioController.updateUsuario());

    app.delete('/usuarios/:email', usuarioController.deleteUsuario());

    app.get('/tarefas', tarefaController.getAllTarefasUsuarios());

    app.get('/tarefas/:id_usuario', tarefaController.getTarefasByIdUsuario());

    app.post('/tarefas', tarefaController.criaNovaTarefa());

    app.put('/tarefas/:id', tarefaController.updateTarefas());

    app.delete('/tarefas/:id', tarefaController.removeTarefa());
}