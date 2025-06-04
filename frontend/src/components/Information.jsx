import React from 'react'
import "./information.css"

const Information = () => {
    const mapLink =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.3806572707267!2d88.43156537509029!3d22.973025729208533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f895005d1b5ab7%3A0xac7e734c7f60a8a6!2sRADHAKRISHNAN%20BHAWAN%20(B.T.%20MEN%27S%20HALL)!5e0!3m2!1sen!2sin!4v1747980905227!5m2!1sen!2sin";

     const directionLink = "https://www.google.com/maps/dir/?api=1&destination=Your+Hostel+Name+City";

  return (
         <div className='map'>
       <iframe
        src={mapLink}
        width="100%"
        height="600"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="hostel-map"
      ></iframe>
     </div>
  )
}

export default Information
