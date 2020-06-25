const nodeMailer = require('../config/nodemailer');


// this is another way of exporting a method
exports.newComment = (comment) => {
    
    // rendering our html template for mail
    let htmlString = nodeMailer.renderTemplate({comment: comment}, '/comments/new_comment.ejs');

    // function to send mail via mailer 
    nodeMailer.transporter.sendMail({
        from: 'sucodeial.org@gmail.com',
        to: comment.user.email,
        subject: "New Comment Published",
        html: htmlString
    }, (err, info) => {
        if(err){
            console.log('Error in sending mail', err);
            return;
        }

        console.log('Message sent', info);
        return;
    });
}