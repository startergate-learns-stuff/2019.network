/*jshint esversion: 9 */

const express = require('express');
const model = require('../models/dramaDAO');

const router = express.Router();

router.get('/', (req, res) => {
  model.dramaList({
    callback: (dramaList) => {
      res.render('dramaList', {
        list: dramaList
      });
    }
  });
});

router.post('/', (req, res) => {
  if (req.body.title && req.body.actor) {
    model.insertDrama(req.body);
  }
  res.redirect('/');
});

module.exports = router;