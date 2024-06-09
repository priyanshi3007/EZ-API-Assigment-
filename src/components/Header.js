// src/components/Header.js
import React from 'react';
import logo from '../logo.png'; // Use correct path to your logo file
import '../App.css';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="EZ Works Logo" className="logo" />
      <h1>Suite Of Business Support Services</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</p>
    </header>
  );
};

export default Header;
