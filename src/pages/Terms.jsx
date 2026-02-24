import '../css/Terms.css';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";

export default function Terms() {
    return (
        <div>
            <Navbar />
            <section className="terms-hero">
                <div className="terms-content">
                    <h1>Terms and Conditions</h1>
                    <p>Last updated: February 24, 2026</p>
                </div>
            </section>

            <section className="terms-section">
                <div className="terms-container">
                    <div className="terms-item">
                        <h2>1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using this website, you accept and agree to be bound by the terms and provision 
                            of this agreement. If you do not agree to abide by the above, please do not use this service.
                        </p>
                    </div>

                    <div className="terms-item">
                        <h2>2. Use License</h2>
                        <p>
                            Permission is granted to temporarily download one copy of the materials (information or software) 
                            on KCSE Computer Project website for personal, non-commercial transitory viewing only. This is the 
                            grant of a license, not a transfer of title, and under this license you may not:
                        </p>
                        <ul>
                            <li>Modifying or copying the materials</li>
                            <li>Using the materials for any commercial purpose or for any public display</li>
                            <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                            <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
                            <li>Removing any copyright or other proprietary notations from the materials</li>
                            <li>Transmitting the materials over a network or selling or offering them for sale</li>
                        </ul>
                    </div>

                    <div className="terms-item">
                        <h2>3. Disclaimer</h2>
                        <p>
                            The materials on KCSE Computer Project website are provided on an 'as is' basis. KCSE Computer 
                            Project makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties 
                            including, without limitation, implied warranties or conditions of merchantability, fitness for a particular 
                            purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>
                    </div>

                    <div className="terms-item">
                        <h2>4. Limitations</h2>
                        <p>
                            In no event shall KCSE Computer Project or its suppliers be liable for any damages (including, without 
                            limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or 
                            inability to use the materials on KCSE Computer Project website, even if we or our authorized representative 
                            has been notified orally or in writing of the possibility of such damage.
                        </p>
                    </div>

                    <div className="terms-item">
                        <h2>5. Accuracy of Materials</h2>
                        <p>
                            The materials appearing on KCSE Computer Project website could include technical, typographical, or 
                            photographic errors. KCSE Computer Project does not warrant that any of the materials on its website are 
                            accurate, complete, or current. KCSE Computer Project may make changes to the materials contained on its 
                            website at any time without notice.
                        </p>
                    </div>

                    <div className="terms-item">
                        <h2>6. Links</h2>
                        <p>
                            KCSE Computer Project has not reviewed all of the sites linked to its website and is not responsible for 
                            the contents of any such linked site. The inclusion of any link does not imply endorsement by KCSE Computer 
                            Project of the site. Use of any such linked website is at the user's own risk.
                        </p>
                    </div>

                    <div className="terms-item">
                        <h2>7. Modifications</h2>
                        <p>
                            KCSE Computer Project may revise these terms of service for its website at any time without notice. By 
                            using this website, you are agreeing to be bound by the then current version of these terms of service.
                        </p>
                    </div>

                    <div className="terms-item">
                        <h2>8. Governing Law</h2>
                        <p>
                            These terms and conditions are governed by and construed in accordance with the laws of the Republic of 
                            Kenya, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                        </p>
                    </div>

                    <div className="terms-item">
                        <h2>9. User Responsibilities</h2>
                        <p>
                            Users are responsible for maintaining the confidentiality of their account information and passwords. 
                            You agree to accept responsibility for all activities that occur under your account. You must notify us 
                            immediately of any unauthorized use of your account or any other breaches of security.
                        </p>
                    </div>

                    <div className="terms-item">
                        <h2>10. Contact Us</h2>
                        <p>
                            If you have any questions about these Terms and Conditions, please contact us at:
                        </p>
                        <ul>
                            <li>Email: jonathanmwanza162@gmail.com</li>
                            <li>Phone: +254794171080</li>
                            <li>WhatsApp: <a href="https://wa.link/17atr6">Chat with us</a></li>
                        </ul>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
