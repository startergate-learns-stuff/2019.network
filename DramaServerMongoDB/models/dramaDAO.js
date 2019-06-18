/*jshint esversion: 9 */

const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;


const url = 'mongodb://localhost:27017'; // Connection URL
const dbName = 'dramaListDB'; // Database Name

var db;

MongoClient.connect(url, {
  useNewUrlParser: true
}, (err, client) => {
  db = client.db(dbName);
  db.dramaCol = db.collection('mycol');
});

exports.dramaList = (options) => {
  db.dramaCol.find({}).toArray((err, docs) => {
    if (err) console.log(err.message);
    else options.callback(docs);
  });
};

exports.insertDrama = (options) => {
  db.dramaCol.insertOne({
    title: options.title,
    actor: options.actor
  }, (err, res) => {
    if (err) console.log(err.message);
    else console.log('data inserted');
  });
};