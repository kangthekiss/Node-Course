const sgMail = require('@sendgrid/mail')

const SENDGRID_API_KEY = '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'

sgMail.setApiKey(SENDGRID_API_KEY)

const msg = {
  to: 'kangthekiss@gmail.com',
  from: 'kangloverak@gmail.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}

sgMail.send(msg)