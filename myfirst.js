//GETTING STARTED
//https://www.w3schools.com/nodejs/nodejs_get_started.asp

//The first file to be created is myfirst.js
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);
