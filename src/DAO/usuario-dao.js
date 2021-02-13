const dados = require('../infra/sqlite-db')
const Usuario = require('../models/usuario');

class UsuariosDAO {

    static getAllUsuariosDados() 
   {
        return (new Promise((resolve, reject) => 
        {
            dados.all('SELECT * FROM USUARIOS', [],(err, rows) => 
            {
                if(err)reject('Erro ao consultar usuários');
                else resolve(rows)               
            })
        }           
        ))
    }

    static getUsuarioByEmailDAO(email) 
    {   
        return (new Promise((resolve, reject) => 
        {
            dados.get(`SELECT * FROM USUARIOS WHERE email = ?`, 
            [email], (err, row) => 
            {
                if(err)reject(err)
                else resolve (row)
            })
        }))
    }

    static getUsuarioByIdDAO(id) 
    {
        return (new Promise((resolve, reject)=> 
        {
            dados.get(`SELECT * FROM USUARIOS WHERE id = ?`, [id], (err, row) => 
            {
                if(err)reject(err)
                else resolve (row)
            })
        }))
    }

    static postNovoUsuarioDados(req) 
    {
        console.log(req.body);

        const novoUsuario = new Usuario
        (
            req.body.nome, 
            req.body.email, 
            req.body.senha
        );

        return (new Promise((resolve, reject) =>     
        {
            dados.run
            (
                `INSERT INTO USUARIOS 
                (NOME, EMAIL, SENHA) 
                VALUES(?,?,?)`, 
            [novoUsuario.nome,  novoUsuario.email, novoUsuario.senha], 
            (err) => 
            {
                    if(err) reject(`Erro ${err} ao inserir valores`)
                    else resolve ('Novo usuario criado com sucesso')
            })         
        }))
    }

    static updateUsuarioDados(id, body) 
    {
        return (new Promise((resolve, reject) => 
        {
            dados.run
            (
                "UPDATE USUARIOS SET NOME =?, EMAIL=?, SENHA=? WHERE ID=?;", 
            [body.nome, body.email, body.senha, id], (err)=>
            {
                if (err) reject(`Falha na operação de atualização do usuário ${err}`)
                else resolve ('Sucesso na atualização do usuário')
            })
        }))

    }

    static deleteUsuarioDados(email) 
    {
        return (new Promise((resolve, reject) => 
        {
            dados.run(`DELETE FROM USUARIOS WHERE EMAIL= ?`, 
            [email], (err)=> 
            {
                if (err) reject(err)
                else resolve ('Usuario deletado')
            })
        }))
    }
}

module.exports = UsuariosDAO