import React from 'react';
import { FaGithub, FaTelegram, FaWhatsapp } from 'react-icons/fa';

function HeaderSocials() {
  return (
    <div className="header__socials">
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
  );
}

export default HeaderSocials;
