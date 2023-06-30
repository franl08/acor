const mongoose = require("mongoose");

const listSchema = new mongoose.Schema(
  {
    nome: String,
    acordaos: [
      {
        id_acordao: String,
        processo: String,
        url: String,
        tribunal: String,
        data_colocacao: String
      },
    ],
    username: String,
    data_criacao: String,
    descricao: String
  },
  {
    collection: "lists",
  }
);

module.exports = mongoose.model("list", listSchema);
