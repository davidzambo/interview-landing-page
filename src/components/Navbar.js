import React from 'react';
import logo from '../img/logo.png';
import facebook from '../img/facebook.png';

const Navbar = () =>  {
  return (
    <nav>
      <img src={logo} alt="Agrotex logo"/>
      <ul>
        <li>szolgáltatásunk</li>
        <li className="text-green">módszertanunk</li>
        <li><button>értékbecslés indítása</button></li>
        <li><img src={facebook} alt="Facebook logo" /></li>
      </ul>
    </nav>
  );
}

export default Navbar;