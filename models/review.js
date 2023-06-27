const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    id: Number,
    // TODO
  },
  {
    collection: "reviews",
  }
);

module.exports = mongoose.model("review", reviewSchema);
