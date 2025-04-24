import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CFO, FinEdge Inc.",
    quote: "AI saved us 20+ hours/month in manual analysis.",
    before: "Manual reports: 3 days",
    after: "AI reports: 3 hours",
    impact: "↑ ROI, ↓ fraud, faster decisions",
  },
  {
    name: "James Lin",
    role: "Head Trader, QuantNova",
    quote: "We cut fraud detection time by 80% using AI insights.",
    before: "High false positives",
    after: "Smart AI filtering",
    impact: "↑ trade speed, ↓ false alarms",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2>👨‍💻 Customer Testimonials / Case Studies</h2>
      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <div key={index} className="testimonial-card">
            <p className="quote">“{item.quote}”</p>
            <p className="name">{item.name}</p>
            <p className="role">{item.role}</p>
            <div className="metrics">
              <p><strong>Before:</strong> {item.before}</p>
              <p><strong>After:</strong> {item.after}</p>
              <p><strong>Impact:</strong> {item.impact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
