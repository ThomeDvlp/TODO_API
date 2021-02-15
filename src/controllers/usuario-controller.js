const UsuariosDAO = require('../DAO/usuario-dao');

class UsuarioController {

	static getAllUsuarios() {

		return ( async (req, res) => {
			try 
				{
					const usuarios = await UsuariosDAO.getAllUsuariosDados()
					res.status(200).send(usuarios);
				}
				catch 
				{
					res.send(err)
				}
        })

	}


	static getUsuarioByEmail() 
	{
		return (async(req, res) => 
		{
			try 
				{
					const locUsuarioEmail = await UsuariosDAO.getUsuarioByEmailDAO(req.params.email)
					res.status(200).send(locUsuarioEmail);
				}
			catch 
				{
					console.log("email não localizado");
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
					console.log(`Erro ao inserir valores`)
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