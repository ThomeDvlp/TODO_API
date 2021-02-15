module.exports = class Tarefa {
    constructor (titulo, descricao, status, dataDeCriacao, id_usuario) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.status = status;
        this.dataDeCriacao = dataDeCriacao;
        this.id_usuario = id_usuario;
    }
}

