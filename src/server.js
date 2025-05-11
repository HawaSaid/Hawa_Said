const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const port = 3500;

app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});

app.post('/contact', (req, res) => {
    const { firstName, lastName, email, linkedin, message } = req.body;
    if(!firstName||!lastName||!email||!message){
        return res.status(400).json({message:'All the fields are not filled! Please fill all the fields and try again'});
    }
    const mailOptions = {
        from: email,
        to: process.env.EMAIL,
        subject: 'New Contact Form Submission',
        text: `You have a new message from:
        Name: ${firstName} ${lastName}
        Email: ${email}
        LinkedIn: ${linkedin}
        Message: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ success: false, message: error.toString() });
        }
        res.status(200).json({ success: true, message: 'Email sent: ' + info.response });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
