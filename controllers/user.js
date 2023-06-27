const auth = require("../utils/auth");
const User = require("../models/user");

async function getByUsername(username) {
  try {
    const user = await User.find({ username: username });
    return user;
  } catch (err) {
    return err;
  }
}

async function createUser(user) {
  try {
    user.type = "USER";
    user.registeredOn = new Date();
    user.password = await auth.hashPassword(user.password);
    result = await User.create(user);
    return result;
  } catch (err) {
    return err;
  }
}

async function deleteUser(username) {
  try {
    const res = User.findOneAndRemove({ username: username });
    return res;
  } catch (err) {
    return err;
  }
}

async function updateUser(username, user) {
  try {
    const res = User.findOneAndUpdate({ username: username }, user);
    return res;
  } catch (err) {
    return err;
  }
}

async function getUserTypeFromUsername(username) {
  try {
    const user = await getByUsername(username);
    return user.role;
  } catch (err) {
    return err;
  }
}

module.exports = {
  getByUsername,
  createUser,
  deleteUser,
  updateUser,
  getUserTypeFromUsername,
};
