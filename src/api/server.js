const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const { firstName, lastName, email, linkedin, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res
      .status(400)
      .json({ message: 'All the fields are not filled! Please fill all the fields and try again' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: 'New Contact Form Submission',
    text: `You have a new message from:
Name: ${firstName} ${lastName}
Email: ${email}
LinkedIn: ${linkedin}
Message: ${message}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent: ' + info.response });
  } catch (error) {
    res.status(500).json({ success: false, message: error.toString() });
  }
}