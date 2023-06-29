const mongoose = require("mongoose");

const listSchema = new mongoose.Schema(
  {
    id: Number,
    nome: String,
    acordaos: [String],
    data_criacao: String,
  },
  {
    collection: "lists",
  }
);

const acordaolistSchema = new mongoose.Schema(
  {
    id: Number,
    id_acordao: Number,
    nome: String,
    data_colocacao: String,
  },
  {
    collection: "lists",
  }
);

module.exports = mongoose.model("list", listSchema);
