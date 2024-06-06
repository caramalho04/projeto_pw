const projectRouter = require('express').Router();
const controller = require('../../controllers/pgs/projeto');

//testa a ligação à BD
carrosRouter.get('/testeConn', controller.testConnection); 

//CRUD para projetos
projectRouter.get('/', controller.getAll); //le todos
projectRouter.get('/:id', controller.getById); //le um projeto indicado pelo id
projectRouter.post('/create', controller.create); //criar um projeto
projectRouter.put('/update', controller.update); //atualizar um projeto
projectRouter.delete('/delete/:id', controller.delete); //apagar um projeto


module.exports = projectRouter;
