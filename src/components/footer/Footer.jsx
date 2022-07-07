import React from 'react';
import './Footer.css';
import { FaGithub, FaTelegram, FaWhatsapp } from 'react-icons/fa';


function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">Contact me</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://t.me/ilyas_khakimov" target="_blank" rel="noreferrer">
          <FaTelegram />
        </a>
        <a href="https://github.com/Khkimov" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://t.me/ilyas_khakimov" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ilyas Khakimov, Fullstack Developer </small>
      </div>
    </footer>
  );
}

export default Footer;
