import React, { useState } from 'react';
import '../Styles/contact.css'; 

const ContactPage = () => {
  const [responseMsg, setResponseMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple alert or message show karne ke liye
    setResponseMsg("Thank you! Your message has been sent.");
    
    // Form reset karne ke liye
    e.target.reset();

    // 3 second baad message gayab karne ke liye (optional)
    setTimeout(() => setResponseMsg(''), 3000);
  };

  return (
    <div className="contact-page-wrapper">
      {/* Navbar is global, so not added here */}

      <section className="contact-section">
        <div className="contact-container">
          <h1>Contact Us</h1>
          <p>Have questions or feedback? Fill out the form below and we'll get back to you soon.</p>

          <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />

            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="example@email.com" required />

            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="+91 9876543210" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Write your message here..." required></textarea>

            <button type="submit">Send Message</button>
          </form>

          {responseMsg && (
            <p id="responseMsg" style={{ marginTop: '15px', color: '#931d45', fontWeight: 'bold' }}>
              {responseMsg}
            </p>
          )}
        </div>
      </section>

    </div>
  );
};

export default ContactPage;