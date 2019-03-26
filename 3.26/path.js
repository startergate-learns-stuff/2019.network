/*jshint esversion: 9 */

const path = require('path');

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.basename(__filename));
console.log(path.parse(__filename));

var newpath = path.format({
  root: 'D:\\',
  dir: 'D:\\CodingData\\2019.network\\3.26',
  base: 'path.js',
  ext: '.js',
  name: 'path'
});
console.log(newpath);

var createpath = path.join(__dirname, path.sep, '..', '3.26', path.sep, 'index.html');
console.log(createpath);