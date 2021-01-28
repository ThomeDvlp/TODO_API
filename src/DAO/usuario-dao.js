const dados = require('../infra/sqlite-db')

class UsuariosDAO {

    static getAllUsuariosDados() {
        return (new Promise((resolve, reject) => {
            dados.all('SELECT * FROM USUARIOS', [],(err, rows) => {
                if(err)reject('Erro ao consultar usuários');
                else {
                    resolve(rows)
                }              
            })
        }           
        ))
    }

    static getUsuarioDadosByEmail(email) {
        return (new Promise((resolve, reject) => {
            dados.get(`SELECT * FROM USUARIOS WHERE email = ?`, [email], (err, row) => {
                if(err)reject(err)
                else resolve (row)
            })
        }))
    }

    // static postNovoUsuarioDados() {
    //     let array = [req.body.NOME, req.body.EMAIL, req.body.SENHA]
    //     return (new Promise((resolve, reject) => {
    //         dados.run(`INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES(?,?,?)`, array, 
    //         (err, row) => {
    //                 if(err) reject(`Erro ${err} ao inserir valores`)
    //                 else resolve (row)
    //         })         
    //     }))
    // }
}

module.exports = UsuariosDAO