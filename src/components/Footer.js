// src/components/Footer.js
import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <p>Fithub@ {new Date().getFullYear()}  All rights reserved.</p>


      <button className="scroll-top" onClick={scrollToTop} title="Back to top">
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
