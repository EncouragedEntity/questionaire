import React, { useState } from "react";

import Home from "pages/Home/Home";
import Questions from "pages/Questions";
import Finish from "pages/Finish";

const Layout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [companies, setCompanies] = useState([]);

  const quizSteps = (steps) => {
    switch (steps) {
      case 1:
        return (
          <Home
            companies={companies}
            setCompanies={setCompanies}
            setCurrentStep={setCurrentStep}
          />
        );
      case 2:
        return (
          <Questions
            questions={questions}
            setQuestions={setQuestions}
            setCurrentStep={setCurrentStep}
          />
        );
      case 3:
        return <Finish questions={questions} setCurrentStep={setCurrentStep} />;
      default:
        return null;
    }
  };

  return <>{quizSteps(currentStep)}</>;
};

export default Layout;
