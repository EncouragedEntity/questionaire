import React from "react";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";

const Checkbox = ({ updateQuestion, question }) => {
  const onChange = (userAnswers) => {
    const isValid = !question.required || userAnswers.length > 0;
    updateQuestion({ ...question, isValid: isValid, answers: userAnswers });
  };

  return (
    <>
      <ToggleButtonGroup
        className="checkbox"
        type="checkbox"
        onChange={onChange}
        value={question.answers}
      >
        {question.options.map((item) => (
          <ToggleButton id={`tbg-btn-${item.id}`} key={item.id} value={item.id}>
            {item.name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </>
  );
};

export default Checkbox;
