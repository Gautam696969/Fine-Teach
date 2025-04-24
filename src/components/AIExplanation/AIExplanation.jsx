import React from 'react';
import './AIExplanation.css';

const AIExplanation = () => {
  return (
    <div className="ai-explained">
      <h2>How Our AI Works</h2>
      <p className="intro">
        Our AI takes in data, analyzes it using smart algorithms, and gives you helpful results — all in seconds!
      </p>

      <div className="diagram">
        <div className="step">
          <div className="icon data">📊</div>
          <p>We receive data<br />(like your inputs or transactions)</p>
        </div>

        <div className="arrow">➡️</div>

        <div className="step">
          <div className="icon brain">🧠</div>
          <p>Our AI analyzes it using trained models</p>
        </div>

        <div className="arrow">➡️</div>

        <div className="step">
          <div className="icon output">💡</div>
          <p>You get smart results<br />(suggestions, scores, insights)</p>
        </div>
      </div>
    </div>
  );
};

export default AIExplanation;
