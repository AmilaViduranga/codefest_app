var express     = require('express');
var Router      = express.Router();
var UserRoute   = require('./User/route');

Router.use('/user/', UserRoute);

module.exports = Router;
