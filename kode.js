// ROUTES

const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('mendapa GET dari homepage');
});

app.post('/', function(req, res) {
    console.log('mendapat POST dari homepage');
    res.send('Hallo POST');
});

app.get('/list_user', function(req, res) {
    console.log('mendapat GET dari list user');
    res.send('Hallo GET dari list user');
});

app.get('/ko*de', function(req, res) {
    console.log('mendapat POST dari /ko*de');
    res.send('Hallo GET match');
});


// PORT

const server = app.listen(1200, function() {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Basic Routing Listening pada port: ', host, port);
});


