// // GET:
// const express = require('express');
// const app = express();

// // berikan akses express ke index.html
// app.get('/index.html', function(req, res) {
//   res.sendFile(__dirname + '/' + 'index.html');
// });

// // routing get
// app.get('/form', function(req, res) {
//   response = {
//     first_name : req.query.first_name,
//     last_name : req.query.last_name,
//     gender : req.query.gender
//   };
//   console.log(response);

//   res.end(JSON.stringify(response));
// });

// // membuat server
// const server = app.listen(5555, function() {
//   const host = server.address().address;
//   const port = server.address().port;
//   console.log('Kode Apps Listening at ', host, port);
// });


// POST (method GET pada index.html harus diganti dengan method POST)
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// berikan akses express ke index.html
app.get('/index.html', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// routing post
app.post('/form', function(req, res) {
  response = {
    first_name : req.body.first_name,
    last_name : req.body.last_name,
    gender : req.body.gender
  };
  console.log(response);

  res.end(JSON.stringify(response));
});

// membuat server
const server = app.listen(5555, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Kode Apps Listening at ', host, port);
});