//CREATE FILES
//The File System module has 3 methods for creating new files: fs.appendFile(), fs.open() and fs.writeFile().

//1) fs.appendFile()
//This method appends specified content to a file. 
//If the file does not exist, it will be created

var fs = require('fs')
fs.appendFile('mynewfile1.txt', 'Hello content!', function(err){
  if(err) throw err;
  console.log('Saved!');
});


//2) fs.open()
//This method takes a ''flag'' as the second argument. If the flag is "w" for "writing", the specified file is opened for writing.
//If the file does not exist, an empty file will be created.

var fs = require('fs');
fs.open('mynewfile2.txt', 'w', function(err,file){
  if(err) throw err;
  console.log('Saved!');
});


//3) fs.writeFile()
//This method replaces the specified file and content if it exists.
//If the file does not exist, a new file, containing the specified content, will be created.
var fs = require('fs');
fs.writeFile('mynewfile3.txt', 'Hello content!', function(err){
  if(err) throw err;
  console.log('Saved!');
});
