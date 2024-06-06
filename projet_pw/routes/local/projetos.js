const projectRouter = require('express').Router();
const controller = require('../../controllers/local/projetos');

//CRUD para o projeto
carrosRouter.get('/', controller.getAll); //le todos
carrosRouter.get('/:id', controller.getById); //le 1 projeto pelo id
carrosRouter.post('/create', controller.create); //criar um novo carro
carrosRouter.put('/update', controller.update); //atualizar um carro
carrosRouter.delete('/delete/:id', controller.delete); //apagar um crro pelo id

module.exports = projectRouter;