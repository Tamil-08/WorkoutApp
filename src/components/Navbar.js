import React, { useState, useEffect } from 'react';
import './Navbar.css';
import './Landingpage.js';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`top-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">🏋️ FITHUB
        <div className="tagline">Train. Track. Transform.</div>
      </div>

      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </div>

      <nav className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#">Membership</a>
        <a href="#">Programs</a>
        <button className="signup-btn">Sign Up</button>
      </nav>
    </header>
  );
};

export default Navbar;
