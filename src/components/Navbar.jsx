import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="/" className="logo">
          <img src="/logo.png" alt="KCSE Projects Logo" className="logo-img" />
        </a>
        <button
          className={`nav-toggle ${open ? 'open' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          <span className="hamburger" />
        </button>
        
        <ul className={`nav-links ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
          <li><a href="/" className={isActive("/")}>Home</a></li>
          <li><a href="/about" className={isActive("/about")}>About</a></li>
          <li><a href="/projects" className={isActive("/projects")}>Past Projects</a></li>
          <li><a href="/shop" className={isActive("/shop")}>Shop</a></li>
          <li><a href="/contact" className={isActive("/contact")}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}