import React, { useEffect, useState } from "react";

import { Container } from "react-bootstrap";
import { SurveyService } from "api/survey/survey.service";

import logo from "images/logo.svg";
import Footer from "components/Footer";
import FormInput from "./FormInput";
import RadioButtons from "./RadioButtons";
import DropdownList from "./DropdownList";
import CookieBanner from "components/CookieBanner";

const Home = ({ setCurrentStep, companies, setCompanies }) => {
  const [selectedOption, setSelectedOption] = useState("dropdown");
  const [selectedCompany, setSelectedCompany] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await SurveyService.getCompanies();

        const items = data.companies.map((item) => ({
          id: item.id,
          name: item.name,
        }));
        setCompanies(items);

        const savedCompanyId = localStorage.getItem("saved-company-id");

        if (savedCompanyId) {
          const selectedItem = items.find(
            (x) => x.id === parseInt(savedCompanyId)
          );

          setSelectedCompany(selectedItem);
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };
    fetchData();
  }, []);

  const handleRadioButtonChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const onChange = (item) => {
    setSelectedCompany(item);
    localStorage.setItem("saved-company-id", item.id);
  };
  return (
    <Container className="container">
      <div className="welcome__page">
        <a href="/">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <div className="welcome__text">
          <p>Hello</p>
          <p>
            Welcome to our quarterly Alliance People Pulse with our trusted
            partners Question & Retain. This is an ongoing piece of research to
            really understand the thoughts and feelings of the people working in
            the independent agency sector. We will use the results to inform
            agency leaders of the levels of satisfaction and engagement and also
            develop products and services to help them improve scores going
            forward.
          </p>
          <p>
            This process is all run through a third party and is completely
            confidential and unattributable to individuals, so please be honest
            and feel free to expand your answers in the comments box and click
            on submit after each question.
          </p>
          <p>
            All agencies that respond will be invited to attend a special
            de-brief session on 17th October - open to Alliance members and non
            members alike. Many thanks for your time. The team at The Alliance.
          </p>
        </div>
        <div className="welcome__info">
          <p>Are you Alliance Member Agency? *</p>
        </div>
        <RadioButtons handleOptionChange={handleRadioButtonChange} />
        {selectedOption === "dropdown" && (
          <DropdownList
            companies={companies}
            onChange={onChange}
            selectedCompany={selectedCompany}
          />
        )}
        {selectedOption === "input" && <FormInput />}
        <Footer
          onButtonClick={() => setCurrentStep(2)}
          changingClass="center"
          buttonSize="large"
          buttonName="Please click here to continue"
        >
          <span>
            If you can see the benefit that your agency could derive from
            listening better to your people then please speak to us or contact
            them directly{" "}
            <a href="/" className="footer__link">
              <span>click here</span>
            </a>
          </span>
        </Footer>
        <CookieBanner />
      </div>
    </Container>
  );
};

export default Home;
