/*jshint esversion: 9 */

process.addListener('exit', () => {
  console.log('process.addListener()');
});

process.on('exit', () => {
  console.log('process.on()');
});

process.once('exit', () => {
  console.log('process.once()');
});

process.emit('exit');