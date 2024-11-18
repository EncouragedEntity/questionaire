import React, { useState } from "react";

import Form from "react-bootstrap/Form";

const FormInputQuestions = ({ updateQuestion, question }) => {
  const [inputColor, setInputColor] = useState("");

  const onChange = (e) => {
    let userAnswer = e.target.value;
    const isValid = !question.required || userAnswer.length > 0;
    updateQuestion({
      ...question,
      isValid: isValid,
      custom_text: userAnswer,
    });

    setInputColor(userAnswer.trim() === "" ? "invalid" : "");
  };

  return (
    <>
      <Form.Group>
        <Form.Control
          className={`form-control ${inputColor}`}
          type="text"
          placeholder="Your answer"
          value={question.custom_text}
          onChange={onChange}
        />
      </Form.Group>
    </>
  );
};

export default FormInputQuestions;
