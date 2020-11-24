import React from "react";
import { animateScroll as scroll } from "react-scroll";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer__owner">
        <p>Iván Méndez {year}</p>
      </div>
      <div className="footer__up-arrow">
        <FontAwesomeIcon
          onClick={() => scroll.scrollToTop(1000)}
          icon={faArrowCircleUp}
          className="footer__social"
        ></FontAwesomeIcon>
      </div>
      <div className="footer__socials">
        {/* <ul className="footer__list">
          <li className="footer__item">
            <a
              className="footer__link"
              href="https://www.linkedin.com/in/iv%C3%A1n-m%C3%A9ndez-rodr%C3%ADguez-43b6b2175/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="footer__social"
              ></FontAwesomeIcon>
            </a>
          </li>
          <li className="footer__item">
            <a
              className="footer__link"
              href="https://www.instagram.com/ivan_mendez_dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="footer__social"
              ></FontAwesomeIcon>
            </a>
          </li>
          <li className="footer__item">
            <a
              className="footer__link"
              href="https://github.com/ivandez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="footer__social"
              ></FontAwesomeIcon>
            </a>
          </li>
        </ul> */}
        <a
          className="footer__link"
          href="https://www.linkedin.com/in/iv%C3%A1n-m%C3%A9ndez-rodr%C3%ADguez-43b6b2175/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="footer__social"
          ></FontAwesomeIcon>
        </a>
        <a
          className="footer__link"
          href="https://www.instagram.com/ivan_mendez_dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="footer__social"
          ></FontAwesomeIcon>
        </a>
        <a
          className="footer__link"
          href="https://github.com/ivandez"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="footer__social"
          ></FontAwesomeIcon>
        </a>
      </div>
    </div>
  );
}

export default Footer;
