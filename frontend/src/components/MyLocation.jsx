import React from 'react'
import "./location.css"

const MyLocation = () => {

     const phone = "+919431283431";
    const whatsapp ="9431283431";
    
     const Hostel = "BT Mens";
     const Warden = "Supriyo ghoshal";
     const ManagerContact = "+916294769803";

  return (
    <div>
         <div className="whole">
  <div className="card text-center me-5 col-md-4 bg-dark-subtle border border-primary-subtle rounded-3 w-100" style={{ maxWidth: "500px" }}>
     <div className="card-header card text-center">
    <strong> Information</strong>
    </div>
        <div className="card-body">
          <p><strong>🏠 Address:</strong> BT Mens Hostel,<br></br> BT Road, near Central Park</p>
          <p><strong>📞 Phone:</strong> <a href={`tel:${phone}`} className="text-decoration-none card-text text-center">{phone}</a></p>
          <p><strong>✉️ Email:</strong> <a href="mailto:BTmens@gmail.com" className="text-decoration-none card-text text-center">BTmens@gmail.com</a></p>
          <p><strong>💬 WhatsApp:</strong> <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-success btn-sm">Chat on WhatsApp</a></p>
        </div>
        
        <div className="card-body">
          <h4 className="text-secondary">🏢 Manager Information</h4>
          <p><strong> Name:</strong> {Warden}</p>
          <p><strong>📞 Manager Contact:</strong> <a href={`tel:${ManagerContact}`} className="text-decoration-none">{ManagerContact}</a></p>
        </div>
       </div>
     </div>
   

     
    </div>
  
  )
}



export default MyLocation;
