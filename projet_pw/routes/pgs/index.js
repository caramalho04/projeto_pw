const router = require('express').Router();
const projectRouter = require('./projetos');

router.use('/projetos', projectRouter);


module.exports = router;