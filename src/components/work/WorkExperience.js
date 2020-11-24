import React from "react";
import "./work-experience.css";

const WorkExperience = (props) => (
  <div className="work-experience-card">
    <div className="work-experience-card__date">{props.date}</div>
    <h3 className="work-experience-card__company">{props.company}</h3>
    <h4 className="work-experience-card__employment">{props.job}</h4>
    <p className="work-experience-card__description">{props.jobDescription}</p>
  </div>
);

export default WorkExperience;
