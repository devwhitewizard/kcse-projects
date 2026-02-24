import React from "react";
import "../css/About.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";

export default function About() {
  return (
    <div>
      <Navbar />
      <section className="about">
        <h1>About KCSE Computer Projects</h1>
        
        <div className="about-content">
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              We help high school candidates efficiently and professionally tackle
              their final year computer studies projects, contributing to their
              academic success.
            </p>
            
            <h2>Current Project: Azani ISP (2026)</h2>
            <p>
              Azani is a company that deals with provision of internet services and
              internet infrastructure to learning institutions including primary,
              junior, senior schools and colleges.
            </p>
            <p>
              Institutions interested in the services are required to pay a
              registration fee of KSh 8,500 to the company. The company then offers
              various internet services where the cost per month is based on the
              bandwidth requirements.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
