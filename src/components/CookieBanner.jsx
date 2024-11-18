import React, { useState } from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";

import { fadeIn } from "react-animations";
import { StyleSheet, css } from "aphrodite";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [acceptedCookies, setAcceptedCookies] = useState(
    Cookies.get("cookiesAccepted")
  );

  const acceptCookies = () => {
    Cookies.set("cookiesAccepted", "true", { expires: 365 });
    setAcceptedCookies(true);
  };

  const declineCookies = () => {
    Cookies.remove("cookiesAccepted");
    setAcceptedCookies(false);
  };

  if (acceptedCookies) {
    return null;
  }

  const styles = StyleSheet.create({
    fadeInAnimation: {
      animationName: fadeIn,
      animationDuration: "2s",
    },
  });

  //   useEffect(() => {
  //     const hasAcceptedCookie = localStorage.getItem("cookieAccepted");
  //     setShowBanner(!hasAcceptedCookie);
  //   }, []);

  //   const acceptCookie = () => {
  //     localStorage.getItem("cookieAccepted", "true");
  //     setShowBanner(false);
  //   };

  //   const handleCookieConsent = (accepted) => {
  //     if (!accepted) {
  //       Cookies.remove("yourCookieName");
  //     }
  //   };

  return (
    <div className={css(styles.fadeInAnimation)}>
      <CookieConsent
        location="bottom"
        containerClasses="cookie__banner"
        contentClasses="cookie__banner-content"
        buttonClasses="cookie__banner-btn-accept"
        declineButtonClasses="cookie__banner-btn-decline"
        buttonWrapperClasses="cookie__banner-btn-wrapper"
        buttonText="Accept all cookies"
        cookieName="myCookieConsent"
        disableStyles={true}
        enableDeclineButton
        onAccept={acceptCookies}
        onDecline={declineCookies}
      >
        <h2>Cookie Policy</h2>
        <span>
          We use cookies to remember your settings, personalise content, improve
          website performance, analyse traffic and assist with our general
          marketing efforts.
          <Link className="cookie__banner-link" to="/">
            Learn more
          </Link>
        </span>
      </CookieConsent>
    </div>
  );
};

export default CookieBanner;
