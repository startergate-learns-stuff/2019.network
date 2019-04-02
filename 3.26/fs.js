/*jshint esversion: 9 */
const fs = require('fs');

/*try {
  var data = fs.readFileSync('./readme.txt', 'utf8');
  console.log(data);
} catch (e) {
  console.log(e);
}

fs.readFile('./readme.txt', 'utf8', (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(data);
});*/

fs.writeFileSync('./readme2.txt', '안녕 세상');

fs.writeFile('./readme3.txt', '좆까 세상', (err) => {
  if (err) console.log(err);
});

fs.writeFile('./readme4.txt', '뭐야 세상', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  fs.readFile('./readme4.txt', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
  });
});

fs.appendFile('./readme5.txt', '흐엑 섹상? ', (err) => {
  if (err) console.log(err);
  fs.readFile('./readme5.txt', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
  });
});

fs.access('./readme5.txt', fs.F_OK | fs.R_OK, (err) => {
  if (err) console.log(err);
});

fs.mkdir('./호에에', err => {
  if (err) console.log(err);
});

fs.readdir('./', (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});