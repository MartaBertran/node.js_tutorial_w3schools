//UPLOAD FILES
//Code to make a web page in Node.js that lets the user upload files to your computer

//STEP 1: CREATE AN UPLOAD FORM
//STEP 2: PARSE THE UPLOADED FILE
//STEP 3: SAVE THE FILE

//Include the http module
var http = require('http');
//The Formidable module is good for working with file uploads. This module can be downloaded and installed using NPM.
//The Formidable module is able to parse the uploaded file once it reaches the server.
var formidable = require('formidable');

//This code will produce an HTML form (step 1)
http.createServer(function(req, res) {

  if(){
  //This code will parse the uploaded file (step 2)
  if(req.url == '/fileupload'){
      var form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {
        res.write('File uploaded');
        res.end();
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
