/*jshint esversion: 9 */

const http = require('http');
const qs = require('querystring');

var dramaList = [{
    title: '나의 아저씨',
    actor: '아이유, 이선균'
  },
  {
    title: '미스터 선샤인',
    actor: '김태리, 이병헌'
  }
];

/*const url = require('url');
var server = http.createServer((req, res) => {
  console.log('req.url: ', req.url);

  var parsedUrl = url.parse(req.url);
  var query = qs.parse(parsedUrl.query);

  console.log('parsedUrl ', parsedUrl);
  console.log('querystring ', query);

  // 드라마 목록에 데이터 추가
  if (query.title && query.actor) {
    dramaList.push({
      title: query.title,
      actor: query.actor
    });
    res.writeHead(302, {
      'Location': '/'
    });
    res.end();
  } else {
    showDramaList(res);
  }
}).listen(1337, _ => {
  console.log('1337 포트에서 대기 중');
});*/

var showDramaList = res => {
  //드라마 목록을 화면에 출력
  res.writeHead(200, {
    'Content-Type': 'text/html;charset=utf-8'
  });
  res.write(`<html><body><h1>My Favorite Drama</h1><ul>`);
  dramaList.forEach(item => {
    res.write(`<li>${item.title}(${item.actor})</li>`);
  });
  res.end(`</ul><h2>Add Drama</h2>
  <form action="http://localhost:1337" method="POST">
    <p>제목<input type="text" name="title"></p>
    <p>배우<input type="text" name="actor"></p>
    <input type="submit">
  </form></body></html>`);
};

var addDramaList = (req, res) => {
  var body = '';
  req.on('data', chunk => {
    body += chunk;
  });
  req.on('end', _ => {
    var query = qs.parse(body);
    // 드라마 목록에 데이터 추가
    if (query.title && query.actor) {
      dramaList.push({
        title: query.title,
        actor: query.actor
      });
      res.writeHead(302, {
        'Location': '/'
      });
    } else {
      res.writeHead(304, {
        'Location': '/'
      });
    }
    res.end();
  });
};

var server = http.createServer((req, res) => {
  // body에서 데이터 추출하여 저장
  if (req.method.toLowerCase() === 'post') {
    addDramaList(req, res);
  } else {
    showDramaList(res);
  }
}).listen(1337, _ => {
  console.log(1337);
});