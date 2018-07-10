var express         = require('express');
var Router          = express.Router();
var UserRoute       = require('./User/route');
var QuestionRoute   = require("./Question/route");
var AnswerRoute     = require("./Answer/route");

Router.use('/user/', UserRoute);
Router.use("/question/", QuestionRoute);
Router.use("/answer/", AnswerRoute);

module.exports = Router;
