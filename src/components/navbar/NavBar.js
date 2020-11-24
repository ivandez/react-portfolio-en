import React, { useState } from "react";
import { Link } from "react-scroll";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = (props) => {
  const [open, setIsOpen] = useState(false);

  let className = "navbar__link";

  if (open === true) {
    className = "navbar__link--show";
  }

  return (
    <nav className="navbar">
      <Link to="home" smooth={true} duration={1500} className="navbar__home">
        Iván Méndez
      </Link>
      <Link to="about" smooth={true} duration={1500} className={className}>
        About me
      </Link>
      <Link
        to="work-experience"
        smooth={true}
        duration={1500}
        className={className}
      >
        Work experience
      </Link>
      <Link to="education" smooth={true} duration={1500} className={className}>
        Education
      </Link>
      <Link to="project" smooth={true} duration={1500} className={className}>
        Projects
      </Link>
      <Link to="abilities" smooth={true} duration={1500} className={className}>
        Abilities
      </Link>
      <Link to="diplomas" smooth={true} duration={1500} className={className}>
        Diplomas
      </Link>
      <Link to="contact" smooth={true} duration={1500} className={className}>
        Contact me
      </Link>

      <button onClick={() => setIsOpen(!open)} className="navbar__toggler">
        <FontAwesomeIcon icon={faBars} />
      </button>
    </nav>
  );
};

export default NavBar;
