//THE BUILT-IN HTTP MODULE
//The method require() is used to include the HTTP module

var http = require('http');


//Node.js AS AS WEB SERVER
//The method createServer() is used to create an HTTP server

//Create a server object
http.createServer(function (req,res) {
  //Write a response to the client
  res.write('Hello World!')
  //End the response
  res.end();
  //The server object listens on port 8080  
}).listen(8080);
