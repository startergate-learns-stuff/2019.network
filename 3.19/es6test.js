/*jshint esversion: 9 */

var f = () => {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
};

let a = 1;
a = 2;
console.log(a);
//console.log('hello '+i);

//b = 5
const b = 3;
console.log(b);

const str1 = 'func';
const str2 = 'you';
const str3 = 'bad';

console.log(str1 + ' ' + str2 + ' ' + str3);
console.log(`${str1} ${str2} ${str3} 사딸라사딸라사딸라붐바 사딸라붐바 붐붐붐`);


var c, d, rest;
[c, d, , , ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(`a = ${a}, b = ${b}, rest = ${rest}`);

({
  c,
  d
} = {
  a: 10,
  b: 20
});
console.log(`a = ${a}, b = ${b}`);