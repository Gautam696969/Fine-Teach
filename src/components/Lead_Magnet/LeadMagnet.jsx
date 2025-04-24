import React, { useState } from 'react';
import './LeadMagnet.css';

const LeadMagnetCTA = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    alert("Thank you! We'll send your free report soon.");
    setEmail('');
  };

  return (
    <div className="cta-container">
    <div className="cta-section">
      <h2>Get Your Free AI-Powered Financial Report</h2>
      <p>Sign up now and receive a personalized financial report powered by AI — absolutely free!</p>

      <form onSubmit={handleSubmit} className="cta-form">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Get My Report</button>
      </form>

      <div className="ebook-download">
        <p>Want to dive deeper?</p>
        <a href="/ebook/AI-in-Finance-2025.pdf" download>
          📘 Download our free eBook: <strong>AI in Modern Finance – 2025 Outlook</strong>
        </a>
      </div>
    </div>
    </div>
  );
};

export default LeadMagnetCTA;
