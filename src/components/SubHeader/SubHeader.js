import React from "react";
import Lock from "../../icons/lock.png";
import Arrows from "../../icons/arrow.png";
import Percent from "../../icons/porcentagem.png";
import Delivery from "../../icons/delivery.png";
import "./SubHeader.scss";

const SubHeader = () => {
  return (
    <div className="sub-header">
      <div className="container">
        <ul>
          <li>
            <img src={Lock} alt="lock"></img> <p>Compra 100% segura</p>
          </li>
          <li>
            <img src={Arrows} alt="lock"></img> <p>1ª troca grátis</p>
          </li>
          <li>
            <img src={Percent} alt="lock"></img> <p>5x sem juros</p>
          </li>
          <li>
            <img src={Delivery} alt="lock"></img> <p>Entregas em todo Brasil</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SubHeader;
