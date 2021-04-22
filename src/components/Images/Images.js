import React, { useState } from "react";
import Modal from "react-modal";
import "./Images.css";

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 500
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    boxSizing: "border- box",
    border: "1px solid #ccc"
  }
};

const Images = ({ url, id }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }
  return (
    <div>
      <img onClick={openModal} key={id} src={url} alt="" />
      <Modal
        ariaHideApp={false}
        closeTimeoutMS={200}
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image modal"
      >
        <img alt="" className="image" src={url} />
      </Modal>
    </div>
  );
};

export default Images;
