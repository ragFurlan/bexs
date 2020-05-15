const mongoose = require("mongoose");

var Answershema = new mongoose.Schema({
  text: String,
  user: String,
  creationDate: Date,
  question: { type: mongoose.Schema.Types.ObjectId, ref: "Question" }
 
});

module.exports = mongoose.model("Answer", Answershema);


