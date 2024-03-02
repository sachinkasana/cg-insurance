// src/components/Contact.js
import React from 'react';
import './Contact.css'; 

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-details">
          <h2>Contact Us</h2>
          <p>
            <strong>CGInsurance</strong>
            <br />
            4229 Lafayette Center Drive, Suite # 1880,
            <br />
            Chantilly, VA 20151
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:helpdesk@connectgenus.com">helpdesk@connectgenus.com</a>
          </p>
          <p>
            <strong>Phone:</strong> <a href="tel:+18339617310">+1 (833)-961-7310</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
