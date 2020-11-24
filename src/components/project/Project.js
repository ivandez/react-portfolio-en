import React from "react";
import "./project.css";

const Project = (props) => {
  let link;

  if (props.link) {
    link = (
      <div>
        <br></br>
        <a
          className="proyect__link"
          href={props.link}
          target="_blank"
          rel="noreferrer"
        >
          Ver online
        </a>
      </div>
    );
  } else {
    link = null;
  }
  return (
    <div className="project">
      <div>
        <img
          className="project_img"
          src={props.img}
          alt="programming-language-img"
        ></img>
      </div>
      <div className="project__info">
        <h2 className="project__title">{props.title}</h2>
        <p className="project__description">{props.description}</p>
        <a
          className="proyect__link"
          href={props.repository}
          target="_blank"
          rel="noreferrer"
        >
          Ver reporsitorio
        </a>
        {link}
      </div>
      {/* <img
          src="https://www.costco.com.mx/medias/sys_master/products/h28/h98/16456059879454.jpg"
          alt="languaje-tech"
        ></img> */}
    </div>
  );
};

export default Project;
