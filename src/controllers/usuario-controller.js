const UsuariosDAO = require('../DAO/usuario-dao');

class UsuarioController {

	static getAllUsuarios() {
		return ((req, res) => {
			UsuariosDAO.getAllUsuariosDados()
			.then(rows => res.send(rows))
            .catch(err => {
                console.log(err)
                resp.send('deu erro')
            })
        })
	}

	static getUsuarioByEmail(email) {
		return ((req, res) => {
			UsuariosDAO.getUsuarioDadosByEmail(req.params.email).then(row=> res.send(row))
			.catch(err => {
				console.log(err)
				resp.send('deu erro')
			})
		})
	}

	static getUsuarioById(id) {
		return ((req, res) => {
			UsuariosDAO.getUsuarioByIdDAO(req.paramas.id).then(row=> res.send(row))
			.catch(err => {
				console.log(err)
				res.send('Falha ao localizar usuário pelo ID')
			})
		})
	}

	static postNovoUsuario() {
		return ((req, res) => {
			UsuariosDAO.postNovoUsuarioDados(req)
			.then(row => res.status(201).send({'response': 'Ok'}))
			.catch(err => {
				console.log(err)
				res.send('Falha ao adicionar novo usuário')
			})
		})		
	}

	static updateUsuario() {
		return( async (req, res)=>{
			const update = await UsuariosDAO.updateUsuarioDados(req.params.id, req.body)
			if (update == 'Sucesso na atualização do usuário') {
				res.status(200).send({'response': 'Sucesso na atualização do usuário.'})
			} else {
				res.send('deu erro')
			}
		})
		
	}

	static deleteUsuario() {
		return( async (req, res)=>{
			const usuarioDel = await UsuariosDAO.deleteUsuarioDados(req.params.email)
			if (usuarioDel == 'Usuario deletado') {
				res.status(200).send({'response': 'Ok'});
			}
		})
	}
} 

module.exports = UsuarioController;