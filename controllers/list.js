const mongoose = require("mongoose");
const List = require("../models/list");

module.exports.addlist = (list) => {
    return new List({
        id: list.id,
        nome: list.nome,
        acordaos: list.acordaos,
        data_criacao: list.data_criacao
    }).save();
};