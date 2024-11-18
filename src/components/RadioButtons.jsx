import React from "react";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";

const RadioButtons = ({ question, updateQuestion }) => {
  const onChange = (selectedAnswerId) => {
    let userAnswers = [selectedAnswerId];
    const isValid = !question.required || userAnswers.length > 0;
    updateQuestion({ ...question, isValid: isValid, answers: userAnswers });
  };

  return (
    <>
      <ToggleButtonGroup
        type="radio"
        name="options"
        value={question.answers}
        onChange={onChange}
        className="radiobutton__wrapper"
      >
        {question?.options.map((item) => (
          <ToggleButton
            className="radio__buttons"
            key={item.id}
            id={`radio-${item.id}`}
            type="radio"
            name="radio"
            value={item.id}
          >
            {item.name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </>
  );
};

export default RadioButtons;
