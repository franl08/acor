const mongoose = require("mongoose");

const listSchema = new mongoose.Schema(
  {
    _id : String,
    nome: String,
    acordaos: [
      {
        id_acordao: String,
        processo: String,
        url: String,
        tribunal: String
      },
    ],
    username: String,
    descricao: String
  },
  {
    collection: "lists",
  }
);

module.exports = mongoose.model("list", listSchema);
