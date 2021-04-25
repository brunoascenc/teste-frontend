import React from "react";
import Select from "../../icons/select.png";
import "./NavHeader.scss";

const NavHeader = () => {
  return (
    <nav>
      <div className="container">
        <ul>
          <li>
            <p>Todas as categorias</p>
          </li>
          <li>
            <p>Som profissional</p> <img src={Select} alt="select-arrow" />
          </li>
          <li>
            <p>Instrumentos músicais</p> <img src={Select} alt="select-arrow" />{" "}
          </li>
          <li>
            <p>Promoções</p>
          </li>
          <li>
            <p>Contato</p>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavHeader;
