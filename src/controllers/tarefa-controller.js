const TarefasDAO = require('../DAO/tarefa-dao');

class TarefaController {

	static getAllTarefasUsuarios() {
		return ( async (req, res) => {
			try 
				{
					const tarefas = await TarefasDAO.getAllTarefasDados()
					res.send(tarefas);
				} 			
			catch
				{
					res.send(err)
				}
		})
	}
	
//problema em localizado as tarefas pelo id 
	static getTarefasByIdUsuario(id_usuario) 
	{
		return (async(req, res) => 		
		{
			try
				{
					const tarefasId = await TarefasDAO.getTarefasByIdUsuario(req.params.id_usuario)
					res.send(tarefasId);
				}
			catch
				{
					console.log("deu ruim");
					res.send(err)
				}		
		})

	}


	static criaNovaTarefa() 
	{
		return ( async (req, res)=> 
		{
			try
				{
					const novaTarefa = await TarefasDAO.criaNovaTarefaDAO()
					if (novaTarefa === 'Nova tarefa criada com sucesso')				
						res.send({'response': 'Nova tarefa criada com sucesso'})
				}
			catch
				{
					console.log(err)
					res.send('Falha ao adicionar nova tarefa')
				}
		})

	}

	static putTarefa()
	{
		return ( async (req, res)=>
		{
			try 
				{
					const updateTarefas = await TarefasDAO.updateTarefasDAO(req.params.id, req.body)
					if (updateTarefas === 'Tarefa atualizada com sucesso')
						res.send('Tarefa atualizada com sucesso');	
				}
			catch
				{
					console.log(err)
					res.send(`Falha na atualização de tarefas`)
				}
			

		})
	}

	static removeTarefa()
	{
		return ( async (req, res)=>
		{
			try 
				{
					const removeTarefa = await TarefasDAO.deleteTarefaDAO(req.params.id)
					if (removetarefa === 'Tarefa apagada')
						res.send('Tarefa apagada')
				}
			catch
				{
					console.log(err)
					res.send(`Falha na remoção de tarefas`)
				}
		})
	}
	
}

module.exports = TarefaController;
