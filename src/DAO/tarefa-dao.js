const dados = require('../infra/sqlite-db')
const Tarefa = require('../models/tarefa')

class TarefasDAO {

    static getAllTarefasDados () 
    {
        return (new Promise((resolve, reject)=>
        {
            dados.all('SELECT * FROM TAREFAS', [], (err, rows)=>
            {
                if(err) reject('Erro ao consultar tarefas');
                else resolve(rows)                
            })
        }))
    }
    
    static getTarefasByIdUsuario (id_usuario) 
    {
        return (new Promise((resolve, reject)=>
        {
            dados.all(`SELECT * FROM TAREFAS WHERE ID_USUARIO = ?`, 
            [id_usuario], (err, row)=>
            {
                if(err) reject('erro no consulta')
                else resolve(row)
            })
            
        }))
    }
    

    static criaNovaTarefaDAO(arg) 
    {
        return (new Promise ((resolve, reject)=>
        {            
            dados.run
            (
                `INSERT INTO TAREFAS 
                (TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO) 
                VALUES(?,?,?,?,?)`, 
            [arg.titulo, arg.descricao, arg.status, arg.datacriacao, arg.id_usuario], 
            (err)=> 
            {
                if (err) reject(`Erro ao inserir valores`)
                else resolve('Nova tarefa criada com sucesso')
            })      
        }))
    }

    static updateTarefasDAO (id, body)
    {
        return (new Promise ((resolve, reject) =>
        {
            dados.run
            (
                `UPDATE TAREFAS SET TITULO=?, DESCRICAO=?, STATUS=?, DATACRIACAO=?, ID_USUARIO=? WHERE ID=?;`,
                [body.titulo, body.descricao, body.status, body.datacriacao, body.id_usuario, id], 
                (err)=>
                {
                    if (err) reject(`Falha na atualização de tarefas`)
                    else resolve ('Tarefa atualizada com sucesso')
                }
            )
        }))
    }

    static deleteTarefaDAO(id)
    {
        return (new Promise((resolve, reject) => 
        {
            dados.run(`DELETE FROM TAREFAS WHERE ID= ?`, 
            [id], (err)=> 
            {
                if (err) reject(err)
                else resolve ('Tarefa apagada')
            })
        }))
    }
}

module.exports = TarefasDAO
