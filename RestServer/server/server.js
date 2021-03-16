require('./config/config');
const mongoose = require('mongoose');
const express = require('express');
const app = express();


app.use(require('./controllers/user'));
mongoose.connect('mongodb://localhost/apiDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err, res) => {
    if (err) throw err;
    console.log('DB online');
});

app.listen(process.env.PORT, () => {
    console.log('Listening port: ', process.env.PORT);
});