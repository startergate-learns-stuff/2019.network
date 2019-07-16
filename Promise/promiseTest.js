/* jshint esversion: 9*/

// 콜백 함수 이용
/*let delay = (sec, callback) => {
  setTimeout(_ => {
    callback(new Date().toTimeString());
  }, sec * 1000);
};
console.log('start: ', new Date().toTimeString());
delay(1, t => {
  console.log(t);
});
console.log('end');*/

// Promise 이용
let delayP = sec => {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve(new Date().toTimeString());
    }, sec * 1000);
  });
};

delayP(1).then(t => {
  console.log(1, t);
  return delayP(2);
}).then(t => {
  console.log(2, t);
  return delayP(3);
}).then(t => {
  console.log(3, t);
});