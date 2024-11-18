import React from "react";
import prevArrow from "../images/prev-arrow.svg";

const PrevButton = ({ onClick, currentStep }) => {
  return (
    <>
      {currentStep > 0 && (
        <button onClick={onClick} className="prev__arrow">
          <img src={prevArrow} alt="prev-arrow" />
          <span>previous</span>
        </button>
      )}
    </>
  );
};

export default PrevButton;
