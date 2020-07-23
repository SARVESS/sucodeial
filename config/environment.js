const fs = require('fs');
const rfs = require('rotating-file-stream');
const path = require('path');

const logDirectory = path.join(__dirname, '../production_logs');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

const accessLogStream = rfs.createStream('access.log', {
    interval: '1d',
    path: logDirectory
});


const production = {
    name: 'production',
    asset_path: process.env.SUCODEIAL_ASSET_PATH,
    session_cookie_key: process.env.SUCODEIAL_SESSION_COOKIE_KEY,
    db: process.env.SUCODEIAL_DB,
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587, // for TLS(Transport Layer Service)
        secure: false,
        auth: {
            user: process.env.SUCODEIAL_GMAIL_USERNAME,
            pass: process.env.SUCODEIAL_GMAIL_PASSWORD
        }
    },
    google_client_id: process.env.SUCODEIAL_GOOGLE_CLIENT_ID,
    google_client_secret: process.env.SUCODEIAL_GOOGLE_CLIENT_SECRET,
    google_call_back_url: process.env.SUCODEIAL_GOOGLE_CALLBACK_URL,
    jwt_secret: process.env.SUCODEIAL_JWT_SECRET,
    morgan: {
        mode: 'combined',
        options: {stream: accessLogStream} 
    }
}

module.exports = eval(process.env.SUCODEIAL_ENVIRONMENT) == undefined ? development : eval(process.env.SUCODEIAL_ENVIRONMENT);
