const formidable = require("formidable");
const nodemailer = require('nodemailer');
const path = require("path");

const dir = path.dirname(__dirname) + '/client/public/assets/images/';

module.exports = {
  uploadFile: function (req, res) {  
    var filename = [];

    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';

    form.parse(req);
    form.on('fileBegin', function (name, file) {
      file.path = dir + file.name;
      filename.push({"path": file.path});
    });

    form.on('file', function (name, file) {
      res.json({"filename":filename});
    });
  },

  sendEmail: function (req, res) {

    let myEmail = process.env.EMAIL_FROM;  
    let myPassword = process.env.EMAIL_PASSWORD;
    let to = req.body.to;
    let subject = req.body.subject;
    let text = req.body.text;
    let filename =  req.body.filename;
  

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
    }

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
