const privadoRouter = require('express').Router();


// Define uma rota para a página HTML
privadoRouter.get('/gerirProjetos', (req, res) => {
    // Envie o arquivo HTML como resposta para a solicitação HTTP
    res.sendFile('/sites/ap2/webServiceJSON/templates/backOffice/tabelaProjetos.html');
  });


module.exports = privadoRouter;
