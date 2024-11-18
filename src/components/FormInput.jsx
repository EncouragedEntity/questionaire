import React, { useState } from "react";

import Form from "react-bootstrap/Form";

const FormInput = ({ updateQuestion, currentQuestion }) => {
  const [inputColor, setInputColor] = useState("");

  const onChange = (e) => {
    let userAnswer = e.target.value;
    updateQuestion({ ...currentQuestion, custom_text: userAnswer });
    setInputColor(userAnswer.trim() === "" ? "invalid" : "");
  };

  return (
    <>
      <Form.Group>
        <Form.Control
          type="text"
          value={currentQuestion.custom_text}
          onChange={onChange}
          placeholder="Your answer"
          className={`form-control ${inputColor}`}
        />
      </Form.Group>
    </>
  );
};

export default FormInput;
