const privadoRouter = require('express').Router();


// Define uma rota para a página HTML
privadoRouter.get('/gerirProjetos', (req, res) => {
    // Envie o arquivo HTML como resposta para a solicitação HTTP
    res.sendFile('/sites/ap2/project_pw/templates/backOffice/tabelaProjetos.html');//modar que nao sei se esta correto
  });


module.exports = privadoRouter;