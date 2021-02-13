const UsuariosDAO = require('../DAO/usuario-dao');

class UsuarioController {

	static getAllUsuarios() {

		return ( async (req, res) => {
			try 
				{
					const usuarios = await UsuariosDAO.getAllUsuariosDados()
					res.send(usuarios);
				}
				catch 
				{
					res.send(err)
				}
        })

	}


	static getUsuarioByEmail(email) 
	{
		return (async(req, res) => 
		{
			try 
				{
					const locUsuarioEmail = await UsuariosDAO.getUsuarioByEmailDAO(req.params.email)
					res.send(locUsuarioEmail);
				}
			catch 
				{
					console.log("email não localizado");
					res.send(err);
				}
		})

	}

		//função getUsuarioById não está retornado nada debugar depois de terminar o crud de trarefas
	static getUsuarioById(id) {

		return ( async (req, res) => {
			try 
				{
					const locUsuarioId = await UsuariosDAO.getUsuarioByIdDAO(req.params.id)
					res.send(locUsuarioId);
				}
			catch
				{
					console.log('Falha ao localizar usuário pelo ID')
					res.send(err);
				}		
			})

		}


	static postNovoUsuario() {

		return ( async (req, res) => {
			try 
				{
					const novoUsuario = await UsuariosDAO.postNovoUsuarioDados(req)
					if (novoUsuario === 'Novo usuario criado com sucesso') 
					{
						res.status(200).send({'response': 'Novo usuario criado com sucesso'})
					} 
				}
			catch
				{
					console.log(err)
					res.send('Falha ao adicionar novo usuário')
				}		
		})

	}

	static updateUsuario() {

		return( async (req, res)=>{
			try
				{
					const update = await UsuariosDAO.updateUsuarioDados(req.params.id, req.body)	
					if (update == 'Sucesso na atualização do usuário') 
					{
						res.status(200).send({'response': 'Sucesso na atualização do usuário.'})
					}
				}
			
			catch 
				{
					res.send('deu erro')
				}	
		})
		
	}

	static deleteUsuario() {

		return( async (req, res)=>{
			try 
				{
					const usuarioDel = await UsuariosDAO.deleteUsuarioDados(req.params.email)
					if (usuarioDel == 'Usuario deletado') 
					{
						res.status(200).send({'response': 'Ok'});	
					} 
				}
			catch{
				res.send('deu erro')
			}
		})

	}
}

module.exports = UsuarioController;