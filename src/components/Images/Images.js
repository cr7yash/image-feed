import React from "react";
import "./Images.css";

const Images = ({ url, key }) => {
  const clickHandler = () => {
    console.log("clicked");
  };
  return (
    <>
      <img onClick={clickHandler} key={key} src={url} alt="" />
    </>
  );
};

export default Images;
