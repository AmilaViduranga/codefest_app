var connection  = require("../dbConnection");
var Sequelize   = require('sequelize');

var Question = connection.define('question', {
    question: { type: Sequelize.STRING}
}, {
    tableName: "question",
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    paranoid: true
});

module.exports = Question;