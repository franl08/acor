const mongoose = require("mongoose");
const Review = require("../models/review");

pageSize = 10;

module.exports.listreviews = (page, orderBy, keywords) => {
  if (orderBy == "") {
    const query = Review.find(
      {},
      { processo: 1, user: 1, data_review: 1, adicionar: 1 }
    );

    const countPromise = Review.countDocuments();

    query.skip((page - 1) * pageSize).limit(pageSize);

    return Promise.all([query.exec(), countPromise])
      .then(([reviews, count]) => {
        return {
          reviews: reviews,
          totalItem: count,
          itemsPerPage: pageSize,
        };
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  } else {
    const query = Review.find(
      {},
      { processo: 1, user: 1, data_review: 1, adicionar: 1 }
    );

    const countPromise = Review.countDocuments();

    query
      .sort({ orderBy: 1 })
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    return Promise.all([query.exec(), countPromise])
      .then(([reviews, count]) => {
        return {
          reviews: reviews,
          totalItem: count,
          itemsPerPage: pageSize,
        };
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }
};

module.exports.getreview = (id) => {
  return Review.findOne({ _id: id })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

module.exports.addreview = (review) => {
  return new Review({
    processo: review.processo,
    relator: review.relator,
    descritores: review.descritores,
    n_documento: review.n_documento,
    data_acordao: review.data_acordao,
    especie: review.especie,
    requerente: review.requerente,
    texto_integral: review.texto_integral,
    url: review.url,
    tribunal: review.tribunal,
    votacao: review.votacao,
    privacidade: review.privacidade,
    n_convencional: review.n_convencional,
    decisao: review.decisao,
    sumario: review.sumario,
    requerido: review.requerido,
    area_tematica_1: review.area_tematica_1,
    area_tematica_2: review.area_tematica_2,
    indicacoes_eventuais: review.indicacoes_eventuais,
    tribunal_1_instancia: review.tribunal_1_instancia,
    autor: review.autor,
    reu: review.reu,
    seccao: review.seccao,
    tribunal_nome: review.tribunal_nome,
    recorrido_1: review.recorrido_1,
    meio_processual: review.meio_processual,
    recorrente: review.recorrente,
    recorrido_2: review.recorrido_2,
    decisao_texto_integral: review.decisao_texto_integral,
    tribunal_recorrido: review.tribunal_recorrido,
    processo_tribunal_recorrido: review.processo_tribunal_recorrido,
    tribunal_recurso: review.tribunal_recurso,
    processo_tribunal_recurso: review.processo_tribunal_recurso,
    magistrado: review.magistrado,
    referencias: review.referencias,
    anotacoes_extra: review.anotacoes_extra,
    user: review.user,
    data_review: review.data_review,
    adicionar: review.adicionar,
  }).save();
};

module.exports.deletereview = (id) => {
  return Review.findOneAndDelete({ _id: id });
};
