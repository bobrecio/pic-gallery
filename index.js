var http = require('http');
var filelist = require('./modules/getDirFiles');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(JSON.stringify(filelist.getDirFiles("./")));
  res.end();
}).listen(8080);

// var http = require('http');
// var dt = require('./modules/myfirstmodule');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write("The date and time are currently: " + dt.myDateTime());
//   res.end();
// }).listen(8080);