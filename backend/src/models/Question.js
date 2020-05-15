const mongoose = require("mongoose");

var Questionshema = new mongoose.Schema({
  text: String,
  user: String,
  creationDate: Date
  });

module.exports = mongoose.model("Question", Questionshema);
