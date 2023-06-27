const express = require("express");
const router = express.Router();
const auth = require("../utils/auth");
const User = require("../controllers/user");


router.post("/", function (req, res, next) {
  User.getByUsername(req.body.username).then(async ({password, ...user}) => {
    if (await auth.comparePasswords(req.body.password, password)) {
      res.send({ token: await auth.getToken(user), user });
    } else {
      res.status(401).send(err: "Invalid username or password");
    }
  }).catch((err) => {
    next(err);
  });
});


module.exports = router;
