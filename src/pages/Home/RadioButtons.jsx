import React from "react";
import { ButtonGroup, ToggleButton, ToggleButtonGroup } from "react-bootstrap";

const RadioButtons = ({ handleOptionChange }) => {
  return (
    <>
      <ButtonGroup className="radiobutton__wrapper">
        <ToggleButtonGroup type="radio" name="options" defaultValue="dropdown">
          <ToggleButton
            value="dropdown"
            onChange={handleOptionChange}
            className="radio__buttons-home"
            id="tbg-radio-1"
          >
            Yes, I do
          </ToggleButton>
          <ToggleButton
            value="input"
            onChange={handleOptionChange}
            className="radio__buttons-home"
            id="tbg-radio-2"
          >
            Not
          </ToggleButton>
        </ToggleButtonGroup>
      </ButtonGroup>
    </>
  );
};

export default RadioButtons;
