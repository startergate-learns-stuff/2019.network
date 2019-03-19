/*var add1 = (a, b) => {
  console.log(a + b);
}
console.log('before');
setTimeout(add1, 1000, 1, 2);
console.log('after');
*/




var add2 = (a, b, callback) => {
  setTimeout(callback, 10, a + b)
}
/*console.log('before');
setTimeout(add2, 1000, 1, 2, (re) => {
  console.log(re);
})
console.log('after');







var async1 = function(param, callback) { callback(param * 2) }
var async2 = function(param, callback) { callback(param * 3) }
var async3 = function(param, callback) { callback(param * 4) }

async1(1, (result1) => {
  async2(result1, (result2) => {
    async3(result2, (result3) => {
      console.log(result3);
    })
  })
})
*/
console.log('before');
add2(1, 2, (re) => {
  console.log(re);
})
console.log('after');
