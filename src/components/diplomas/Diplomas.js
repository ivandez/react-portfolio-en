import React from "react";
import "./diplomas.css";

const Diplomas = (props) => (
  <div className="diploma">
    <span className="diploma__date">{props.date}</span>
    <h3 className="diploma__title">{props.title}</h3>
    <a
      className="diploma__link"
      href={props.link}
      target="_blank"
      rel="noreferrer"
    >
      Ver diploma
    </a>
  </div>
);

export default Diplomas;
