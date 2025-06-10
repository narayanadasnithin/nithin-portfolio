import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
import { Divide as Hamburger } from 'hamburger-react';
import logo from '../../Images/logo.jpg'; // corrected import

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="logo-text">Nithin Narayanadas</h1>
      </div>

      <div className="hamburger-button" role="button" aria-label="Toggle navigation menu">
        <Hamburger toggled={showMenu} toggle={toggleMenu} size={24} />
      </div>

      <div className="desktopMenu">
        <Link to="Home" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link to="About" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
        <Link to="TechnicalSkills" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">TechnicalSkills</Link>
        <Link to="Internship" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Career</Link>
        <Link to="Contact" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Contact</Link>
      </div>

      <div className={`navMenu ${showMenu ? 'show' : ''}`}>
        <img src={logo} alt="Logo" className="logo" />

        <Link to="Home" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={closeMenu}>Home</Link>
        <Link to="About" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={closeMenu}>About</Link>
        <Link to="TechnicalSkills" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={closeMenu}>TechnicalSkills</Link>
        <Link to="Internship" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={closeMenu}>Career</Link>
        <Link to="Contact" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={closeMenu}>Contact</Link>
      </div>
    </nav>
  );
};
