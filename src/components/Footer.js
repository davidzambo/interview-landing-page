import React from 'react';
import logo from '../img/logo.png';
import facebook from '../img/facebook.png';
import otp from '../img/otp.png';
import mkb from '../img/mkb.png';

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
        <li className="text-uppercase"><small>adatkezelés és tárolás</small></li>
        <li className="text-uppercase"><small>felhasználási feltételek</small></li>
        <li>
          <img src={otp} alt="OTP logo"/>
          <img src={mkb} alt="MKB logo" />
          <span>Szakmai partnerünk az OTP Bank és az MKB Bank. <br/>Minden jog fenntartva. X-Holding Zrt. 2017</span>
        </li>
        <li><img src={facebook} alt="Facebook logo" /></li>
      </ul>
    </footer>
  );
}

export default Footer;