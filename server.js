//express
//mongoose
//body-parser
'use strict';

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/', (req, res) =>{

  res.send('Server Running');
});

app.get('/notes/new', (req, res) => {
  res.render('new-note');
});
app.post('/notes', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});
app.listen(3000, () => {
  console.log(`Evernode server runing on port: ${port}`)

});
