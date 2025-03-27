import React from "react";
import { MdFacebook } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import Image1 from "../img/illustration-mockups.svg";
import { useTranslation } from "react-i18next";
import "./HeroSection.css";

function HeroSection() {
  const { t, i18n } = useTranslation();
  const selectedLanguage = i18n.language;

  return (
    <main className="main-div">
      <div className="container">
        <div className="wrapper">
          <div className="content">
            <div className="hero-img">
              <img src={Image1} alt="" />
            </div>
            <div
              style={{ direction: selectedLanguage === "ar" ? "rtl" : "ltr" }}
              className="hero-text"
            >
              <h1>
                {t("hero-title")} <br /> {t("hero-title1")}
              </h1>
              <p>{t("herop")}</p>
              <a href="/Log"> {t("heroa")}</a>
            </div>
          </div>
          <div className="social">
            <a
              href="https://www.facebook.com"
              aria-label="Read More and click in my facebook account"
            >
              <MdFacebook
                style={{
                  color: "white",
                  fontSize: "1.5rem",
                }}
              />{" "}
            </a>
            <a
              href="https://www.instagram.com"
              aria-label="Read More and click in my instagram account"
            >
              <AiFillInstagram
                style={{
                  color: "white",
                  fontSize: "1.5rem",
                }}
              />{" "}
            </a>
            <a
              href="https://www.twitter.com"
              aria-label="Read More and click in my twitter account"
            >
              <FaTwitter
                style={{
                  color: "white",
                  fontSize: "1.5rem",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HeroSection;
