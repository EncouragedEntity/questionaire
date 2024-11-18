import React from "react";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FromInputDate = ({ question, updateQuestion }) => {
  const onChange = (date) => {
    updateQuestion({ ...question, custom_text: date });
  };

  const onKeyDown = (event) => {
    const allowedCharacters = /^[0-9]*$/;
    const dateValue = event.target.value;
    const isBackspace = event.key === "Backspace";
    const isNumericInput = allowedCharacters.test(event.key);
    const isSlashKey = event.key === "/";

    if (!isNumericInput && !isBackspace && !isSlashKey) {
      event.preventDefault();
      return;
    }

    if (
      (dateValue.length === 2 || dateValue.length === 5) &&
      !isBackspace &&
      !isSlashKey
    ) {
      event.target.value += "/";
    }

    if (dateValue.length >= 10 && !isBackspace) {
      event.preventDefault();
    }
  };

  return (
    <>
      <Form.Group controlId="datePicker">
        <DatePicker
          onChange={onChange}
          selected={question.custom_text}
          dateFormat="dd/MM/yyyy"
          className="form-control"
          calendarClassName="calendar"
          showPopperArrow={false}
          onKeyDown={onKeyDown}
          placeholderText="Please select"
          showYearDropdown
          scrollableYearDropdown
        />
      </Form.Group>
    </>
  );
};

export default FromInputDate;
