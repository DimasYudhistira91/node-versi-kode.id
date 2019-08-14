// MIDDLEWARE

const express = require('express');
const app = express();

app.use('/user', function(req, res, next) {
    console.log('request ke user sudah diterima pada ' + Date.now());
    next();
});

app.get('/user', function(req, res) {
    res.send('USER');
});

app.listen(1300);