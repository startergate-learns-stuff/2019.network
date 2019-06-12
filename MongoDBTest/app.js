/*jshint esversion: 9 */

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'testDB';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  db.collection("testDB").insertOne({
    hello: 'world'
  }, (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(res);
  });
  //console.log(db.collection("testDB").find());

  client.close();
});