//DELETE FILES
//To delete a file with the File System module, use the fs.unlink() method.

//1) fs.unlink()
//This method deletes the specified file

var fs = require('fs')
fs.unlink('mynewfile2.txt', function(err) {
  if(err) throw err;
  console.log('File deleted!');
});
