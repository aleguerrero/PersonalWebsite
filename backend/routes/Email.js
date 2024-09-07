const router = require('express').Router();
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

router.post("", async (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_EMAIL,
            pass: process.env.GMAIL_PASSWORD
        },
    });

    // Read the HTML template file
    const filePath = path.join(__dirname, '../resources/email_template.html');
    let htmlTemplate = fs.readFileSync(filePath, 'utf-8');

    const thankyou_filePath = path.join(__dirname, '../resources/thankyou_template.html');
    let thankyou_htmlTemplate = fs.readFileSync(thankyou_filePath, 'utf-8');

    const { name, email, message } = req.body;
    
    // Replace placeholders with dynamic content
    htmlTemplate = htmlTemplate.replace('{{name}}', name)
                               .replace('{{email}}', email)
                               .replace('{{message}}', message);
 

    thankyou_htmlTemplate = thankyou_htmlTemplate.replace('{{name}}', name)
                                                 .replace('{{email}}', email)
                                                 .replace('{{message}}', message)

    const mailOptions = {
        from: process.env.GMAIL_EMAIL,
        to: process.env.GMAIL_EMAIL,
        subject: `New message from ${name}`,
        html: htmlTemplate
    };

    const thankyouMailOptions = {
        from: process.env.GMAIL_EMAIL,
        to: email,
        subject: "Thank You for Your Inquiry!",
        html: thankyou_htmlTemplate
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error:', error);
            res.status(500).send('An error occurred.');
        } else {
            console.log("Email sent:", info.response);
            transporter.sendMail(thankyouMailOptions, (error, info) => {
                if (error) {
                    console.log("Error sending confirmation email to client:", error);
                    res.status(500).send('An error occurred.');
                } else {
                    console.log("Email sent to client:", info)
                }
            })
            res.status(200).send('Messages went successfully!');
        }
    })
});

module.exports = router;