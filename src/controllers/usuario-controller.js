const UsuariosDAO = require('../DAO/usuario-dao');

class UsuarioController {

	static getAllUsuarios() {
		return ((req, res) => {
            UsuariosDAO.getAllUsuariosDados().then(rows => res.send(rows))
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

	// static postNovoUsuario() {
	// 	return ((req, res) => {
	// 		UsuariosDAO.postNovoUsuarioDados()
	// 		.then(row => res.send(row))
	// 		.catch(err => {
	// 			console.log(err)
	// 			res.send('deu erro')
	// 		})
	// 	})		
	// }
} 

// (app, dados) => {

//   app.post('/usuario', (req, res) => {
//     const novoUsuario = req.body;
//     dados.usuario.push(novoUsuario);
//     res.send('<h1>Rota Post de Usuario ativada: usuario adicionado no banco de dados</h1>');
//   })

//   app.delete('/usuario/:email', (req, res) =>{

//     let listaUsuario = [];

//     for (let i=0; i < dados.usuario.length; i++) {
//       if (req.params.email !== dados.usuario[i].email) {
//         listaUsuario.push(dados.usuario[i]);
//       }
//     }
//     if(dados.usuario.length != listaUsuario.length) {
      
//       res.send(`Usuario ${req.params.email} foi removido!`)
//     } else {
//       res.send(`Usuario ${req.params.email}  não foi encontrado!`);
//     }
//     dados.usuario = listaUsuario;
    
//   })


// const atualizaRegistro = (email, body) => {
//   for (let usr of dados.usuario) {
//     if (usr.email === email) {
//       usr.nome = body.nome;
//       usr.senha = body.senha;
//     }
//   }
// }

// app.put('/usuario/:email', (req, res)=> {

//   atualizaRegistro(req.params.email, req.body);
//   res.send('Dados do usuario atualizados')
//   }) 
// }

module.exports = UsuarioController;