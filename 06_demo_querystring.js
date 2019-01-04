//SPLIT THE QUERY STRING

//The method require() is used to include the HTTP module
var http = require('http');
//The URL module is a built-in module that allows to split the query string into readable parts
var url = require('url')

//Node.js AS AS WEB SERVER
//The method createServer() is used to create an HTTP server

//Create a server object
http.createServer(function (req,res) {
  //Add an HTTP header
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true),query;
  var txt = q.year + " " + q.month;
  res.end(txt);
  //The server object listens on port 8080  
}).listen(8080);
