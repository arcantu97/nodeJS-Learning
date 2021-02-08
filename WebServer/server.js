const express = require('express');
const app = express();
const hbs = require('hbs');

app.use(express.static(__dirname + '/views'));
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home', {
        brand: 'ERRE'
    });
});

app.listen(3000);