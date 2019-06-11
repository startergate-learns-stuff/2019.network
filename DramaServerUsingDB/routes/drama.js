/*jshint esversion: 9 */

const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const router = express.Router();

var db = new sqlite3.Database("dramaList.db");

router.get('/', (req, res) => {
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

router.post('/', (req, res) => {
  if (req.body.title && req.body.actor) {
    db.run(`INSERT INTO drama (title, actor) VALUES ($title, $actor)`, {
      $title: req.body.title,
      $actor: req.body.actor
    }, err => {
      console.log(err);
    });
  }
  res.redirect('/drama');
});

router.put('/', (req, res) => {
  if (req.body.title && req.body.newTitle && req.body.newActor) {
    db.run(`UPDATE drama SET title = $newTitle, actor = $newActor WHERE title LIKE $title`, {
      $title: req.body.title,
      $newTitle: req.body.newTitle,
      $newActor: req.body.newActor
    }, err => {
      if (err) console.log(err.message);
      else console.log("done");
    });
  }
  res.redirect('/drama');
});

router.delete('/', (req, res) => {
  if (req.body.title) {
    db.run(`DELETE FROM drama WHERE title LIKE $title`, {
      $title: req.body.title
    }, err => {
      if (err) console.log(err.message);
      else console.log("done");
    });
  }
  res.redirect('/drama');
});

module.exports = router;