import React from 'react';
import './SecuritySection.css';

const SecuritySection = () => {
  return (
    <section className="section-container">
           <section className="security-section">
      <h2 className="security-title">🛡️ Security & Compliance</h2>
      <p className="security-subtext">We prioritize your data with industry-leading protection.</p>
      
      <ul className="security-list">
        <li> Bank-grade Encryption (AES-256)</li>
        <li>📄 GDPR & CCPA Compliance</li>
        <li>✅ SOC 2 Type II Certification</li>
        <li>🕵️‍♂️ Real-Time Threat Monitoring</li>
      </ul>

      <p className="trusted-tagline">✅ Trusted by Financial Institutions</p>

      <div className="trust-logos">
        <img src="/fin.png" alt="Bank A" />
        <img src="/finance3.png" alt="Bank B" />
        <img src="/grow.png" alt="Fintech C" />
      </div>
    </section>
    </section>
  );
};

export default SecuritySection;
