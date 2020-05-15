const Question = require("../models/Question");
const Answer = require("../models/Answer");

let retorno = [];
module.exports = {

  async get(req, res) {
    let retorno = [];
    var questions = await Question.find();
    let quantidadeQuestions = await Question.countDocuments().exec();

    await questions.forEach(async (question) => {
      let quantidade = await Answer.countDocuments({ 'question': question._id }, function (err, result) {
      }).exec();

      let questionItem = {
        id: question._id,
        text: question.text,
        user: question.user,
        creationDate: question.creationDate,
        quantityAnswer: quantidade
      };
      retorno.push(questionItem);

      quantidadeQuestions--;
      if (quantidadeQuestions == 0) {
        res.json(retorno);
      }
    });
  },
  async post(req, res) {
    const { newQuestion, user } = req.body;
    const question = await Question.create({
      text: newQuestion,
      user: user,
      creationDate: Date.now()
    });

    await question.execPopulate();
    res.json({ "response": "ok" });
  }

};
