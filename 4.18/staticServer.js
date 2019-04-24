/*jshint esversion: 9 */

const http = require('http');
const fs = require('fs');

/*var server = http.createServer((req, res) => {
  console.log('req.url: ', req.url);
  if (req.url === '/') {
    fs.readFile('./index.html', (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  } else if (req.url === '/iu.jpg') {
    res.setHeader('Content-Type', 'image/jpg');
    fs.readFile('./iu.jpg', (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  } else if (req.url === '/iu.png') {
    res.setHeader('Content-Type', 'image/png');
    fs.readFile('./iu.png', (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  } else if (req.url === '/music.mp3') {
    res.setHeader('Content-Type', 'audio/mp3');
    fs.readFile('./music.mp3', (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  } else if (req.url === '/streaming.mp4') {
    res.setHeader('Content-Type', 'video/mp4');
    fs.readFile('./streaming.mp4', (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  } else if (req.url === '/favicon.ico') {
    res.statusCode = 404;
  }
}).listen(1337, _ => {
  console.log(1337);
});*/

/*var server = http.createServer((req, res) => {
  console.log('req.url: ', req.url);
  if (req.url === '/') {
    fs.createReadStream('./index.html').pipe(res);
  } else if (req.url === '/iu.jpg') {
    res.setHeader('Content-Type', 'image/jpg');
    fs.createReadStream('./iu.jpg').pipe(res);
  } else if (req.url === '/iu.png') {
    res.setHeader('Content-Type', 'image/png');
    fs.createReadStream('./iu.png').pipe(res);
  } else if (req.url === '/music.mp3') {
    res.setHeader('Content-Type', 'audio/mp3');
    fs.createReadStream('./music.mp3').pipe(res);
  } else if (req.url === '/streaming.mp4') {
    res.setHeader('Content-Type', 'video/mp4');
    fs.createReadStream('./streaming.mp4').pipe(res);
  } else if (req.url === '/favicon.ico') {
    res.statusCode = 404;
  }
}).listen(1337, _ => {
  console.log(1337);
});

process.on('uncaughtException', (err) => {
  console.log(err);
});*/

const path = require('path');
const mymime = require('./mymine');

var server = http.createServer((req, res) => {
  console.log('req.url: ', req.url);
  if (req.url === '/') {
    req.url = '/index.html';
  }

  var filename = __dirname + req.url;
  var extension = path.extname(filename).substring(1);
  console.log(extension);
  fs.readFile(filename, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    res.writeHead(200, {
      'Content-Type': mymime[extension]
    });
    res.end(data);
  });
}).listen(1337, _ => {
  console.log(1337);
});