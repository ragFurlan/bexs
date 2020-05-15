const Answer = require("../models/Answer");
const Question = require("../models/Question");
const mongoose = require("mongoose");

module.exports = {
    async post(req, res) {
        null
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
    },
    async put(req, res) {
        Answer.updateOne(
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
