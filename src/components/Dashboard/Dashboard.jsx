import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [portfolioValue, setPortfolioValue] = useState(10250);
  const [riskScore, setRiskScore] = useState(45);
  const [tips] = useState([
    "Invest in green energy stocks.",
    "Diversify your holdings.",
    "Reduce exposure to volatile assets.",
  ]);
  const [transactions] = useState([
    { category: 'Groceries', amount: 120 },
    { category: 'Utilities', amount: 75 },
    { category: 'Investments', amount: 500 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPortfolioValue(prev => prev + (Math.random() - 0.5) * 100);
      setRiskScore(prev => Math.min(100, Math.max(0, prev + (Math.random() - 0.5) * 10)));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Dashboard-container">
        <h1>📊 4. Real-Time Dashboard or Product Preview
        </h1>
    <div className="dashboard">
      <div className="card">
        <h2>Portfolio Analysis</h2>
        <p className="value">${portfolioValue.toFixed(2)}</p>
      </div>

      <div className="card">
        <h2>AI Investment Suggestions</h2>
        <ul>
          {tips.map((tip, index) => <li key={index}>{tip}</li>)}
        </ul>
      </div>

      <div className="card">
        <h2>Risk Scoring</h2>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${riskScore}%` }}></div>
        </div>
        <p>Score: {riskScore.toFixed(0)} / 100</p>
      </div>

      <div className="card">
        <h2>Transaction Categorization</h2>
        <ul className="transaction-list">
          {transactions.map((t, i) => (
            <li key={i}>
              <span>{t.category}</span>
              <span>${t.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
