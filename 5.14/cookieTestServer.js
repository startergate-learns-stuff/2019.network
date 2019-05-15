/*jshint esversion: 9 */

const http = require('http');

//var server = http.createServer((req, res) => {
/*res.writeHead(200, {
  'Set-Cookie': 'myCookie=fdsd'
});
res.writeHead(200, {
  'Set-Cookie': ['cookie1=choco', 'cookie2=strawberry']
});*/

//res.writeHead(200, {
//  'Set-Cookie': ['cookie1=choco', 'cookie2=strawberry', `permanent=cookie!; Max-Age=${60}`]
//});

//res.end('<h2>Cookie!</h2>');
//}).listen(1337, _ => {
//console.log(1337);
//});

const fs = require('fs');
const cookie = require('cookie');
const qs = require('querystring');
const url = require('url');

var server = http.createServer((req, res) => {
  var cookies = {};
  if (req.headers.cookie !== undefined) {
    cookies = cookie.parse(req.headers.cookie);
    console.log(cookies);
  }

  if (req.url.startsWith('/setCookie')) {
    var parsedUrl = url.parse(req.url);
    var query = qs.parse(parsedUrl.query);
    res.writeHead(302, {
      'Set-Cookie': `name=${query.name}`,
      'Location': '/'
    });
    res.end();
    return;
  }

  if (cookies.name) {
    res.end(`welcome, ${cookies.name}`);
    return;
  }

  fs.readFile('./cookieTest.html', (err, data) => {
    res.end(data);
  });
}).listen(1337, _ => {
  console.log(1337);
});