/*jshint esversion: 9 */

const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const logger = require('morgan');

var app = express();
var db = new sqlite3.Database("dramaList.db");

app.use(logger('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({
  extended: true
}));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
  db.all(`SELECT * FROM drama`, (err, rows) => {
    if (err) {
      console.log(err.message);
      return;
    }
    res.render('dramaList', {
      list: rows
    });
  });
});

app.post('/', (req, res) => {
  if (req.body.title && req.body.actor) {
    db.run(`INSERT INTO drama (title, actor) VALUES ($title, $actor)`, {
      $title: req.body.title,
      $actor: req.body.actor
    }, err => {
      console.log(err);
    });
  }
  res.redirect('/');
});

app.listen(8080, _ => {
  console.log(8080);
});