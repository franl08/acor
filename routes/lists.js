const express = require("express");
const router = express.Router();
var Lists = require('../controllers/list')

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("lists");
});

router.post('/', function(req, res, next) {
  Lists.addlist(req.body)
    .then(data => res.send(data))
    .catch((err) => {
      console.log(err);
      res.status(500).send(`Erro ao acrescentar uma lista: ${err}`);
    });
});



module.exports = router;
