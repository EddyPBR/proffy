import React from "react";

import "./styles.css";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/48658479?s=460&u=51365e1c6a53cb7c4a0741bb7dda1ebcf64d4417&v=4"
          alt="Edvaldo Junior"
        />
        <div>
          <strong>Edvaldo Junior</strong>
          <span>Programação I</span>
        </div>
      </header>

      <p>
        Edvaldo Junior, graduate student in systems analysis and development.
        <br />
        <br />
        CEO | Web & Mobile Developer at Startup @arius-help-dev
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
