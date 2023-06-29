const express = require("express");
const auth = require("../utils/auth");
const router = express.Router();
const User = require("../controllers/user");

/* GET user by username. */
router.get("/:username", function (req, res, next) {
  console.log(req.params.username);
  User.getByUsername(req.params.username).then((user) => {
    if (user) {
      console.log(user);
      res.send(user);
    } else {
      next("User not found");
    }
  });
});

/* POST to add user */
router.post("/", function (req, res, next) {
  User.getByUsername(req.body.username).then(async (user) => {
    if (user) {
      console.log(user);
      next("Username already exists");
    } else {
      User.getByEmail(req.body.email).then(async (user) => {
        if (user) {
          console.log(user);
          next("Email already exists");
        } else {
          User.createUser(req.body)
            .then(async ({ password, ...user }) => {
              console.log(user);
              res.send({ token: await auth.getToken(user), user });
            })
            .catch((err) => {
              next(err);
            });
        }
      });
    }
  });
});

/* PUT to update user by username */
router.put("/:username", function (req, res, next) {
  if (req.body.password) {
    req.body.password = auth.hashPassword(req.body.password).then((hash) => {
      req.body.password = hash;
      User.updateUser(req.params.username, req.body)
        .then((user) => {
          res.send(user);
        })
        .catch((err) => {
          next(err);
        });
    });
  } else {
    User.updateUser(req.params.username, req.body)
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        next(err);
      });
  }
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
