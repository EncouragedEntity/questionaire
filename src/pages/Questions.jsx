import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import { surveyId } from "constants";
import { SurveyService } from "api/survey/survey.service";

import Header from "components/Header";
import Footer from "components/Footer";
import Cookies from "js-cookie";
import Counter from "components/Counter";
import Progress from "components/Progress";
import Question from "components/Question";

const Questions = ({ setCurrentStep, questions, setQuestions }) => {
  const [currentQuestionIndex, setCurrenQuestionIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await SurveyService.getSurvey(surveyId);
        const savedDataText = localStorage.getItem("saved-data");
        const items = data.survey.questions.map((item) => ({
          id: item.id,
          title: item.title,
          description: item.description,
          required: item.required,
          hasOtherOption: item.has_other_option,
          custom_text: "",
          type: item.type,
          isValid: !item.required,
          answers: [],
          options: item.options.map((o) => ({
            id: o.id,
            name: o.text,
          })),
        }));
        let lastAnsweredQuestionIndex = null;

        if (savedDataText) {
          const savedDataItems = JSON.parse(savedDataText);
          savedDataItems.forEach((x) => {
            const item = items.find((y) => y.id === x.questionId);
            item.custom_text = x.custom_text;
            item.answers = x.answers;
            item.isValid = !questions.required || x.answers.length > 0;
            if (x.custom_text || x.answers.length) {
              lastAnsweredQuestionIndex = items.indexOf(item);
            }
          });
        }
        setQuestions(items);
        if (lastAnsweredQuestionIndex) {
          setCurrenQuestionIndex(lastAnsweredQuestionIndex);
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };
    fetchData();
  }, [setQuestions]);

  const currentQuestion = questions[currentQuestionIndex];

  const questionsQuantity = questions.length;

  const percentage = Math.round(
    ((currentQuestionIndex + 1) / questionsQuantity) * 100
  );

  const onClickPrevQuestion = () => {
    setCurrenQuestionIndex(currentQuestionIndex - 1);
  };

  const handleNextPage = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrenQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentStep(3);
    }
  };

  const updateQuestion = (question) => {
    const updatedQuestions = questions.map((item) => {
      if (item.id === question.id) {
        return { ...item, ...question };
      } else {
        return item;
      }
    });
    setQuestions(updatedQuestions);
    if (!Cookies.get("cookiesAccepted")) {
      return;
    }

    const savedData = updatedQuestions.map((item) => ({
      questionId: item.id,
      answers: item.answers,
      custom_text: item.custom_text,
    }));
    localStorage.setItem("saved-data", JSON.stringify(savedData));
  };

  if (!currentQuestion) {
    return null;
  }

  return (
    <>
      <Header />
      <div className="questions__main">
        <Container className="container">
          <Counter
            currenQuestion={currentQuestionIndex}
            questionsQuantity={questionsQuantity}
          />
          <Progress percentage={percentage} />
          <div className="questions__main-wrapper">
            <Question
              currentQuestion={currentQuestion}
              updateQuestion={updateQuestion}
            />
            <Footer
              currentStep={currentQuestionIndex}
              prevPage={() => onClickPrevQuestion()}
              onButtonClick={handleNextPage}
              changingClass={currentQuestionIndex > 0 && "left"}
              showPrevButton={true}
              disabled={!currentQuestion.isValid}
              buttonSize="small"
              buttonName="Next"
            >
              <span>
                <span> Question & RetainPlease </span>
                <a className="footer__link" href="/">
                  <span>click here </span>
                </a>
                if you would prefer not to participate in our Pulse Check ©
                Copyright 2024
              </span>
            </Footer>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Questions;
