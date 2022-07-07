import React from 'react';
import CTA from './CTA';
import './Header.css';
import Me from '../../assets/fullstack.png';
import HeaderSocials from './HeaderSocials';

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I`m</h5>
        <h1>Ilyas Khakimov</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={Me} alt="I am" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  );
}

export default Header;
