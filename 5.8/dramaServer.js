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

const url = require('url');
var server = http.createServer((req, res) => {
  console.log('req.url: ', req.url);

  var parsedUrl = url.parse(req.url);
  var query = qs.parse(parsedUrl.query);

  console.log('parsedUrl ', parsedUrl);
  console.log('querystring ', query);

  // 드라마 목록에 데이터 추가
  dramaList
  //드라마 목록을 화면에 출력


}).listen(1337, _ => {
  console.log('1337  포트에서 대기 중');
});