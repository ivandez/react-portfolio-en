import React from "react";
import { useForm } from "@formspree/react";
import "./contact.css";
function Contact() {
  const [state, handleSubmit] = useForm("contactForm");
  if (state.succeeded) {
    return <p className="contact__message">¡Mensaje enviado correctamente!</p>;
  }
  return (
    <div className="contact">
      <form onSubmit={handleSubmit} className="contact__container">
        {/* <h2 className="contact__title">
          Contactame{" "}
          <span role="img" aria-label="smile emoji">
            &#128516;
          </span>
        </h2> */}
        <input
          className="contact__email"
          type="email"
          placeholder="Tu e-mail"
          name="email"
          id="email"
        ></input>
        <textarea
          className="contact__text-area"
          placeholder="Tu mensaje"
          id="message"
          name="message"
        ></textarea>
        <button className="contact__button" type="submit">
          enviar
        </button>
      </form>
    </div>
  );
}

export default Contact;
