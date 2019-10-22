const formidable = require("formidable");
const nodemailer = require('nodemailer');
//const fs = require('fs');
const path = require("path");

const dir = path.dirname(__dirname) + '/client/public/assets/images/';

module.exports = {
  uploadFile: function (req, res) {
    console.log('posted')
    var filename = [];

    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    console.log("form " + JSON.stringify(form))

    form.parse(req);
    //   console.log("req "+JSON.stringify(req))
    //I think this does the upload
    form.on('fileBegin', function (name, file) {
      file.path = dir + file.name;
      filename.push({"path": file.path});
    });
    //or does this load it
    form.on('file', function (name, file) {
      console.log('Uploaded ' + filename);
      res.json({"filename":filename});
    });
  },

  sendEmail: function (req, res) {
    console.log('email');
    console.log('email req body ' + JSON.stringify(req.body));

    let myEmail = process.env.EMAIL_FROM;  
    let myPassword = process.env.EMAIL_PASSWORD;
    let to = req.body.to;
    let subject = req.body.subject;
    let text = req.body.text;
    let filename =  req.body.filename;
    console.log('JSON filename ' + JSON.stringify(filename));

    let transport = nodemailer.createTransport({
      service: 'hotmail',
      auth: {
        user: myEmail,
        pass: myPassword
      }
    });
    let message = {
      from: myEmail,
      to: to,
      subject: subject,
      text: text,
      attachments: filename
 /*     attachments: [
        {
          path: filename
        }
      ]*/
    }
    //to: '8045126282@vzwpix.com,dawarrick@yahoo.com',
    //console.log('filename ' + filename)
/*    let message = {
      from: myEmail,
      to: 'dawarrick@yahoo.com',
      subject: 'StayCare Message',
      text: 'Having fun!',
      attachments: [
        {
          path: filename
        }
      ]
    }*/

    transport.sendMail(message, function (err) {
      if (err) {
        console.log("failed to send email. " + err);
        return;
      }
      console.log("email sent.");
      res.json({});
    });
  }
};
