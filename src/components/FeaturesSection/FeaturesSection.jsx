import React from 'react';
import './FeaturesSection.css';

const features = [
  { 
    icon: '📈', 
    title: 'Real-Time Risk Analysis', 
    description: 'Analyze risk in real-time with advanced AI-powered tools.'
  },
  { 
    icon: '🧠', 
    title: 'AI-Powered Financial Forecasting', 
    description: 'Make smarter financial predictions with AI-driven insights.'
  },
  { 
    icon: '🤖', 
    title: 'Smart Automation for Bookkeeping', 
    description: 'Automate your bookkeeping tasks efficiently with AI.'
  },
  { 
    icon: '🔄', 
    title: 'Auto-Reconciliation & Fraud Detection', 
    description: 'Detect fraud and reconcile transactions automatically.'
  },
  { 
    icon: '💳', 
    title: 'AI Credit Scoring Engine', 
    description: 'Get AI-based credit scores and lending insights.'
  },
  { 
    icon: '🏦', 
    title: 'Personalized Banking Insights', 
    description: 'Receive tailored banking insights to improve your financial health.'
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <h2>What Makes Our AI Unique</h2>
      <div className="features-cards">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
