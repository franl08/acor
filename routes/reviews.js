const express = require("express");
const router = express.Router();
const axios = require("axios");
var Reviews = require('../controllers/review')

/* GET home page. */
router.get("/", function (req, res, next) {
  let page = req.query.page;
  let orderBy = req.query.orderBy;
  let keywords = req.query.keywords;
  Reviews.listreviews(page,orderBy,keywords)
    .then(data => res.send(data))
    .catch((err) => {
      console.log(err);
      res.status(500).send(`Erro na listagem das reviews: ${err}`);
    });
});

router.get('/:id', function(req, res, next) {
  Reviews.getreview(req.params.id)
    .then(data => res.send(data))
    .catch((err) => {
      console.log(err);
      res.status(500).send(`Erro ao mostrar a review: ${err}`);
    });
});

router.post('/', function(req, res, next) {
  Reviews.addreview(req.body)
    .then(data => res.send(data))
    .catch((err) => {
      console.log(err);
      res.status(500).send(`Erro ao acrescentar uma review à BD: ${err}`);
    });
});

router.post('/accept/:id', function(req, res, next) {
  accept = req.body.adicionar
  if (accept) {
    axios.post('/', req.body)
      .then(data => res.send(data))
      .catch((err) => {
        console.log(err);
        res.status(500).send(`Erro ao acrescentar uma review à BD: ${err}`);
      });
  }
  else {
    axios.put('/${req.params.id}',req.body)
      .then(data => res.send(data))
      .catch((err) => {
        console.log(err);
        res.status(500).send(`Erro ao acrescentar uma review à BD: ${err}`);
      });
  }
});

router.delete('/:id', function(req, res, next) {
  Reviews.deletereview(req.params.id)
    .then(data => res.send(data))
    .catch((err) => {
      console.log(err);
      res.status(500).send(`Erro ao eliminar a review da BD: ${err}`);
    });
});

module.exports = router;
