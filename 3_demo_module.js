//Code to use the module "myfirstmodule" in a Node.js file

var http = require('http');
//To locate the module ./ is used. It means that the module is located in the same folder as the Node.js file
var dt = require('./myfirstmodule');

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080);
