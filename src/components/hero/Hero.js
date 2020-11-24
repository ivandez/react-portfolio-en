import React from "react";
import "./hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
const Hero = (props) => {
  return (
    <section className="hero">
      <div className="hero-inner hero__container">
        <h1 className="hero__title">Iván Méndez</h1>
        <h2 className="hero__degree">Técnico Superior en Informática</h2>
        <h2 className="hero__degree">"Informatico autodidacta"</h2>
        <div className="hero__socials">
          <ul className="hero__list">
            <li className="hero__item">
              <a
                className="hero__link"
                href="https://www.linkedin.com/in/iv%C3%A1n-m%C3%A9ndez-rodr%C3%ADguez-43b6b2175/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="hero__social"
                ></FontAwesomeIcon>
              </a>
            </li>
            <li className="hero__item">
              <a
                className="hero__link"
                href="https://www.instagram.com/ivan_mendez_dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="hero__social"
                ></FontAwesomeIcon>
              </a>
            </li>
            <li className="hero__item">
              <a
                className="hero__link"
                href="https://github.com/ivandez"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="hero__social"
                ></FontAwesomeIcon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
