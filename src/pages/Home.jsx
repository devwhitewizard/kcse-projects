import '../css/Home.css';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";

export default function Home() {
    const handleDownloadQuestionPaper = () => {
        // Try multiple approaches to download the file from Google Drive
        const fileId = '1y_KZ0ofTXXvXVTg-izpqUhoamJcYJGDp';
        
        // Attempt 1: Direct download with alt=media parameter
        const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}&confirm=1`;
        
        // Create a temporary anchor element and trigger download
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'KCSE_Question_Paper.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return(
        <div>
            <Navbar />
            <section className="hero">
                <div className="hero-content">
                    <h1>KCSE Computer Project 2026</h1>
                    <p className="date">January 22, 2026</p>
                    <h2>Azani Internet Service Provider Information System</h2>
                    <p className="description">
                        Get expert guidance and complete solutions for your KCSE Computer Project 2026.
                        We provide fully developed, professionally built project systems to ensure your academic success.
                    </p>
                    <div className="hero-buttons">
                        <a href="/shop" className="btn btn-primary">Get Full Project</a>
                        <button onClick={handleDownloadQuestionPaper} className="btn btn-secondary" style={{ border: 'none', cursor: 'pointer' }}>Get Question Paper</button>
                    </div>
                </div>
            </section>

            <section className="features">
                <h2>What We Offer</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">💻</div>
                        <h3>Complete Source Code</h3>
                        <p>Fully developed, production-ready code with detailed documentation</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">📊</div>
                        <h3>Database Design</h3>
                        <p>Comprehensive database schema and setup instructions included</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">📚</div>
                        <h3>Documentation</h3>
                        <p>Step-by-step guides and implementation documentation</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🤝</div>
                        <h3>24/7 Support</h3>
                        <p>Dedicated support team available for all your questions</p>
                    </div>
                </div>
            </section>

            <section className="about-preview">
                <h2>About Azani ISP System</h2>
                <p>
                    Azani is a company that deals with provision of internet services and internet infrastructure 
                    to learning institutions. These institutions include primary, junior, senior schools and colleges. 
                    Institutions interested in the services are required to pay a registration fee of KSh 8,500 to the 
                    company. The company then offers various internet services where the cost per month is based on the 
                    bandwidth requirements.
                </p>
                <a href="/about" className="link-btn">View Full Details →</a>
            </section>

            <section className="cta">
                <h2>Limited Time Offer - 20% Discount!</h2>
                <p>Get your fully done KCSE project work now and boost your final grade</p>
                <a href="/shop" className="btn btn-primary btn-large">Get Started Today</a>
            </section>

            <Footer />
        </div>
    );
};
