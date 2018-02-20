import React from 'react';
import logo from '../img/logo.png';
import facebook from '../img/facebook.png';

const Footer = () => {
  return (
    <footer>
      <ul>
        <li><img src={logo} alt="Agrotex logo" /></li>
        <li>
          <p className="text-uppercase"><small>KAPCSOLAT</small></p>
          <p><small>info@agrotax.hu</small></p>
          <p><small>+36 30 318 0095í</small></p>
        </li>
        <li className="text-uppercase">adatkezelés és tárolás</li>
        <li className="text-uppercase">felhasználási feltételek</li>
        <li><img src={facebook} alt="Facebook logo" /></li>
      </ul>
    </footer>
  );
}

export default Footer;