import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const DropdownList = ({ updateQuestion, question }) => {
  const onChange = (selectedAnswer) => {
    let userAnswers = [selectedAnswer.id];
    const isValid = !question.required || userAnswers.length > 0;

    updateQuestion({
      ...question,
      isValid: isValid,
      answers: userAnswers,
    });
  };

  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic" className="dropdown">
        {question.options.find((x) => x.id === question.answers[0])?.name ??
          "Please select"}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {question?.options.map((item) => (
          <Dropdown.Item
            id={item.id}
            key={item.id}
            value={item.name}
            eventKey={item.name}
            onClick={() => onChange(item)}
            className="dropdown__item"
          >
            {item.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownList;
