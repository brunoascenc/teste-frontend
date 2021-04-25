import React from "react";
import "./Vitrine.scss";
import Produtos from "../Produtos/Produtos.js";

function Vitrine() {
  return (
    <section className="vitrine">
      <div className="container">
        <h1>
          Instrumentos <strong>Destaque</strong>
        </h1>
        <p>
          it is a long established fact that a reader will be distracted by the
          readable
        </p>
        <Produtos />
      </div>
    </section>
  );
}

export default Vitrine;
