import React from "react";

const Counter = ({ currenQuestion, questionsQuantity }) => {
  return (
    <div className="counter">
      <span className="active-question-no">{currenQuestion + 1}</span>
      <span className="total-question">/{questionsQuantity}</span>
    </div>
  );
};

export default Counter;
