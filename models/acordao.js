const mongoose = require("mongoose");

const acordaoSchema = new mongoose.Schema(
  {
    processo: String,
    relator: String,
    descritores: [String],
    n_documento: String,
    data_acordao: String,
    especie: String,
    requerente: String,
    texto_integral: String,
    url: String,
    tribunal: String,
    votacao: String,
    privacidade: String,
    n_convencional: String,
    decisao: String,
    sumario: String,
    requerido: String,
    area_tematica_1: [String],
    area_tematica_2: [String],
    indicacoes_eventuais: String,
    tribunal_1_instancia: String,
    autor: String,
    reu: String,
    seccao: String,
    tribunal_nome: String,
    recorrido_1: String,
    meio_processual: String,
    recorrente: String,
    recorrido_2: String,
    decisao_texto_integral: String,
    tribunal_recorrido: String,
    processo_tribunal_recorrido: String,
    tribunal_recurso: String,
    processo_tribunal_recurso: String,
    magistrado: String,
    referencias: {
      legislacao_nacional: [String],
      normas_apreciadas: [String],
      constituicao: [String],
      normas_julgadas_inconst: [String],
      normas_suscitadas: [String],
      jurisprudencia_constitucional: [String],
      normas_declaradas_inconst: [String],
      referencias_internacionais: [String],
      referencia_pareceres: [String],
      legislacao_comunitaria: [String],
      outras_publicacoes: [String],
      outra_jurisprudencia: [String],
      legislacao_estrangeira: [String],
      jurisprudencia_estrangeira: [String],
      jurisprudencia_internacional: [String],
      objecto: [String],
      jurisprudencia_nacional: [String],
      referencia_doutrina: [String],
      referencia_publicacao: String,
      recusa_aplicacao: [String],
    },
    anotacoes_extra: String,
  },
  {
    collection: "acordaos",
  }
);

// Create indexes
acordaoSchema.index({ meio_processual: "text" });
acordaoSchema.index({ descritores: 1 });
acordaoSchema.index({ area_tematica_1: 1 });
acordaoSchema.index({ area_tematica_2: 1 });

module.exports = mongoose.model("acordao", acordaoSchema);
