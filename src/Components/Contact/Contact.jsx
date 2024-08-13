import React from 'react';
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "718bba88-cbcd-4fa7-a215-354b1e1dc0cd");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, question, and suggestion are important to us as we strive to provide ecceptional service to our university community.</p>
        <ul>
          <li> <img src={mail_icon} alt="" />pankaj.21442@knit.ac.in</li>
          <li> <img src={phone_icon} alt="" />+91 9057671539</li>
          <li> <img src={location_icon} alt="" />Uttar Pradesh District ETAH</li> 
        </ul>  
       </div>
       <div className='contact-col'>
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your phone number' required/>
            <label>Write your message here</label>
            <textarea name="message"  rows="6" placeholder='Enter your message' required></textarea>
            <button type='sumbit' className='btn dark-btn'>Sumbit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
       </div>
    </div>
  );
}

export default Contact;
