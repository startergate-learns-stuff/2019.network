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

/*var server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);
  console.log(req.headers);
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(200, "OK", {
    'Content-Type': 'text/plain',
    'myname': 'startergate'
  });
  res.end('<h1>Hello World</h1>');
}).listen(1337, () => {
  console.log(1337);
});*/

/*var server = http.createServer((req, res) => {
  res.end(`<!DOCTYPE html>
  <html lang="en" dir="ltr">

  <head>
    <meta charset="utf-8">
    <title></title>
  </head>

  <body>
    <h1>안녕</h1>
    <img src="http://www.ticketbuynow.com/wp-content/uploads/2018/10/IU3.jpg" alt="">
  </body>

  </html>`);
}).listen(1337, _ => {
  console.log('Waiting on port 8080');
});*/

const fs = require('fs');

var server = http.createServer((req, res) => {
  fs.readFile('./index.html', (err, data) => {
    if (err) {
      res.statusCode = 500;
      return;
    }
    res.end(data);
  });
}).listen(1337, _ => {
  console.log('Waiting on port 8080');
});