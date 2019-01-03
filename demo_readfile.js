//Node.js AS A FILE SERVER
//This code reads an HTML file and returns its content 

//Include http module
var http = require('http');
//To include the File System module, use the require() method
var fs = require('fs');

http.createServer(function(req,res){
  fs.readFile('demofile1.html', function(err,data){
    res.writeHead(200, {'Content-type':'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);
