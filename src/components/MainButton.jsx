import React from "react";

const MainButton = ({ buttonName, size, disabled, onClick }) => {
  const buttonClass = size === "small" ? "small" : "large";
  const disabledClass = disabled ? "disable" : "";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`main__btn ${buttonClass} ${disabledClass}`}
    >
      {buttonName}
    </button>
  );
};

export default MainButton;
