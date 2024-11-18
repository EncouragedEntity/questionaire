import React from "react";

import MainButton from "./MainButton";
import PrevButton from "./PrevButton";

const Footer = ({
  buttonSize,
  buttonName,
  children,
  onButtonClick,
  disabled,
  showPrevButton,
  changingClass,
  prevPage,
  currentStep,
}) => {
  const footerClass = changingClass === "left" ? "left" : "center";

  return (
    <footer className={`footer ${footerClass}`}>
      <div className=" footer__buttons-wrapper">
        {showPrevButton && <PrevButton currentStep={currentStep} onClick={prevPage} />}
        <MainButton onClick={onButtonClick} disabled={disabled} size={buttonSize} buttonName={buttonName} />
      </div>
      <div>{children}</div>
    </footer>
  );
};

export default Footer;
