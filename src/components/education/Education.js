import React from "react";
import "./education.css";

const Education = (props) => (
  <div className="education">
    <span className="education__date">{props.date}</span>
    <h3 className="education__institution">{props.institution}</h3>
    <h4 className="education__degree">{props.degree}</h4>
  </div>
);

export default Education;
