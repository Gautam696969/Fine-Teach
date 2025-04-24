import React from "react";
import "./UseCase.css"; // Import the CSS file

const roles = [
  {
    icon: "🏛️",
    title: "Banks & Credit Unions",
    description: "AI-based fraud detection.",
  },
  {
    icon: "🧑‍💼",
    title: "Financial Advisors",
    description: "Predictive client insights.",
  },
  {
    icon: "🏢",
    title: "SMBs",
    description: "Automated cash flow forecasting.",
  },
  {
    icon: "📊",
    title: "Investors & Traders",
    description: "Real-time AI signals.",
  },
];

const ValueProps = () => {
  return (

    <div className="UseCase_container">
      <h1>🧾 5. Use Cases</h1>
    <div className="value-grid">
      {roles.map((role, index) => (
        <div key={index} className="value-card">
          <div className="value-icon">{role.icon}</div>
          <h3 className="value-title">{role.title}</h3>
          <p className="value-description">{role.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ValueProps;
