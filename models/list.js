const mongoose = require("mongoose");

const listSchema = new mongoose.Schema(
  {
    id: Number,
    // TODO
  },
  {
    collection: "lists",
  }
);

module.exports = mongoose.model("list", listSchema);
