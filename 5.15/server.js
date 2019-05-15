/*jshint esversion: 9 */

const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send('<h1>hello express</h1>');
});

app.listen(1337, _ => {
  console.log(1337);
});