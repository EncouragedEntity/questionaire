import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Cookies from "js-cookie";

const FormInput = () => {
  const [inputText, setInputText] = useState("");
  const [inputColor, setInputColor] = useState("");

  const onChange = (e) => {
    let userAnswer = e.target.value;
    setInputText(userAnswer);
    setInputColor(userAnswer.trim() === "" ? "invalid" : "");
  };

  useEffect(() => {
    const savedText = Cookies.get("cookieFormInputHome");
    if (savedText) {
      setInputText(savedText);
    }
  }, []);

  const handleInputBlure = () => {
    Cookies.set("cookieFormInputHome", inputText);
  };

  return (
    <>
      <Form.Group>
        <Form.Control
          className={`form-control ${inputColor}`}
          type="text"
          placeholder="Type company name here"
          value={inputText}
          onChange={onChange}
          onBlur={handleInputBlure}
        />
      </Form.Group>
    </>
  );
};

export default FormInput;
