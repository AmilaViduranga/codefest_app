var Sequelize   = require("sequelize");
var model       = require("./model");

var Answer = function() {
    this.add = function(answer) {
        return new Promise((resolve, reject) => {
            model.create(answer).then(respond => {
                resolve({status: 200, data: respond, message: "Add Successfully"});
            }).catch(err => {
                reject({status: 500, data: err, message: "Error"})
            })
        })
    }

    this.update = function(answer, id) {
        return new Promise((resolve, reject) => {
            model.find({
                where: {
                    id: id
                }
            }).then(dbAnswer => {
                dbAnswer.update({
                    answer: dbAnswer.answer,
                    userId: dbAnswer.userId,
                    questionId: dbAnswer.questionId
                }).then(respond => {
                    resolve({status: 200, data: respond, message: "Update Successfully"});
                }).catch(err => {
                    reject({status: 500, data: err, message: "Error"})
                })
            }).catch(err => {
                reject({status: 404, data: err, message: "Error"})
            })
        })
    }

    this.getRelevantToQuestion = function(questionId) {
        return new Promise((resolve, reject) => {
            model.findAll({
                where:{
                    questionId: questionId
                }
            }).then(answers => {
                resolve({status: 200, data: answers, message: "Success get request"});
            }).catch(err => {
                reject({status: 500, data: err, message: "Error"})
            })
        })
    }
}

module.exports = new Answer();