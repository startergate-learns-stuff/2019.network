process.on('exit', () => {
  console.log('end');
})

// process.exit();

var add = (a, b) => {
  return parseInt(a) + parseInt(b);
}

console.log(add(process.argv[2], process.argv[3]));

for (var variable in process.argv) {
  console.log(process.argv[variable]);
}
