/*jshint esversion: 9 */
const fs = require('fs');

/*const readStream = fs.createReadStream('./readme.txt', {
  highWaterMark: 8
});

var data = [];

readStream.on('data', chunk => {
  data.push(chunk);
  console.log(chunk, chunk.length);
});

readStream.on('end', () => {
  console.log('end: ', Buffer.concat(data).toString());
});
const writeStream = fs.createWriteStream('./write.txt');

process.stdin.on('readable', () => {
  let chunk;
  console.log('new data arrived');
  while ((chunk = process.stdin.read()) !== null) {
    writeStream.write(chunk);
    console.log(chunk.toString());
    if (chunk.toString() === 'exit\r\n') break;
  }
});*/

/*const writeStream = fs.createWriteStream('./write2.txt');

writeStream.on('finish', () => {
  console.log('file stream finish');
})

writeStream.write('지금은\n');
writeStream.write('7교시\n');
writeStream.write('집가고싶다\n');
writeStream.end();*/

const rs = fs.createReadStream('./write2.txt');

const ws = fs.createWriteStream('./write3.txt');

rs.pipe(ws);