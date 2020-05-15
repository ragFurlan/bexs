const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);
var Questionshema = new mongoose.Schema({
  text: String,
  user: String,
  creationDate: Date,
  likes: Number
});

module.exports = mongoose.model("Question", Questionshema);
