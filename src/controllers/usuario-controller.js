// arquivo que controla o usuário
// importando o modelo da classe de usuario
const e = require('express');
const Usuario = require('../models/usuario');
// definido tudo o que será exortado por esse arquivo usuario-controller
module.exports = (app, dados) => {
// mostra a lista de todos usuarios e seeus dados
  app.get('/usuario', (req, res) =>
  {
    res.send(dados.usuario);
  })
// faz a requisição apenas de um usuário defeinido pela chave primária de email
  app.get('/usuario/:email', (req, res) => {
// função que filtra da lista de usuário aquele que foi seelecionado  
    let resposta = [];
    for (let i=0; i < dados.usuario.length; i++) {
      
      if (dados.usuario[i].email == req.params.email) {
        resposta.push(dados.usuario[i])
      }
    }
    res.send(resposta);
  })
// utilização do verbo 'post' pra inserir na lista de usuários um novo usuário
  app.post('/usuario', (req, res) => {
    const novoUsuario = req.body;
    dados.usuario.push(novoUsuario);
    res.send('<h1>Rota Post de Usuario ativada: usuario adicionado no banco de dados</h1>');
  })

// utilização do vero 'delete' para apagar da lista um usuário
  app.delete('/usuario/:email', (req, res) =>{

    let listaUsuario = [];

    for (let i=0; i < dados.usuario.length; i++) {
      if (req.params.email !== dados.usuario[i].email) {
        listaUsuario.push(dados.usuario[i]);
      }
    }
    if(dados.usuario.length != listaUsuario.length) {
      
      res.send(`Usuario ${req.params.email} foi removido!`)
    } else {
      res.send(`Usuario ${req.params.email}  não foi encontrado!`);
    }
    dados.usuario = listaUsuario;
    
  })

// implemaentação da função UPDATE nos dados dos usuários
// Criando a função que atualiza o registro do usuario
const atualizaRegistro = (email, body) => {
  for (let usr of dados.usuario) {
    if (usr.email === email) {
      usr.nome = body.nome;
      usr.senha = body.senha;
    }
  }
}

app.put('/usuario/:email', (req, res)=> {
  //1. pegar o email que está sendo passado
  //2. Procurar no bd pelo email
  //3. Atualiza o registro de email fornecido pelo body
  atualizaRegistro(req.params.email, req.body);
  res.send('Dados do usuario atualizados')
  }) 
}