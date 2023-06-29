const auth = require("../utils/auth");
const User = require("../models/user");

async function getByUsername(username) {
  try {
    console.log("username", username);
    const user = await User.findOne({ username: username });
    console.log(user);
    if (user) {
      console.log(user.toJSON());
      return user.toJSON();
    }
    return user;
  } catch (err) {
    return err;
  }
}

async function getByEmail(email) {
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      return user.toJSON();
    }
    return user;
  } catch (err) {
    return err;
  }
}

async function createUser(user) {
  try {
    user.role = "USER";
    user.registeredOn = new Date();
    user.password = await auth.hashPassword(user.password);
    console.log(user);
    let res = await new User({
      username: user.username,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      role: user.role,
      password: user.password,
    }).save();
    console.log(res);
    return res.toJSON();
  } catch (err) {
    console.log(err);
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
    const res = User.findOneAndUpdate(
      { username: username },
      { $set: user },
      {
        new: true,
      }
    );
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
  getByEmail,
};
