const mongoose = require("mongoose");
const Acordao = require("../models/acordao");

pageSize = 5;
totalItems = undefined;
prevKeyword = undefined;
prevPage = undefined;

function checkParamsAreTheSame(queryBody) {
  let { page, orderBy, keywords } = queryBody;
  console.log(page);
  console.log(prevPage);
  if (
    prevKeyword === keywords &&
    (Number(page) === Number(prevPage) + 1 ||
      Number(page) === Number(prevPage) - 1)
  ) {
    prevOrderBy = orderBy;
    prevKeyword = keywords;
    prevPage = page;
    console.log("verdade");
    return true;
  } else {
    prevOrderBy = orderBy;
    prevKeyword = keywords;
    prevPage = page;
    console.log("falso");
    return false;
  }
}

module.exports.listacordaos = async (queryBody) => {
  const page = queryBody.page;
  const orderBy = queryBody.orderBy;
  const keywords = queryBody.keywords;
  let query = Acordao.find({}, { processo: 1, data_acordao: 1, url: 1 });

  if (keywords && keywords !== "") {
    const keywordRegex = new RegExp(keywords, "i");
    query = Acordao.find(
      {
        $and: [
          {
            $or: [
              { meio_processual: keywordRegex },
              { descritores: keywordRegex },
              { area_tematica_1: keywordRegex },
              { area_tematica_2: keywordRegex },
            ],
          },
          { $text: { $search: keywords } },
        ],
      },
      { processo: 1, data_acordao: 1, url: 1 }
    );
  }

  for (let q in queryBody) {
    if (q !== "page" && q !== "orderBy" && q !== "keywords") {
      queryBody[q] = queryBody[q].replace(/"/g, "");
      query = query.find({ [q]: queryBody[q] });
    }
  }

  if (orderBy !== null) {
    const [sortField, sortOrder] = orderBy.split(";");
    const sortOptions = {};
    sortOptions[sortField] = sortOrder === "asc" ? 1 : -1;
    query = query.sort(sortOptions);
  }
  let acordaos = undefined;
  if (checkParamsAreTheSame(queryBody)) {
    acordaos = await query
      .skip((page - 1) * pageSize)
      .limit(pageSize)
      .exec();
  } else {
    const countQuery = query.model.countDocuments(query.getQuery());
    totalItems = await countQuery.exec();
    acordaos = await query
      .skip((page - 1) * pageSize)
      .limit(pageSize)
      .exec();
  }
  prevPage = page;
  return {
    acordaos: acordaos,
    totalItem: totalItems,
    itemsPerPage: pageSize,
  };
};

module.exports.getacordao = (id) => {
  console.log(id);
  return Acordao.findOne({ _id: id })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

module.exports.addacordao = (acordao) => {
  let { adicionar, data_review, user, ...newAcordao } = acordao;
  return new Acordao({ ...newAcordao }).save();
};

module.exports.updateacordao = (id, acordao) => {
  let { adicionar, data_review, user, ...newAcordao } = acordao;
  return Acordao.updateOne(
    { _id: id },
    { $set: { ...newAcordao } },
    { new: true }
  ).save();
};
