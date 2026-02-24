import React from "react";
import { Link } from "react-router-dom";
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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Past Projects</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/contact">Contact</Link></li>
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
        <p><Link to="/terms">Terms and Conditions</Link> apply.</p>
      </div>
    </footer>
  );
}
