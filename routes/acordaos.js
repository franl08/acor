const express = require("express");
const router = express.Router();
var Acordaos = require('../controllers/acordao')

/* GET home page. */
router.get("/", function (req, res, next) {
  let page = req.query.page;
  let orderBy = req.query.orderBy;
  let keywords = req.query.keywords;
  Acordaos.listacordaos(page,orderBy,keywords)
    .then(data => res.send(data))
    .catch((err) => {
      console.log(err);
      res.status(500).send(`Erro na listagem dos acórdãos: ${err}`);
    });
});

router.get('/${id}', function(req, res, next) {
  Acordaos.getacordao(req.params.id)
    .then(data => res.send(data))
    .catch((err) => {
      console.log(err);
      res.status(500).send(`Erro ao mostrar o acórdão: ${err}`);
    });
});

router.post('/', function(req, res, next) {
  Acordaos.addacordao(req.body)
    .then(data => res.send(data))
    .catch((err) => {
      console.log(err);
      res.status(500).send(`Erro ao acrescentar um acórdão à BD: ${err}`);
    });
});

router.put('/${acordaoID}', function(req, res, next) {
  Acordaos.updateacordao(req.params.acordaoID,req.body)
    .then(data => res.send(data))
    .catch((err) => {
      console.log(err);
      res.status(500).send(`Erro ao alterar o acórdão: ${err}`);
    });
});

module.exports = router;
