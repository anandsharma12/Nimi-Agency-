import React from "react";
import "./Home.css";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-section">
        <h2 className="contact-title">Contact</h2>

        <p className="contact-email">info@nini-agency.com</p>

        <div class="social-icons">
          <a href="#" class="icons whatsapp">
            <i class="fab fa-whatsapp"></i>
          </a>
          <a href="#" class="icons telegram">
            <i class="fab fa-telegram-plane"></i>
          </a>
          <a href="#" class="icons instagram">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
