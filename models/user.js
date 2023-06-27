const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    id: Number,
    // TODO
  },
  {
    collection: "users",
  }
);

module.exports = mongoose.model("user", userSchema);
