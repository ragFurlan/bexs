const express = require("express");
const routes = express.Router();
//const multer = require("multer");
//const uploadConfig = require("./config/upload");
//const upload = multer(uploadConfig);

const QuestionController = require("./controllers/QuestionController");
const AnswerController = require("./controllers/AnswerController");

routes.post("/question/", QuestionController.post);
routes.post("/answer/", AnswerController.post);

routes.get("/question", QuestionController.get);
routes.get("/answer", AnswerController.get);

module.exports = routes;
