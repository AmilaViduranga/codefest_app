var Sequelize   = require("sequelize");
var model       = require("./model");
var answerModel = require("../Answer/model");
var userModel   = require("../User/model");

var Question = function() {
    this.add = function(question) {
        return new Promise((resolve, reject) => {
            model.create(question).then(respond => {
                resolve({status: 200, data: respond, message: "Add Successfully"});
            }).catch(err => {
                reject({status: 500, data: err, message: "Error"})
            })
        })
    }

    this.update = function(question, id) {
        return new Promise((resolve, reject) => {
            model.find({
                where: {
                    id: id
                }
            }).then(dbQuestion => {
                dbQuestion.update({
                    question: question.question,
                    userId: question.userId
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

    this.getSingle = function(id) {
        return new Promise((resolve, reject) => {
            model.find({
                where: {
                    id: id
                },
                include: [{
                    model: answerModel
                }, {
                    model: userModel,
                    attributes: ['name']
                }]
            }).then(respond => {
                resolve({status: 200, data: respond, message: "success get request"});
            }).catch(err => {
                reject({status: 500, data: err, message: "Error"})
            })
        })
    }

    this.getAll = function() {
        return new Promise((resolve, reject) => {
            model.findAll({
                include:[{
                    model: answerModel
                }, {
                    model: userModel,
                    attributes: ['name']
                }]
            }).then(respond => {
                resolve({status: 200, data: respond, message: "success get request"});
            }).catch(err => {
                reject({status: 500, data: err, message: "Error"})
            })
        })
    }
}

module.exports = new Question();