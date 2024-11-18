import React from "react";
import Checkbox from "./Checkbox";
import FormInput from "./FormInput";
import RadioButtons from "./RadioButtons";
import DropdownList from "./DropdownList";
import FromInputDate from "./FromInputDate";
import FormInputTextarea from "./FormInputTextarea";
import FormInputQuestions from "./FormInputQuestions";

const Question = ({ currentQuestion, updateQuestion }) => {
  const renderQuestions = (question) => {
    switch (question.type) {
      case "list":
        return (
          <DropdownList question={question} updateQuestion={updateQuestion} />
        );
      case "checkbox":
        return <Checkbox question={question} updateQuestion={updateQuestion} />;
      case "radio":
        return (
          <RadioButtons question={question} updateQuestion={updateQuestion} />
        );
      case "text":
        return (
          <FormInputTextarea
            question={question}
            updateQuestion={updateQuestion}
          />
        );
      case "paragraph_text":
        return (
          <FormInputQuestions
            question={question}
            updateQuestion={updateQuestion}
          />
        );
      case "date":
        return (
          <FromInputDate question={question} updateQuestion={updateQuestion} />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <h2 className="questions__main-title">{currentQuestion.title}</h2>
      <span className="questions__main-subtitle">
        {currentQuestion.description}
      </span>
      {renderQuestions(currentQuestion)}
      {currentQuestion.hasOtherOption && (
        <FormInput
          updateQuestion={updateQuestion}
          currentQuestion={currentQuestion}
        />
      )}
    </>
  );
};

export default Question;
