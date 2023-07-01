const mongoose = require("mongoose");
const Acordao = require("../models/acordao");

pageSize = 10

module.exports.listacordaos = (page,orderBy,keywords) => {
  if (orderBy == "") {
    if (keywords == "") {
      const query = Acordao.find({}, { processo: 1, data_acordao: 1, url: 1 });
    }
    else {
      const query = Acordao.find({
        $text: { $search: keywords },
        $or: [
          { meio_processual: { $regex: keywords, $options: "i" } },
          { descritores: { $in: [/keywords/i] } },
          { area_tematica_1: { $in: [/keywords/i] } },
          { area_tematica_2: { $in: [/keywords/i] } }
        ]
      })
    }
    const countPromise = Acordao.countDocuments();

    query.skip((page - 1) * pageSize).limit(pageSize);
  }
  else {
    if (keywords == "") {
      const query = Acordao.find({}, { processo: 1, data_acordao: 1, url: 1 });
    }
    else {
      const query = Acordao.find({
        $text: { $search: keywords },
        $or: [
          { meio_processual: { $regex: keywords, $options: "i" } },
          { descritores: { $in: [/keywords/i] } },
          { area_tematica_1: { $in: [/keywords/i] } },
          { area_tematica_2: { $in: [/keywords/i] } }
        ]
      }, { processo: 1, data_acordao: 1, url: 1 })
    }

    const countPromise = Acordao.countDocuments();

    query.sort({ [orderBy]: 1 }).skip((page - 1) * pageSize).limit(pageSize);

  }

  return Promise.all([query.exec(), countPromise])
      .then(([acordaos, count]) => {
      return {
          acordaos: acordaos,
          totalItem: count,
          itemsPerPage: pageSize,
      };
      })
      .catch((err) => {
          console.log(err);
          return err;
      });
}

module.exports.getacordao = (id) => {
    return Acordao
        .findOne({_id : id})
        .then((res) => {
          return res;
        })
        .catch((err) => {
          console.log(err);
          return err;
        });
}

module.exports.addacordao = (acordao) => {
    return new Acordao({
        _id : acordao._id,
        processo: acordao.processo,
        relator: acordao.relator,
        descritores: acordao.descritores,
        n_documento: acordao.n_documento,
        data_acordao: acordao.data_acordao,
        especie: acordao.especie,
        requerente: acordao.requerente,
        texto_integral: acordao.texto_integral,
        url: acordao.url,
        tribunal: acordao.tribunal,
        votacao: acordao.votacao,
        privacidade: acordao.privacidade,
        n_convencional: acordao.n_convencional,
        decisao: acordao.decisao,
        sumario: acordao.sumario,
        requerido: acordao.requerido,
        area_tematica_1: acordao.area_tematica_1,
        area_tematica_2: acordao.area_tematica_2,
        indicacoes_eventuais: acordao.indicacoes_eventuais,
        tribunal_1_instancia: acordao.tribunal_1_instancia,
        autor: acordao.autor,
        reu: acordao.reu,
        seccao: acordao.seccao,
        tribunal_nome: acordao.tribunal_nome,
        recorrido_1: acordao.recorrido_1,
        meio_processual: acordao.meio_processual,
        recorrente: acordao.recorrente,
        recorrido_2: acordao.recorrido_2,
        decisao_texto_integral: acordao.decisao_texto_integral,
        tribunal_recorrido: acordao.tribunal_recorrido,
        processo_tribunal_recorrido: acordao.processo_tribunal_recorrido,
        tribunal_recurso: acordao.tribunal_recurso,
        processo_tribunal_recurso: acordao.processo_tribunal_recurso,
        magistrado: acordao.magistrado,
        referencias: acordao.referencias,
        anotacoes_extra: acordao.anotacoes_extra
    }).save();
};

module.exports.updateacordao = (id,acordao) => {
    return Acordao.updateOne({_id: id}, {
        processo: acordao.processo,
        relator: acordao.relator,
        descritores: acordao.descritores,
        n_documento: acordao.n_documento,
        data_acordao: acordao.data_acordao,
        especie: acordao.especie,
        requerente: acordao.requerente,
        texto_integral: acordao.texto_integral,
        url: acordao.url,
        tribunal: acordao.tribunal,
        votacao: acordao.votacao,
        privacidade: acordao.privacidade,
        n_convencional: acordao.n_convencional,
        decisao: acordao.decisao,
        sumario: acordao.sumario,
        requerido: acordao.requerido,
        area_tematica_1: acordao.area_tematica_1,
        area_tematica_2: acordao.area_tematica_2,
        indicacoes_eventuais: acordao.indicacoes_eventuais,
        tribunal_1_instancia: acordao.tribunal_1_instancia,
        autor: acordao.autor,
        reu: acordao.reu,
        seccao: acordao.seccao,
        tribunal_nome: acordao.tribunal_nome,
        recorrido_1: acordao.recorrido_1,
        meio_processual: acordao.meio_processual,
        recorrente: acordao.recorrente,
        recorrido_2: acordao.recorrido_2,
        decisao_texto_integral: acordao.decisao_texto_integral,
        tribunal_recorrido: acordao.tribunal_recorrido,
        processo_tribunal_recorrido: acordao.processo_tribunal_recorrido,
        tribunal_recurso: acordao.tribunal_recurso,
        processo_tribunal_recurso: acordao.processo_tribunal_recurso,
        magistrado: acordao.magistrado,
        referencias: acordao.referencias,
        anotacoes_extra: acordao.anotacoes_extra
    }).save();
};