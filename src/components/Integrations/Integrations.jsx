import React from "react";
import "./Integrations.css";

const logos = [
    { name: "QuickBooks", src: "public/image/qb.png" },
  { name: "Stripe", src: "public/image/stripe.png" },
  { name: "Plaid", src: "public/image/plaid.png" },
  { name: "Xero", src: "public/image/xero.png"},
  { name: "SAP", src: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg"}
];

const Integrations = () => {
  return (
    <div className="integrations-container">
      <h2>🔌 Integrations</h2>
      <p className="subtitle">“Connects with your stack seamlessly.”</p>
      <div className="logo-grid">
        {logos.map((logo, index) => (
          <div key={index} className="logo-card">
            <img src={logo.src} alt={logo.name} />
            <p>{logo.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Integrations;
