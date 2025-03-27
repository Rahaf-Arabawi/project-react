import React from "react";
import "./nav.css";
import { useTranslation } from "react-i18next";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDarkMode } from "../../../App";
import { MdDarkMode } from "react-icons/md";
import { IoSunny } from "react-icons/io5";

function Navbar() {
  const { t, i18n } = useTranslation();
  const darkModeContext = useDarkMode();

  const isDarkMode = darkModeContext ? darkModeContext.isDarkMode : false;
  const toggleDarkMode = darkModeContext
    ? darkModeContext.toggleDarkMode
    : () => {};

  const selectedLanguage = i18n.language;

  return (
    <div className="main-s">
      <nav
        style={{ direction: selectedLanguage === "ar" ? "rtl" : "ltr" }}
        className="navbar1"
      >
        <div className="logo">
          <h1>{t("nav-title")}</h1>
        </div>
        <div>
          <ul className="centered-components">
            <li className="element">
              <Link to="/">{t("nava")}</Link>
            </li>
            <li className="element">
              <Link to="/b">{t("nava1")}</Link>
            </li>
            <li className="element">
              <Link to="/c">{t("nava2")}</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="right-components">
            <li>
              {i18n.language === "en" && (
                <button
                  className="ar"
                  onClick={() => {
                    i18n.changeLanguage("ar");
                  }}
                >
                  AR
                </button>
              )}

              {i18n.language === "ar" && (
                <button
                  className="en"
                  onClick={() => {
                    i18n.changeLanguage("en");
                  }}
                >
                  EN
                </button>
              )}
            </li>
            <li>
              <button
                className={`btn ${isDarkMode ? "btn-light" : "btn-dark"}`}
                onClick={toggleDarkMode}
              >
                {isDarkMode ? <IoSunny /> : <MdDarkMode />}
              </button>
            </li>
            <li className="element">
              <Link to="/fn">
                <BsPersonCircle
                  style={{
                    color: "white",
                    fontSize: "1.8rem",
                    margin: "7px",
                  }}
                />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
