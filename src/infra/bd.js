const Usuario = require('../models/Usuario');

const bancoDeDados = {
    usuario: [
        new Usuario ('Robeto', 'thomedvlp@gmail.com', 'senhaFracaDeTeste'),
        new Usuario ('Joaquim','joca@gmail.com','senhaFracaDeTeste'),
        new Usuario ('Daniela','dani@gmail.com','senhaFracaDeTeste'),
        new Usuario ('Fernanda','nanda@gmail.com','senhaFracaDeTeste'),
    ],
    tarefa: [],
};

module.exports = bancoDeDados;
// module.exports = {
//     usuario: [
//         {
//             nome: 'Roberto',
//             email: 'thomedvlp@gmail.com',
//             senha: 'senhaFracaDeTeste'
//         },
//         {
//             nome: 'Joaquim',
//             email: 'joca@gmail.com',
//             senha: 'senhaFracaDeTeste' 
//         },
//         {
//             nome: 'Daniela',
//             email: 'dani@gmail.com',
//             senha: 'senhaFracaDeTeste'
//         },
//         {
//             nome: 'Fernanda',
//             email: 'nanda@gmail.com',
//             senha: 'senhaFracaDeTeste'
//         },
//         // {
//         //     nome: 'Roberto',
//         //     email: 'thomedvlp@gmail.com',
//         //     senha: 'senhaFracaDeTeste'
//         // },
//         // {
//         //     nome: 'Joaquim',
//         //     email: 'joca@gmail.com',
//         //     senha: 'senhaFracaDeTeste' 
//         // },
//         // {
//         //     nome: 'Daniela',
//         //     email: 'dani@gmail.com',
//         //     senha: 'senhaFracaDeTeste'
//         // },
//         // // {
//         // //     nome: 'Fernanda',
//         // //     email: 'nanda@gmail.com',
//         // //     senha: 'senhaFracaDeTeste'
//         // // }
//     ],
//     tarefa:[]
// }