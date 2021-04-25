import React, { useState, useEffect } from "react";
import Zoom from "../../icons/zoom.png";
import useFixedPrice from "../../custom-hooks/FixedPrice";
import axios from "axios";
import ModalContainer from "../Modal/Modal";
import "./Produtos.scss";

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [addModal, setAddMotal] = useState([]);
  const [visible, setVisible] = useState(8); //set number of visible products
  const [fixedPrice] = useFixedPrice(produtos);
  produtos.length = visible;

  function openModal() {
    setIsOpen(true);
  }

  function handleModal(name) {
    const modalData = produtos.find((instr) => instr.productName === name);
    setAddMotal(modalData);
    openModal();
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    axios
      .get(
        "https://afternoon-lowlands-23813.herokuapp.com/http://econverse.digital/teste-front-end/junior/ninja-som/lista-produtos/produtos.json"
      )
      .then((res) => {
        const produtos = res.data;
        setProdutos(produtos.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [visible]);

  return (
    <>
      <ModalContainer
        photo={addModal.photo}
        closeModal={closeModal}
        productName={addModal.productName}
        descriptionShort={addModal.descriptionShort}
        fixedPrice={fixedPrice}
        modalIsOpen={modalIsOpen}
      />
      <ul className="produtos-list">
        {produtos &&
          produtos.map((instrumento) => {
            return (
              <li
                key={instrumento.productName}
                onClick={() => handleModal(instrumento.productName)}
              >
                <div>
                  <img src={instrumento.photo} alt={instrumento.productName} />
                  <div className="layer"></div>
                  <div className="quick-view">
                    <img src={Zoom} alt="zoom" />
                    <p>Quick View</p>
                  </div>
                </div>

                <div className="product-info">
                  <p className="product-name">{instrumento.productName}</p>
                  <p className="description">{instrumento.descriptionShort}</p>
                  <p className="price">R$ {fixedPrice}</p>
                </div>
              </li>
            );
          })}
      </ul>
      <button onClick={() => setVisible((prev) => prev + 4)}>Ver mais</button>
    </>
  );
};

export default Produtos;
