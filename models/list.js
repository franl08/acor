const mongoose = require("mongoose");

const listSchema = new mongoose.Schema(
  {
    nome: String,
    acordaos: [
      {
        id_acordao: Number,
        nome: String,
        data_colocacao: String,
      },
    ],
    data_criacao: String,
  },
  {
    collection: "lists",
  }
);

module.exports = mongoose.model("list", listSchema);
