const queue = require('../config/kue');

const commentMailer = require('../mailers/comments_mailer');

// calling the comments to send emails which is filled in queue
queue.process('emails', function(job, done){
    console.log('emails worker is processing a job', job.data);

    commentMailer.newComment(job.data);

    done();
});