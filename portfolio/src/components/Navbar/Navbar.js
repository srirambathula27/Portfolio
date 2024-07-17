import React from 'react';
import './Navbar.css';
import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.jpg';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <img src={logo1} alt="logo" />
        <div className="desktopmenu">
          <ScrollLink 
            activeClass='active' 
            to='intro' 
            offset={50} 
            spy={true} 
            duration={500} 
            smooth={true} 
            className="desktoplistitem"
          >
            Home
          </ScrollLink>
          <ScrollLink 
            activeClass='active' 
            to='skill' 
            offset={50} 
            spy={true} 
            duration={500} 
            smooth={true} 
            className="desktoplistitem"
          >
            About
          </ScrollLink>
          <RouterLink to="/Port/Port" className="desktoplistitem">Portfolio</RouterLink>
          <RouterLink to="/Client/Client" className="desktoplistitem">Clients</RouterLink>
        </div>
        <button className="desktopmenubtn">
          <img src={logo2} alt="contact me" />
          Contact Me
        </button>
      </nav>
    </div>
  );
}
