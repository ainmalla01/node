import { createTransport } from "nodemailer";

// Create a transporter using Gmail
let transporter = createTransport({
  service: "gmail",
  auth: {
    user: "aionmalla111@gmail.com",      // replace with your Gmail
    pass: "aionmalla@111",          // replace with Gmail App Password
  },
});

// Email options
let mailOptions = {
  from: "aionmalla111@gmail.com",
  to: "aionmalla14@gmail.com", // You can send to yourself or anyone
  subject: "Test Email from Node.js",
  text: "Hello! This is a test email sent from Node.js!",
};

// Send the email
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log("Error: ", error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
