const express = require('express');
const app = express()
const routes = require('./routes');

const port = 8080
routes =(app);

app.listen(port, () => console.log (`Servidor Ligado`))



// const express = require('express')
// const usuariosController = require('./controllers/usuarios-controller');
// //const tarefasController = require('./controllers/tarefas-controller');
// const port = 8080
// const tarefaController = require('./controllers/tarefas-controller')

// tarefaController(app)



// const app = express()




// let obj = {};

// function modificaObjeto (objetoQualquer) {
//   objetoQualquer.get = ('/path', (req, res)=> {
//       res.send
//   })
//   objetoQualquer.cursor = 'WebDev';
// }

// modificaObjeto(obj);

// // app.listen(port, () => {
// //   console.log(`Example app listening at http://localhost:${port}`)
// // })
