import React from "react";
import "./Services.css";
import { useTranslation } from "react-i18next";
import { useDarkMode } from "../../../App"; // استيراد حالة الوضع الليلي

const Services = () => {
  const { t } = useTranslation();
  const darkModeContext = useDarkMode(); // Get the context

  // Check if darkModeContext is defined before destructuring
  const isDarkMode = darkModeContext ? darkModeContext.isDarkMode : false;

  return (
    <section
      id="Services"
      className={`services-section ${isDarkMode ? "dark-mode" : ""}`}
    >
      <h2 className="section-title">{t("services")}</h2>
      <div className="services-grid">
        <div className="service-item active">
          <div className="icon">💻</div>
          <h3>{t("services-title")}</h3>
          <p>{t("services-description")}</p>
        </div>
        <div className="service-item">
          <div className="icon">📈</div>
          <h3>{t("services-title1")}</h3>
          <p>{t("services-description1")}</p>
        </div>
        <div className="service-item">
          <div className="icon">🎨</div>
          <h3>{t("services-title2")}</h3>
          <p>{t("services-description2")}</p>
        </div>
        <div className="service-item">
          <div className="icon">📊</div>
          <h3>{t("services-title3")}</h3>
          <p>{t("services-description3")}</p>
        </div>
        <div className="service-item">
          <div className="icon">📱</div>
          <h3>{t("services-title4")}</h3>
          <p>{t("services-description4")}</p>
        </div>
        <div className="service-item">
          <div className="icon">📄</div>
          <h3>{t("services-title5")}</h3>
          <p>{t("services-description5")}</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
