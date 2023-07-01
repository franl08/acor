const mongoose = require("mongoose");
const List = require("../models/list");

pageSize = 5;

module.exports.listlistsbyusername = (page, username) => {
  const query = List.find({ username: username },{ nome: 1});

  const countPromise = List.countDocuments({ username: username });

  query.skip((page - 1) * pageSize).limit(pageSize);

  return Promise.all([query.exec(), countPromise])
    .then(([lists, count]) => {
      return {
        lists: lists,
        totalItem: count,
        itemsPerPage: pageSize,
      };
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

module.exports.getlist = (id) => {
  return List.findOne({ _id: id })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

module.exports.addlist = (list) => {
  return new List({
    nome: list.nome,
    acordaos: list.acordaos,
    user_id: list.user_id,
    data_criacao: list.data_criacao,
    descricao: list.descricao,
  }).save();
};

module.exports.addacordao = (listId, ac) => {
  return List.updateOne({ _id: listId }, { $push: { acordaos: ac } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

module.exports.deletelist = (id) => {
  return List.findOneAndDelete({ _id: id });
};

module.exports.deleteacordaofromlist = (listId, acId) => {
  return List.updateOne(
    { _id: listId },
    { $pull: { acordaos: { id_acordao: acId } } }
  )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
