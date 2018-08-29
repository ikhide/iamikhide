var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer')

//send email

router.post('/send', (req,res, next)=>{
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user:'ikhide.atakpu@gmail.com',
      pass:'PHILANIG'
    }
  });

  var mailOptions = {
    from: req.body.name + ' <req.body.email>',
    to: 'ikhideatwork2025@gmail.com',
    subject : 'IamIkhide',
    text: 'you have a submission from... Name: ' +req.body.name+'Email: '+req.body.email+' Message:'+req.body.message,
    html: '<p>you have a submission from...</p> <ul><li>Name: ' +req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>',
  
  };

  transporter.sendMail(mailOptions, (error, info) =>{
    if (error) return console.log(error);
    console.log('Message Sent: '+ info.response);
    res.redirect('/');
  });
});

module.exports = router;
