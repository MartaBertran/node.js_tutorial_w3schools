//UPLOAD FILES
//Code to make a web page in Node.js that lets the user upload files to your computer

//STEP 1: CREATE AN UPLOAD FORM
//STEP 2: PARSE THE UPLOADED FILE
//STEP 3: SAVE THE FILE

//(step 1) Include the http module 
var http = require('http');
//(step 2)The Formidable module is good for working with file uploads. This module can be downloaded and installed using NPM.
//The Formidable module is able to parse the uploaded file once it reaches the server. 
var formidable = require('formidable');
//(step 3) Include the fs module
var fs = require('fs');

//(step 1) This code will produce an HTML form 
http.createServer(function(req, res) {

  //(step 2) This code will parse the uploaded file 
  if(req.url == '/fileupload'){ 
      //(step 2) When the file is uploaded and parsed, it gets placed on a temporary folder of your computer.
      var form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {
        //(step 3) Move the file from the temporary folder to the current folder.
        var oldpath = files.filetoupload.path;
        var newpath = 'C:/Users/Your Name/' + files.filetoupload.name;
        fs.rename(oldpath, newpath, function(err){
          if (err) throw err;
          res.write('File uploaded and moved!');
          res.end();
        });  
  });
      
  } else {
    //This code will produce an HTML form (step 1)
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
  
}).listen(8080);
