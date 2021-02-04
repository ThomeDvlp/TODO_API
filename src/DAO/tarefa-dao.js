const dados = require('../infra/sqlite-db')
const Tarefa = require('../models/tarefa')

class TarefasDAO {

    static getAllTarefasDados () {
        return (new Promise((resolve, reject)=>{
            dados.all('SELECT * FROM TAREFAS', [], (err, rows)=>{
                if(err) reject('Erro ao consultar tarefas');
                else resolve(rows)                
            })
        }))
     }
    
    
}

module.exports = TarefasDAO
