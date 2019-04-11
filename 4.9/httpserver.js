/*jshint esversion: 9 */

const http = require('http');

/*var server = http.createServer();

server.on('request', (req, res) => {
  res.write('Welcome');
  res.end(' to my server');
});

server.on('listening', () => {
  console.log('8080');
});

server.listen(8080);*/

/*var server = http.createServer((req, res) => {
  res.write('hello');
  res.end(' world');
}).listen(1337, () => {
  console.log(1337);
});*/

var server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);
  console.log(req.headers);
  res.end();
}).listen(1337, () => {
  console.log(1337);
});