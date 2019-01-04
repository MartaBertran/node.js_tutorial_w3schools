//Node.js NPM
//NPM is a package manager for Node.js packages
//A package in Node.js contains all the files you need for a module
//Modules are JavaScript libraries that you can include in your project

//You might have to download a package from www.npmjs.com before using it


//This code converts the output "Hello World!" into upper-case letters
var http = require('http');
//Once downloaded, the "upper-case" package can be used, in the same way as when a module is included
var uc = require('upper-case');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-type': 'text/html'});
  res.write(uc("Hello world!"));
  res.end();
}).listen(8080);
