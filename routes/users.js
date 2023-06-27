const express = require("express");
const router = express.Router();
const User = require("../controllers/user");

/* GET user by username. */
router.get("/:username", function (req, res, next) {
  User.getUser(req.params.username, (err, user) => {
    if (err) {
      next(err);
    } else {
      res.send(user);
    }
  });
});

/* POST to add user */
router.post("/", function (req, res, next) {
  User.createUser(req.body)
    .then(async ({ password, ...user }) => {
      res.send({ token: await auth.getToken(user), user });
    })
    .catch((err) => {
      next(err);
    });
});

/* PUT to update user by username */
router.put("/:username", function (req, res, next) {
  User.updateUser(req.params.username, req.body)
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      next(err);
    });
});

/* DELETE to delete user by username */
router.delete("/:username", function (req, res, next) {
  User.deleteUser(req.params.username)
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
