/*jshint esversion: 9 */
const fs = require('fs');
const path = require('path');

fs.writeFile('./practice.txt', 'This file is a practice file.', err => {
  if (err) {
    console.log(err);
    return;
  }
  fs.readFile('./practice.txt', 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
  });
});

fs.readdir('./', (err, datas) => {
  for (var data in datas) {
    if (path.extname(datas[data]) == '.txt') {
      console.log(datas[data]);
    }
  }
});