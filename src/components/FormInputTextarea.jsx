import React, { useRef } from "react";
import { FloatingLabel } from "react-bootstrap";

import Form from "react-bootstrap/Form";

const FormInputTextarea = ({ question, updateQuestion }) => {
  const textareaRef = useRef("");

  const handleChange = (event) => {
    let userAnswer = event.target.value;
    updateQuestion({ ...question, custom_text: userAnswer });

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <FloatingLabel controlId="floatingTextarea" label="Your answer">
          <Form.Control
            className="form__textarea"
            value={question.custom_text}
            onChange={handleChange}
            ref={textareaRef}
            rows={3}
            as="textarea"
            placeholder="Your answer"
          />
        </FloatingLabel>
      </Form.Group>
    </>
  );
};

export default FormInputTextarea;
