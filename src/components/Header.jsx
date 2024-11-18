import React from "react";

import logo from "../images/logo.svg";

import { Container } from "react-bootstrap";
const handleStartNew = () => {
  localStorage.removeItem("saved-data");
};

const Header = () => {
  return (
    <>
      <header className="header">
        <Container className="container">
          <div className="header__wrapper">
            <a href="/">
              <div className="header__logo">
                <img src={logo} alt="logo" />
              </div>
            </a>
            <div className="logo__link">
              <a className="logo__link" onClick={handleStartNew} href="/">
                Start new
              </a>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
