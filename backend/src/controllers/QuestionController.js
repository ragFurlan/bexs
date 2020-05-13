const Question = require("../models/Question");

module.exports = {
  async get(req, res) {
    const question = await Question.find();
    res.json(question);
  },
  async post(req, res) {
    console.log("teste q");
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
