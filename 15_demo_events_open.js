//Node.js EVENTS
//Every action in a computer (make a connection, open a file...) is an event
//Objects in Node.js can fire events, like the readStream object fires events when opening and closing a file

var fs = require('fs');
var rs = fs.createReadStream('./demofile.txt');
rs.on('open', function () {
  console.log('The file is open');
});
