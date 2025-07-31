import React from 'react';
import './Aboutsection.css';
import gymImage from '../assets/sung.jfif'; // Replace with your image

const AboutSection = () => {
  return (
    
    <section className="about-section" id="about">
      <div className="about-content">
        <div className="text">
          <h2>ABOUT US</h2>
          <p>
            FitHub isn’t just a gym — it’s a transformation ground. With cutting-edge equipment,
            anime-inspired energy, and a mission to unleash your inner warrior, we help you level up
            mentally and physically. No trainers. No excuses. Just you versus yesterday.
          </p>
        </div>
        <div className="image">
          <img src={gymImage} alt="About FitHub" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
