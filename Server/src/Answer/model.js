var connection  = require("../dbConnection");
var Sequelize   = require('sequelize');

var Answer = connection.define('answer', {
    answer: { type: Sequelize.STRING}
}, {
    tableName: "answer",
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    paranoid: true
});

module.exports = Answer;