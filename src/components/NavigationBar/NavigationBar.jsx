import React, { useState } from 'react';
import './NavigationBar.css';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-brand">
      <img src="./public/fine.png" alt="Fine image"/>
        
      </div>
      
      <div className={`nav-links ${isMenuOpen ? 'active' : ''} `}>
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#security">Security</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
      </div>

      <button className="nav-cta">Get Started</button>
      
      <button 
        className="hamburger"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default NavigationBar;
