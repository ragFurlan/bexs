const Question = require("../models/Question");
const Answer = require("../models/Answer");

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
        quantityAnswer: quantidade,
        likes: question.likes
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

    let questionFinal = newQuestion.indexOf('?') > -1 ? newQuestion : `${newQuestion}?`;
    const question = await Question.create({
      text: questionFinal,
      user: user,
      creationDate: Date.now()
    });

    const questionReturn = await question.execPopulate();

    res.json(questionReturn);
  },
  async put(req, res) {
    Question.updateOne(
      { '_id': req.query.id },
      req.body,
      { new: true },
      (err, question) => {
        if (err) return res.status(500).send(err);
        return res.json(question);
      }
    )
  }
};
