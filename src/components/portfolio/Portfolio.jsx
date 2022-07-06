import React from 'react';
import './Portfolio.css';
import Watch from '../../assets/watch-shop.png';
import PlusKk from '../../assets/PlusKk.png';
import Ascetic from '../../assets/Ascetic.png';

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Watch} alt="Watch" />
          </div>

          <h3>portfolio title</h3>
          <div className="portfolio__item-cta">
            <a href="#ff" className="btn" target="_blank">Github</a>
            <a href="#ff" className="btn btn-primary" target="_blank">Github</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PlusKk} alt="Watch" />
          </div>

          <h3>portfolio title</h3>
          <div className="portfolio__item-cta">
            <a href="#ff" className="btn" target="_blank">Github</a>
            <a href="#ff" className="btn btn-primary" target="_blank">Github</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Ascetic} alt="Watch" />
          </div>

          <h3>portfolio title</h3>
          <div className="portfolio__item-cta">
            <a href="#ff" className="btn" target="_blank">Github</a>
            <a href="#ff" className="btn btn-primary" target="_blank">Github</a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
