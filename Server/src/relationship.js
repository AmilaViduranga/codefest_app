var user        = require("../src/User/model");
var question    = require("../src/Question/model");
var answer      = require("../src/Answer/model");
var connection  = require("./dbConnection");

function Relationship() {
    user.hasMany(question);
    question.belongsTo(user);

    question.hasMany(answer);
    answer.belongsTo(question);

    user.hasMany(answer);
    answer.belongsTo(user);

    connection
        .sync()
        .then(function() {
            console.log("Database created");
        }, function (err) {
            console.log('An error occurred while creating the table:', err);
        });
}
module.exports = new Relationship();