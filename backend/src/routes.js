const express = require("express");
const routes = express.Router();

const QuestionController = require("./controllers/QuestionController");
const AnswerController = require("./controllers/AnswerController");

routes.post("/question/", QuestionController.post);
routes.post("/answer/", AnswerController.post);

routes.get("/question", QuestionController.get);
routes.get("/answer", AnswerController.get);

routes.put("/question", QuestionController.put);
routes.put("/answer", AnswerController.put);

module.exports = routes;

