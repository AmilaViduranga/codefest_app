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

Route.post('/login', (req, res) => {
    controller.login({
        name: req.body.name,
        password: req.body.password
    }).then(respond => {
        res.status(respond.status).send(respond);
    }).catch(err => {
        res.status(err.status).send(err);
    })
})

Route.put('/:id', (req, res) => {
    controller.update(req.body, req.params.id).then(respond => {
        res.status(respond.status).send(respond);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});

Route.get('/:id', (req, res) => {
    controller.getSingle(req.params.id).then(respond => {
        res.status(respond.status).send(respond);
    }).catch(err => {
        res.status(err.status).send(err);
    })
})

module.exports = Route;
