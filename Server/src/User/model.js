var connection  = require("../dbConnection");
var Sequelize   = require('sequelize');

var User = connection.define('user', {
    name: { type: Sequelize.STRING},
    password: { type: Sequelize.STRING},
    photo: { type: Sequelize.STRING }
}, {
    tableName: 'user',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    paranoid: true
});

module.exports = User;