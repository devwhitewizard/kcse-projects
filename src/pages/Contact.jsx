import React, { useState } from "react";
import "../css/Contact.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <Navbar />
      <section className="contact">
        <div className="contact-container">
          <h1>Contact Us</h1>
          <p className="subtitle">Get in touch with us for any inquiries about KCSE Computer Projects</p>

          <div className="contact-content">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your email address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message here..."
                    rows="5"
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>

            <div className="contact-info">
              <h2>Get in Touch</h2>
              <div className="info-item">
                <h3>📞 Phone</h3>
                <a href="tel:+254794171080">+254 794 171 080</a>
              </div>
              <div className="info-item">
                <h3>📱 WhatsApp</h3>
                <a href="https://wa.link/17atr6">Chat on WhatsApp</a>
              </div>
              <div className="info-item">
                <h3>✉️ Email</h3>
                <a href="mailto:jonathanmwanza162@gmail.com">Email Us</a>
              </div>
              <div className="info-item">
                <h3>📺 YouTube</h3>
                <a href="https://www.youtube.com/">KCSE Computer Project 2026</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}


