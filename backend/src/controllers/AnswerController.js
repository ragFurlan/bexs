const Answer = require("../models/Answer");
const Question = require("../models/Question");
const mongoose = require("mongoose");

module.exports = {
    async post(req, res) {
        const { newAnswer, user, idQuestion } = req.body;

        const answer = await Answer.create({
            text: newAnswer,
            user: user,
            creationDate: Date.now(),
            question: mongoose.Types.ObjectId(idQuestion)

        });
        
        const answerReturn = await answer.execPopulate();
        res.json(answerReturn);
    },
    async get(req, res) {
      const answer = await Answer.find();
      res.json(answer);
    }
};
