const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);
var Answershema = new mongoose.Schema({
  text: String,
  user: String,
  creationDate: Date,
  question: { type: mongoose.Schema.Types.ObjectId, ref: "Question" },
  likes: Number
 
});

module.exports = mongoose.model("Answer", Answershema);


