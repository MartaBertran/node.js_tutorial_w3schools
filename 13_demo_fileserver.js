//Node.js FILE SERVER
//Two html files ('summer.html' and 'winter.html') are previously created and saved in the same folder as the node.js files.
//The objective is to serve the file requested by the client, by combining:
// *Parse the query string
// *Node.js as a file server

//This code creates a Node.js file that opens the requested file and returns the content to the client.
//If anything goes wrong, it throws a 404 error.

//Import modules
var http = require('http');
var url = require('url');
var fs = require('fs');

//Create the server
http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  
  fs.readFile(filename, function(err, data) {
    if (err){
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
  
}).listen(8080);
