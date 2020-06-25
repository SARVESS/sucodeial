const nodemailer =  reequire('nodemailer');
const ejs = require('ejs');
const path =  require('path');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587, // for TLS(Transport Layer Service)
    secure: false,
    auth: {
        user: 'sucodeial.org@gmail.com',
        pass: 'Sucodeial_#76'
    }
});

let renderTemplate = (data, relativePath) => {
    let mailHTML;
    ejs.renderFile(
       path.join(__dirname, '../views/mailers', relativePath),
       data,
       function(err, template){
           if(err){console.log('error in rendering template' , err); return;}

           mailHTML = template;
       }
    )
    return mailHTML;
}

module.exports = {
    transporter: transporter,
    renderTemplate: renderTemplate
}