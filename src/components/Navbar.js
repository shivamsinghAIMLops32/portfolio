import React from 'react';
import '../styles/Navbar.css';

const Navbar = ({ toggleDarkMode, darkMode }) => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#technologies">Technologies</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
};

export default Navbar;
