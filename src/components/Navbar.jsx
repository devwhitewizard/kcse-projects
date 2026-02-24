import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const handleLinkClick = () => {
    setOpen(false); // Close menu when a link is clicked
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo" onClick={handleLinkClick}>
          <img src="/logo.png" alt="KCSE Projects Logo" className="logo-img" />
        </Link>
        <button
          className={`nav-toggle ${open ? 'open' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          <span className="hamburger" />
        </button>
        
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          <li><Link to="/" className={isActive("/")} onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/about" className={isActive("/about")} onClick={handleLinkClick}>About</Link></li>
          <li><Link to="/projects" className={isActive("/projects")} onClick={handleLinkClick}>Past Projects</Link></li>
          <li><Link to="/shop" className={isActive("/shop")} onClick={handleLinkClick}>Shop</Link></li>
          <li><Link to="/contact" className={isActive("/contact")} onClick={handleLinkClick}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}