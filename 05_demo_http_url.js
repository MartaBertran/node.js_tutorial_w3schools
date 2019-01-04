//READ THE QUERY STRING

//The method require() is used to include the HTTP module
var http = require('http');


//Node.js AS AS WEB SERVER
//The method createServer() is used to create an HTTP server

//Create a server object
http.createServer(function (req,res) {
  //Add an HTTP header
  res.writeHead(200, {'Content-Type': 'text/html'});
  //The function passed into the http.createServer() has a req argument that represents the request from the client, as an object (http.IncomingMessage object)
  //This object has a property called "url" which holds the part of the url that comes after the domain name
  res.write(req.url)
  //End the response
  res.end();
  //The server object listens on port 8080  
}).listen(8080);
