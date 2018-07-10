var Sequelize = require('sequelize');
var connection = new Sequelize('codefest', 'root', '', {
    dialect: "mysql",
    port:    3306,
});

module.exports = connection;