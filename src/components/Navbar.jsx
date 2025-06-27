import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? '×' : '☰'}
      </div>
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About Me</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#profiles" onClick={closeMenu}>Public Profiles</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact Me</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
