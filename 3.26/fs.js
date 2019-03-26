/*jshint esversion: 9 */
const fs = require('fs');

try {
  var data = fs.readFileSync('./readme.txt', 'utf8');
  console.log(data);
} catch (e) {
  console.log(e);
}

fs.readFile('./readme.txt', 'utf8', (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(data);
});