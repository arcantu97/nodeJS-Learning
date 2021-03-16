const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const _ = require('underscore');
const bodyParser = require('body-parser');
const User = require('../models/user');

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.get('/users', function(req, res) {

});
app.get('/user/:id', function(req, res) {
    let id = req.params.id;
    let options = {
        new: true
    };

    User.findById(id, null, options, (err, userDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            user: userDB
        });
    })
});

app.post('/user', function(req, res) {
    let body = req.body;
    let user = new User({
        name: body.name,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        role: body.role
    });

    user.save((err, userDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            user: userDB
        })

    });
});

app.put('/user/:id', function(req, res) {
    let id = req.params.id;
    let body = _.pick(req.body, ['name', 'email', 'password', 'status']);
    let options = {
        new: true,
        runValidators: true,
        context: 'query'
    };


    User.findByIdAndUpdate(id, body, options, (err, userDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            user: userDB
        });
    })
});

app.delete('/user', function(req, res) {
    res.json('Delete user');
});

module.exports = app;