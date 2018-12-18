//NODE.js MODULES
//https://www.w3schools.com/nodejs/nodejs_modules.asp

//To include a module, use the require() function with the name of the module
var http = require('http');

//Now the application has access to the http module and is able to create a server:
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);

//Example of module creation
//The exports keyword makes properties and methods available outside the module file
//Module that returns the current date and time
exports.myDateTime = function(){
  return Date();
};
