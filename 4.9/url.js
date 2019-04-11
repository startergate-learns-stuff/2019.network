/*jshint esversion: 9 */

// new
const myurl = new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string&query=string&query2=string&query3=string&query4=string#hash');
// console.log(myurl);

console.log(myurl.searchParams);
console.log(myurl.searchParams.get('query'));
console.log(myurl.searchParams.has('query0'));
console.log(myurl.searchParams.getAll('query'));
console.log(myurl.searchParams.keys());
console.log(myurl.searchParams.values());

// old
const url = require('url');
var parsedurl = url.parse('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
// console.log(parsedurl);

const qs = require('querystring');
const query = qs.parse(parsedurl.query);
console.log(query);

// 단축 URL을 사용하는 경우 WHATWG 방식은 에러가 발생함
// const myurl2 = new URL('/?dd=dd');
var parsedurl2 = url.parse('/?dd=dd');
console.log(parsedurl2);