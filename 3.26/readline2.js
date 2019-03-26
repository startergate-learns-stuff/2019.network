/*jshint esversion: 9 */

const readline = require('readline');
const printHello = require('./prhello.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  printHello(parseInt(input));

  rl.close();
});