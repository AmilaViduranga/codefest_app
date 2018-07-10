var controller  = require("./controller");
var express     = require('express');
var Route       = express.Router();

/*
 * insert user route
 */
Route.post('/', (req, res) => {
    controller.add(req.body).then(respond => {
        res.status(respond.status).send(respond);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});

Route.put('/:id', (req, res) => {
    controller.update(req.body, req.params.id).then(respond => {
        res.status(respond.status).send(respond);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});

Route.get('/:id', (req, res) => {
    controller.getRelevantToQuestion(req.params.id).then(respond => {
        res.status(respond.status).send(respond);
    }).catch(err => {
        res.status(err.status).send(err);
    })
})


module.exports = Route;