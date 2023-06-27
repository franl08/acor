const mongoose = require("mongoose");

const acordaoSchema = new mongoose.Schema(
  {
    id: Number,
    // TODO
  },
  {
    collection: "acordaos",
  }
);

module.exports = mongoose.model("acordao", acordaoSchema);
