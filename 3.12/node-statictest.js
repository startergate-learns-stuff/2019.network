var static = require('node-static');

var file = new static.Server('./public');

require('http').createServer((req, res) => {
  console.log("server available on 3000");
  req.addListener('end', () => {
    file.serve(req, res, (e, res1) => {
      if (e && (e.status === 404)) {
        file.serveFile('/not-found.html', 404, {}, req, res)
      }
    });
  }).resume();
}).listen(3000);
