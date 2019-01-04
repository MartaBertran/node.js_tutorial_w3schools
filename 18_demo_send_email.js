//Node.js SEND AN EMAIL

//The Nodemailer module makes it easy to send emails from your computer.
//It can be downloaded and installed using npm.
var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
  //This tutorial shows how to use your Gmail account to send an email.
  service: 'gmail',
  //Use the username and password from your selected email provider. 
  auth:{
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});


var mailOptions = {
  from: 'youremail@gmail.com',
  //To send an email to one receiver
  to: 'myfriend@yahoo.com',
  //(Multiple receivers) To send an email to more than one receiver
  to: 'myfriend@yahoo.com', 'myotherfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
  //(Send HTML) To send HTML formatted text in your email, use the "html" property instead of the "text" property
  html: '<h1>Welcome</h1><p>That was easy!</p>'
};


transporter.sendMail(mailOptions, function(error, info){
  if (error){
    console.log(error);
  } else{
    console.log('Email sent: ' + info.response);
  }
});
