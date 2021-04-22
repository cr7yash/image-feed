import React, { useState } from "react";
import Modal from "react-modal";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
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

export default function Images({ imageList, url, id }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const length = imageList.length;

  // console.log(length);

  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(imageList) || imageList.length <= 0) {
    return null;
  }
  // console.log(imageList);
  return (
    <div>
      <img onClick={openModal} key={id} src={url.urls.thumb} alt="" />
      <Modal
        ariaHideApp={false}
        closeTimeoutMS={200}
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image modal"
      >
        <AiOutlineArrowLeft onClick={prevSlide} />
        <AiOutlineArrowRight onClick={nextSlide} />
        {imageList.map((image, id) => {
          console.log(image);
          return (
            <div className={id === current ? "slide active" : "slide"} key={id}>
              {id === current && (
                <img alt="" className="image" src={url.urls.regular} />
              )}
            </div>
          );
        })}
      </Modal>
    </div>
  );
}
