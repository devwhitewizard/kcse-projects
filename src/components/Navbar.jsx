import React, { useState, useEffect, useRef } from "react";
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

  const navRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    // Close on Escape
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    // Close when clicking outside the nav when open
    const onDown = (e) => {
      if (!open) return;
      if (navRef.current && !navRef.current.contains(e.target) && toggleRef.current && !toggleRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, [open]);

  useEffect(() => {
    // Manage focus: move focus into menu when opened, return to toggle when closed
    if (open) {
      const firstLink = navRef.current && navRef.current.querySelector("a");
      if (firstLink && typeof firstLink.focus === "function") firstLink.focus();
    } else {
      if (toggleRef.current && typeof toggleRef.current.focus === "function") toggleRef.current.focus();
    }
  }, [open]);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo" onClick={handleLinkClick}>
          <img src="/logo.png" alt="KCSE Projects Logo" className="logo-img" />
        </Link>
        <button
          ref={toggleRef}
          className={`nav-toggle ${open ? 'open' : ''}`}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          <span className="hamburger" />
        </button>
        
        <ul ref={navRef} className={`nav-links ${open ? 'open' : ''}`}>
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