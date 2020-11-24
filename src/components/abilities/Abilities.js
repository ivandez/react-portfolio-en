import React from "react";
import "./abilities.css";

const Abilities = (props) => {
  const listAbilities = props.abilities.map((element) => (
    <li className="abilities__item" key={element}>
      {element}
    </li>
  ));

  return (
    <div className="abilities">
      <ul className="abilities__list">{listAbilities}</ul>
    </div>
  );
};

export default Abilities;
