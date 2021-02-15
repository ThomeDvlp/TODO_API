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
					res.status(200).send(tarefasId);
				}
			catch
				{
					console.log("deu ruim");
					res.send("erro")
				}		
		})

	}


	static criaNovaTarefa() 
	{
		return ( async (req, res)=> 
		{
			try
				{
					const novaTarefa = await TarefasDAO.criaNovaTarefaDAO(req.body)
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

	static updateTarefas()
	{
		return ( async (req, res)=>
		{
			try 
				{
					const updateTarefa = await TarefasDAO.updateTarefasDAO(req.params.id, req.body)
					if (updateTarefa === 'Tarefa atualizada com sucesso')
						res.status(200).send('Tarefa atualizada com sucesso');	
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
					res.status(200).send('Tarefa apagada')
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
