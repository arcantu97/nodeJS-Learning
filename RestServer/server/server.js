require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/user', function(req, res) {
    res.json('get user');
});

app.post('/user', function(req, res) {
    let body = req.body;
    if (body.name === undefined) {
        res.status(400).json({
            ok: false,
            message: 'Name is necessary'
        });
    } else {
        res.json({ user: body });
    }

});

app.put('/user/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        id
    });
})

app.listen(process.env.PORT, () => {
    console.log('Listening port: ', process.env.PORT);
});