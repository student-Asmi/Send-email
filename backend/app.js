// // server.js
// const express = require("express");
// const nodemailer = require("nodemailer");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(express.json());

// app.post("/send-email", async (req, res) => {
//   const { username, email, message } = req.body;

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.GMAIL_USER, // your email
//       pass: process.env.GMAIL_PASS, // your email app password
//     },
//   });

//   const mailOptions = {
//     from: email,
//     to: process.env.GMAIL_USER, // where you want to receive the email
//     subject: `New message from ${username}`,
//     text: `Message: ${message}\nEmail: ${email}`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: "Email sent successfully!" });
//   } catch (error) {
//     res.status(500).json({ message: "Email sending failed", error });
//   }
// });

// app.get("/",  (req, res) =>{
// res.send("i love u");
// })
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


// const express = require("express");
// const nodemailer = require("nodemailer");
// const cors = require("cors");
// const userSchema = require("./Model/user.js"); // This should be your Mongoose model
// require("dotenv").config();
// const mongoose = require("mongoose");

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // DB Connection
// mongoose.connect('mongodb://127.0.0.1:27017/contact', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("✅ MongoDB connected"))
// .catch((err) => console.error("❌ MongoDB connection error:", err));

// // Send Email to a specific user by ID
// app.post("/send-email/:id", async (req, res) => {
//   const { username, email, message } = req.body;
//   const { id } = req.params;

//   // Validate input
//   if (!username || !email || !message) {
//     return res.status(400).json({ message: "All fields are required." });
//   }

//   try {
//     // Find user from DB by id
//     const user = await userSchema.findById(id);
//     if (!user) {
//       return res.status(404).json({ message: "User not found." });
//     }

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.GMAIL_USER,
//         pass: process.env.GMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: process.env.GMAIL_USER,
//       to: user.email,
//       subject: `New message from ${username}`,
//       text: `Message: ${message}\n\nSender Email: ${email}`,
//       replyTo: email,
//     };

//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: "✅ Email sent successfully!" });
//   } catch (error) {
//     console.error("❌ Email sending failed:", error);
//     res.status(500).json({ message: "Email sending failed", error });
//   }
// });

// // Health check route
// app.get("/", (req, res) => {
//   res.send("❤️ Server is running");
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });


const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// POST route to send email directly to frontend-provided email
app.post("/send-email", async (req, res) => {
  const { username, email, message } = req.body;

  // Validate input
  if (!username || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // Create transporter for Gmail
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, // Your Gmail address
      pass: process.env.GMAIL_PASS, // Your Gmail app password
    },
  });

  // Email options
  const mailOptions = {
    from: process.env.GMAIL_USER,    // Sender (your Gmail)
    to: email,                       // Receiver (frontend email)
    subject: `New message from ${username}`,
    text: `Message: ${message}\n\nSender Email: ${email}`,
    replyTo: email,                  // Reply goes to sender email
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email sending failed:", error);
    res.status(500).json({ message: "Email sending failed.", error });
  }
});

// Health check route
app.get("/", (req, res) => {
  res.send("Server is running ❤️");
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
