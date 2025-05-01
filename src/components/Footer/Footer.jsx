import React, { useState } from 'react';
import './Footer.css';
import { img } from 'motion/react-client';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer-waves">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0f172a" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="footer-content-wrapper">
        <div className="footer-top">
          <div className="footer-newsletter">
            <h3>Join Our Community</h3>
            <p>Get exclusive updates and learning resources</p>
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-main">
          <div className="footer-section company-info">
            <div className="footer-logo">
              <img src="/public/fine.png" alt="FineTeach Logo" />
              <h3>FineTeach</h3>
            </div>
            <p>Transforming education through innovative technology solutions and AI-powered learning experiences.</p>
            <div className="social">
            <img src="/face.jpg" alt="face-1" />
            <img src="/face-2.jpg" alt="face-1" />
            <img src="/face-3.jpg" alt="face-1" />
            <img src="/face-4.jpg" alt="face-1" />
          


            </div>
          </div>

          <div className="footer-links-grid">
            <div className="footer-section">
              <h4>Platform</h4>
              <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Security</a></li>
                <li><a href="#">Integrations</a></li>
                <li><a href="#">Pricing</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Tutorials</a></li>
                <li><a href="#">Support</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Partners</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <p>&copy; 2024 FineTeach. All rights reserved.</p>
            <div className="legal-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Settings</a>
            </div>
          </div>
          <div className="footer-badges">
            <span className="badge">
              <i className="fas fa-shield-alt"></i> ISO 27001 Certified
            </span>
            <span className="badge">
              <i className="fas fa-lock"></i> GDPR Compliant
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
