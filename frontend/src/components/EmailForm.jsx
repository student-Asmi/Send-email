// ContactForm.jsx
import React, { useState } from "react";
import "./email.css"

function ContactForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    alert(result.message);
  };

  return (
    <div className="display">
    <form onSubmit={handleSubmit}  class="row g-3 needs-validation" novalidate>
      <div >
        <label for= "username" class ="form-label"><strong>Name</strong></label>
         <input
        type="text"
        name="username"
        placeholder="Your Name"
        value={formData.username}
        onChange={handleChange}
         class="form-control"
        required
      />
      </div>
      
     <div>
       <label for= "username" class ="form-label"><strong>Email</strong></label>
        <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        class="form-control"
        required
      />
     </div>

     <div>
      <label for="msg" class="form-label"> <strong>Message</strong></label>
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        class="form-control" 
        required
      />
     </div>
     
      
      <button class="btn btn-dark" type="submit">Send</button>
    </form>
    </div>
  );
}

export default ContactForm;
