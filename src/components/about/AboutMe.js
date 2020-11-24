import React from "react";
import "./about-me.css";

const AboutMe = (props) => {
  return (
    <div className="about">
      <div className="about__text">
        <p>
          Dicen que la curiosidad mato algo gato, en mi caso es lo que hace que
          me levante cada día para aprender algún nuevo, durante 2018 después de
          matricularme para un TSU en informática, me di cuenta que para empezar
          a programar tenia que esperar a empezar el segundo semestre, no tuve
          esa paciencia y decidí escribir por mí mismo mi primer Hello World en
          Java, en ese momento en el que escribir mi primer programa algo hizo
          click en mi cabeza porque me di cuenta que habilidades que destacan en
          mí como la comprensión e intuición encajan bien con la programación.
        </p>

        <p>
          {" "}
          Desde ese día he decidido juntar la teoría de la universidad con el
          poder estudiar lo que yo quiero de las plataformas online como platzi
          y udemy, esto es genial ya que ambos métodos se complementa
          excelentemente, permitiéndome tener conocimientos actualizados y
          útiles con la teoría de lo que usamos día a día.{" "}
        </p>

        <p>
          A día de hoy me siento con el suficiente conocimiento como para poder
          empezar mi carrera en IT, mi empleo ideal seria aquel en donde yo
          busque soluciones a problemas propuestos por el cliente, y que dichas
          soluciones sean aplicadas a la web, donde yo forme parte del
          desarrollo front-end y back-end, donde la empresa me permita nutrirme
          profesionalmente rodeándome de programadores senior, donde tenga la
          posibilidad de viajar y en donde el horario de trabajo sea flexible.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
