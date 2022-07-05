import React from 'react';
import './About.css';
import ME from '../../assets/I_am.jpeg';
import { FaAward, FaUserGraduate } from 'react-icons/fa';

function About() {
  return (
    <section id="about">
      <h5>Go To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Опыт</h5>
              <small>1+ год Web-разработки</small>
            </article>

            <article className="about__card">
              <FaUserGraduate className="about__icon" />
              <h5>Образование</h5>
              <small>Высшее</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Курсы по программированию</h5>
              <small>Основы WEB-разработки</small>
              <small>Frontend-разработчик</small>
              <small>Fullstack-разработчик</small>
            </article>
          </div>

          <p>
            Hi, my name is Ilyas! I am engaged in WEB development. I started with the layout of simple websites. 
            I became interested in programming and for this I started learning languages (JavaScript, Node.js ). 
            I have experience working in a team. I am constantly building up my programming skills.
          </p>

          <a href="#contact" className="btn btn-primary">Let`s Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
