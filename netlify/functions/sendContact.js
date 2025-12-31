const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const data = JSON.parse(event.body);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mail = {
      from: `${data.firstName || ''} ${data.lastName || ''} <${data.email || ''}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: 'Contact Form Submission - Portfolio',
      html: `<p>Name: ${data.firstName || ''} ${data.lastName || ''}</p>
             <p>Email: ${data.email || ''}</p>
             <p>Phone: ${data.phone || ''}</p>
             <p>Message: ${data.message || ''}</p>`,
    };

    await transporter.sendMail(mail);

    return {
      statusCode: 200,
      body: JSON.stringify({ code: 200, status: 'Message Sent' }),
    };
  } catch (err) {
    console.error('sendContact error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    };
  }
};
