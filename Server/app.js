var express             = require("express");
var cors                = require("cors");
var bodyParser          = require('body-parser');
var relationship        = require("./src/relationship");

app = express();
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.listen("8080", "localhost", "0.0.0.0", function() {
    console.log("Server listen on port 8080");
})