import React from "react";
import "../../css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About</h3>
          <p>
            We help high school candidates efficiently and professionally tackle
            their final year computer studies projects, contributing to their
            academic success.
          </p>
        </div>

        <div className="footer-section">
          <h3>Site Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Past Projects</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li><a href="tel:+254794171080">📞 +25494171080</a></li>
            <li><a href="https://wa.link/17atr6">📱 WhatsApp</a></li>
            <li><a href="mailto:jonathanmwanza162@gmail.com">✉️ Email Us</a></li>
            <li><a href="https://www.youtube.com">📺 YouTube</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 KCSE COMPUTER PROJECT 2026 - AZANI INTERNET SERVICE PROVIDER</p>
        <p><a href="/terms">Terms and Conditions</a> apply.</p>
      </div>
    </footer>
  );
}
