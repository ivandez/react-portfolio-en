import React, { useState } from "react";
import "./container.css";

const Container = (props) => {
  const [open, setIsOpen] = useState(false);
  let className = "hide-children";
  let texto = "Mostrar más";
  if (open === true) {
    className = "show-children ";
    texto = "Mostrar menos";
  }

  let childrenCount = React.Children.count(props.children);
  let children = [];
  let childrenToHide = [];
  let childrenArray = [];

  if (childrenCount > 5) {
    childrenArray.push(props.children);
    //can refactor with splice method
    for (let i = 0; i < childrenCount; i++) {
      if (i < 5) {
        children.push(childrenArray[0][i]);
      } else {
        childrenToHide.push(childrenArray[0][i]);
      }
    }

    return (
      <div className="container" id={props.id}>
        <h1 className="container__title">{props.title}</h1>
        {children}
        <div className={className}>{childrenToHide}</div>
        <div className="container__show-more">
          <button
            className="container__button"
            onClick={() => setIsOpen(!open)}
          >
            {texto + ` (${childrenCount - 5})`}
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container" id={props.id}>
        <h1 className="container__title">{props.title}</h1>
        {props.children}
      </div>
    );
  }
};

export default Container;
