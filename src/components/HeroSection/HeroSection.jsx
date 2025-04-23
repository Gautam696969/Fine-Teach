import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import './HeroSection.css';

const HeroSection = () => {
  const [animationData, setAnimationData] = useState(null);

  // Fetch the animation data once the component mounts
  useEffect(() => {
    fetch('/dashboard.json')
      .then((res) => res.json())
      .then(setAnimationData) // Set the fetched data
      .catch((err) => console.error('Failed to load animation:', err));
  }, []); // Only run on initial mount

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Smarter Finance. <span>Powered by AI.</span>
        </h1>
        <p className="hero-subtext">
          Automate, predict, and grow with AI-driven insights built for modern finance.
        </p>
        <div className="hero-buttons">
          <button className="btn primary">Request Demo</button>
          <button className="btn secondary">Try for Free</button>
          <button className="btn outline">Watch How It Works</button>
        </div>
        <div className="hero-visual">
          {animationData && (
            <Lottie
              animationData={animationData}
              loop
              autoplay
              style={{ width: '100%', maxWidth: '600px' }}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
