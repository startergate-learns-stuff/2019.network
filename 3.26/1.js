/*jshint esversion: 9 */

var add2 = (a, b, callback) => {
  setTimeout(callback, 1000, a + b);
};

console.log('st');
add2(2, 2, (n) => {
  console.log(n);
});
console.log('en');