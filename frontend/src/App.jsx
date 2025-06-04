import React from 'react';

// src/index.js or src/main.jsx
import 'bootstrap/dist/css/bootstrap.min.css'; // CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Optional JS for modals, dropdowns, etc.
import MyLocation from './components/MyLocation';
import ContactForm from './components/EmailForm';
import "./app.css"
import Information from './components/Information';







function App() {

  return (
    <>
  <div className="outer-wrapper">
    <h1>Contact Us</h1>
    <div className="contact-page-container">
      <div className="half-width">
           <ContactForm></ContactForm>
      </div>
      <div className="half-width">
          <MyLocation></MyLocation>
      </div>
      <div className="information-full-width">
          <Information></Information>
      </div>
    </div>
  </div> 
       
    </>
  )
}

export default App
