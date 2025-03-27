import React from "react";
import "./teem.css";
import Imge1 from "../img/Artificial-Intelligence.png";
import { useTranslation } from "react-i18next";
import { useDarkMode } from "../../../App"; // Ensure the correct path for importing the hook

const TeamPage = () => {
  const { t, i18n } = useTranslation();
  const { isDarkMode } = useDarkMode(); // Access dark mode state

  const selectedLanguage = i18n.language;

  return (
    <div className={`body-team ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <div className="container2">
        <img className="img1" src={Imge1} alt="a" />
        <div
          style={{ direction: selectedLanguage === "ar" ? "rtl" : "ltr" }}
          className="text-content"
        >
          <h1 className="span1">
            {t("teem-title")} <br /> {t("teem-title1")}
          </h1>
          <p className="para">{t("teem-description")}</p>
          <p className="para">{t("teem-description1")}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
