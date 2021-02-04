const TarefasDAO = require('../DAO/tarefa-dao');

class TarefaController {

	static getTarefasUsuario() {
		return ((req, res) => {
			TarefasDAO.getAllTarefasDados()
			.then(rows => res.send(rows))
			.catch(err => {
				console.log(err);
				res.send('deu erro')
			})
		})
	}	
}

module.exports = TarefaController;

// module.exports = (app, dados) => {
//   app.get('/tarefa', (req, res) =>
//   {
//     res.send(dados.Tarefa);
//   })

//   // app.get('/tarefa/:')

//   app.post('/tarefa', (req, res) => {
//     const novaTarefa = req.body;
//     dados.tarefa.push(novaTarefa);
//     res.send('<h1> Rota Post de Tarefa ativada: tarefa adicionada ao bando de dados</h1>');
//   });
// };