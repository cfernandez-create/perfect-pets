import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <a href="/" id="navbar__logo">
          <i className="fa-solid fa-paw"></i>
          <span className="title">PERFECT RESCUE</span>
        </a>
        <div className="navbar__toggle" id="mobile-menu" onClick={handleMenuClick}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`navbar__menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar__item">
            <a href="/about.html" className="navbar__links"> About Us </a>
          </li>
          <li className="navbar__item">
            <a href="/" className="navbar__links"> Resources </a>
          </li>
          <li className="navbar__item">
            <a href="/" className="navbar__links"> Volunteer </a>
          </li>
          <li className="navbar__item">
            <a href="/" className="navbar__links"> Donate</a>
          </li>
          <li className="navbar__btn">
            <a href="/" className="button"> Adopt  </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}