/*jshint esversion: 9 */

const express = require('express');
const logger = require('morgan');
const favicon = require('serve-favicon');
const path = require('path');

const dramaRouter = require('./routes/drama');

const app = express();

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({
  extended: true
}));

app.set("view engine", "pug");
app.set("views", "./views");

app.use('/', dramaRouter);

app.listen(8080, _ => {
  console.log(8080);
});