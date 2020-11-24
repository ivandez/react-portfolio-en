import React from "react";
import "./about-me.css";

const AboutMe = (props) => {
  return (
    <div className="about">
      <div className="about__text">
        <p>
          They say that curiosity killed something cat, in my case it is what
          makes me get up every day to learn something new, during 2018 after
          enrolling for a TSU in computer science, I realized that to start
          programming I had to wait to start the second semester, I did not have
          that patience and I decided to write my first Hello World in Java by
          myself, at that moment when writing my first program something clicked
          in my head because I realized that skills that stand out in me such as
          understanding and intuition fit well with programming.
        </p>

        <p>
          {" "}
          Since that day I have decided to combine university theory with being
          able to study what I want from online platforms such as platzi and
          udemy, this is great since both methods complement each other
          excellently, allowing me to have updated and useful knowledge with the
          theory of what that we use every day.{" "}
        </p>

        <p>
          Today I feel I have enough knowledge to start my career in IT, my
          ideal job would be one where I seek solutions to problems proposed by
          the client, and that these solutions are applied to the web, where I
          am part of front-end and back-end development, where the company
          allows me to nurture myself professionally by surrounding myself with
          senior programmers, where I have the possibility of traveling and
          where work hours are flexible.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
