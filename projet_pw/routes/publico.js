const publicoRouter = require('express').Router();


// Define uma rota para a página HTML
publicoRouter.get('/', (req, res) => {
    // Envie o arquivo HTML como resposta para a solicitação HTTP
    res.sendFile('/sites/ap2/webServicePSG/templates/frontEnd/index.html');//mudar que está errado
  });


module.exports = publicoRouter;