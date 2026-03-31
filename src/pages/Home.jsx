import '../css/Home.css';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import { Link } from "react-router-dom";
import heroBg from "../assets/hero-bg.png";

export default function Home() {
    const handleDownloadQuestionPaper = () => {
        const fileId = '1y_KZ0ofTXXvXVTg-izpqUhoamJcYJGDp';
        const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}&confirm=1`;
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'KCSE_Computer_Project_2026.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return(
        <div className="home-container">
            <Navbar />
            
            <section className="hero" style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.8)), url(${heroBg})` }}>
                <div className="hero-content">
                    <div className="hero-badge">KCSE 2026 EXCLUSIVE</div>
                    <h1>Master Your Computer Project</h1>
                    <h2>Azani ISP Information System</h2>
                    <p className="hero-description">
                        Excellence is not an accident. Get the most comprehensive, professionally developed solution for the 2026 KCSE Computer Project. 
                        We provide full source code, detailed documentation, and expert guidance to ensure your top-tier grade.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/shop" className="btn btn-primary">Get the Full Project</Link>
                        <button onClick={handleDownloadQuestionPaper} className="btn btn-secondary">Download Question Paper</button>
                    </div>
                </div>
            </section>

            <section className="features">
                <div className="section-header">
                    <span className="subtitle">THE COMPLETE PACKAGE</span>
                    <h2>Everything You Need to Succeed</h2>
                </div>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <span className="icon-wrapper">💻</span>
                        </div>
                        <h3>Premium Source Code</h3>
                        <p>Fully functional, bug-free implementation using React and modern best practices.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">
                            <span className="icon-wrapper">📊</span>
                        </div>
                        <h3>Expert Documentation</h3>
                        <p>Comprehensive system analysis, design specifications, and implementation reports.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">
                            <span className="icon-wrapper">📚</span>
                        </div>
                        <h3>Database Mastery</h3>
                        <p>Complete ERDs, database schemas, and SQL scripts included for professional data management.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">
                            <span className="icon-wrapper">🤝</span>
                        </div>
                        <h3>24/7 Support</h3>
                        <p>Our expert team is available around the clock to assist with implementation and presentation.</p>
                    </div>
                </div>
            </section>

            <section className="about-preview">
                <div className="about-content">
                    <span className="subtitle">ABOUT THE SYSTEM</span>
                    <h2>Azani ISP Infrastructure</h2>
                    <p>
                        The Azani Internet Service Provider system is a robust platform designed to manage internet 
                        infrastructure for educational institutions. From primary schools to colleges, our system 
                        handles registration, bandwidth allocation, and billing with precision and efficiency.
                    </p>
                    <Link to="/about" className="link-btn">Learn More About Azani →</Link>
                </div>
            </section>

            <section className="cta">
                <div className="cta-box">
                    <h2>Ready to Secure Your Future?</h2>
                    <p>Join hundreds of successful candidates who used our professional solutions to excel in their KCSE Computer Projects.</p>
                    <div className="offer-badge">LIMITED TIME: 20% DISCOUNT APPLIED</div>
                    <Link to="/shop" className="btn btn-primary btn-large">Get Started Today</Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};
