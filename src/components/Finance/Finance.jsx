import React from 'react';
import './Finance.css'; // Make sure to include the CSS

const features = [
  {
    title: 'Instant Alerts',
    description: 'Get real-time notifications on your transactions and market updates.',
    icon: '📢',
  },
  {
    title: 'AI Portfolio Rebalancing',
    description: 'Smart AI suggestions to optimize your investment allocations.',
    icon: '🤖',
  },
  {
    title: 'Spend Insights',
    description: 'Visualize where your money goes with categorized spending reports.',
    icon: '💡',
  },
];

const FinanceFeatures = () => {
  return (
    <section className="finance-section">
      <h2 className="section-title">📱 Mobile-First Finance Features</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="finance-card">
            <div className="finance-icon">{feature.icon}</div>
            <h3 className="finance-title">{feature.title}</h3>
            <p className="finance-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FinanceFeatures;
