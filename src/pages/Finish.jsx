import React, { useState } from "react";
import { Container } from "react-bootstrap";

import { SurveyService } from "api/survey/survey.service";
import { surveyId } from "constants";

import logo from "images/logo.svg";
import checked from "images/checked.svg";
import Footer from "components/Footer";

const Finish = ({ questions }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handlePostRequest = async () => {
    try {
      const items = questions.map((item) => ({
        id: item.id,
        custom_text: item.custom_text,
        answer_option_ids: item.answers,
      }));
      console.log(items);
      await SurveyService.sendAnswers(surveyId, items);
      localStorage.removeItem("saved-data");
    } catch (error) {
      console.error("Error sending answers:", error);
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="finish__wrapper">
      <Container className="container">
        <div className="finish__main-wrapper">
          <div className="finish__logo">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="finish__main">
            <h3>You have reached the end of the questionnaire.</h3>
          </div>
          <div className="checkbox__wrapper">
            <label className="finish__label">
              <input
                className="finish__checkbox"
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span
                className={`finish__label span ${isChecked ? "" : "checked"}`}
              >
                {isChecked ? (
                  ""
                ) : (
                  <img
                    className="finish__checbox-icon"
                    src={checked}
                    alt="checked"
                  />
                )}
              </span>
            </label>
            <span className="checkbox__text">I approve the use of my data</span>
          </div>
          <Footer
            onButtonClick={handlePostRequest}
            changingClass="center"
            disabled={isChecked}
            buttonSize="small"
            buttonName="Save"
          >
            <span>
              If you can see the benefit that your agency could derive from
              listening better to your people then please speak to us or contact
              them directly{" "}
              <a className="footer__link" href="/">
                <span>click here</span>
              </a>
            </span>
          </Footer>
        </div>
      </Container>
    </div>
  );
};

export default Finish;
