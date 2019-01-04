//UPDATE FILES
//The File System module has 2 methods for updating files: fs.appendFile() and fs.writeFile().

//1) fs.appendFile()
//This method appends the specified content at the end of the specified file 

var fs = require('fs');
fs.appendFile('mynewfile1.txt', 'This is my text.', function(err) {
  if (err) throw err;
  console.log('Updated!');
});


//2) fs.writeFile()
//This method replaces the specified file and content

var fs = require('fs');
fs.writeFile('mynewfile3.txt', 'This is my text', function(err) {
  if (err) throw err;
  console.log('Replaced!');
});
