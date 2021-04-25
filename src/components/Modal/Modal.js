import React from "react";
import Modal from "react-modal";
import Close from "../../icons/close.png";
import "./Modal.scss";

const ModalContainer = ({
  modalIsOpen,
  closeModal,
  photo,
  productName,
  descriptionShort,
  fixedPrice,
}) => {
  return (
    <Modal
      closeTimeoutMS={50}
      className="modal"
      isOpen={modalIsOpen}
      ariaHideApp={false}
      onRequestClose={closeModal}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        },
      }}
    >
      <div className="product-img">
        <img src={photo} alt={productName} />
      </div>
      <button className="close-btn" onClick={closeModal}>
        <img src={Close} alt="close" />
      </button>

      <div className="info">
        <p className="product-name">{productName}</p>
        <p className="product-price">R$ {fixedPrice}</p>
        <p className="description">{descriptionShort}</p>
        <p className="more-details">Veja mais detalhes do produto</p>
        <button>Adicionar ao carrinho</button>
      </div>
    </Modal>
  );
};

export default ModalContainer;
