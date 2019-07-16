/* jshint esversion: 9*/


// 콜백
/*const fs = require('fs');

fs.access('./readme.txt', err => {
  if (err) console.log(err);
  else fs.readFile('./readme.txt', (err, data) => {
    if (err) console.log(err);
    else {
      console.log(data.toString('utf8'));
      let newText = data.toString('utf8').replace('여고생쟝', '남고생쟝');
      fs.writeFile('./readme.txt', newText, err => {
        if (err) console.log(err);
        else fs.readFile('./readme.txt', (err, data) => {
          if (err) console.log(err);
          else console.log(data.toString('utf8'));
        });
      });
    }
  });
});*/

// promise

const fsp = require('fs').promises;

/*fsp.access('./readme.txt')
  .then(_ => fsp.readFile('./readme.txt'))
  .then(data => {
    console.log(data.toString('utf8'));
    let newText = data.toString('utf8').replace('여고생쟝', '남고생쟝');
    return fsp.writeFile('./readme.txt', newText);
  })
  .then(_ => fsp.readFile('./readme.txt'))
  .then(data => console.log(data.toString('utf8'))).catch(err => console.log(err));*/

// async, await

async function asyncFunc() {
  await fsp.access('./readme.txt');
  var data = await fsp.readFile('./readme.txt');
  console.log(data.toString('utf8'));
  var newText = data.toString('utf8').replace('여고생쟝', '남고생쟝');
  await fsp.writeFile('./readme.txt', newText);
  data = await fsp.readFile('./readme.txt');
  console.log(data.toString('utf8'));
}

asyncFunc();