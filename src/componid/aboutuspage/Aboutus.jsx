import Abdalluh from "./img/abdalluh.jpg";
import Ahmad from "./img/ahmad.jpg";
import Rama from "./img/rama.jpg";
import Rahaf from "./img/rahaf.jpg";
import Rana from "./img/ranan.jpg";
import Jenan from "./img/jenan.jpg";
import Boy from "./img/c0d73d805848b15aead9d343be8f41d0.jpg";
import "./Aboutus.css";
import { useDarkMode } from "../../App"; // Import useDarkMode context

import Nav from "../home page/navBar/nav";
import Footer from "../home page/footer/footer";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";

function Header() {
  const darkModeContext = useDarkMode(); // Get the context
  const isDarkMode = darkModeContext ? darkModeContext.isDarkMode : false; // Check dark mode state

  const { t } = useTranslation();

  const [isHovered, setIsHovered] = useState(false);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem("clintsData")) || [];
    setStudents(storedStudents);
  }, []);

  return (
    <div className={isDarkMode ? "aboutus dark-mode" : "aboutus"}>
      <div className="text-center">
        <Nav />
        <div className="about-section">
          <div className={isDarkMode ? "overlay dark-mode" : "overlay"} />
          <h1 className="about-title"> {t("about-page-titel")}</h1>
          <img className="profile-img" src={Boy} alt="mo" />
          <p className="about-text">{t("about-page-description")} </p>
        </div>
        <h2 className="h2">🏫 {t("about-page-titel1")}</h2>
        <div className="container3">
          <div className="card22">
            <img className="img1" src={Abdalluh} alt="صورة الشخص" />
            <h3>{t("about-page-card-name1")}</h3>
            <p>{t("about-page-card-title1")}</p>
            <p>{t("about-page-card-description1")} </p>
          </div>
          <div className="card22">
            <img className="img1" src={Ahmad} alt="صورة الشخص" />
            <h3> {t("about-page-card-name2")}</h3>
            <p>{t("about-page-card-title2")}</p>
            <p>{t("about-page-card-description2")}</p>
          </div>
          <div className="card22">
            <img className="img1" src={Rama} alt="صورة الشخص" />
            <h3>{t("about-page-card-name3")} </h3>
            <p>{t("about-page-card-title3")}</p>
            <p>{t("about-page-card-description3")}</p>
          </div>
          <div className="card22">
            <img className="img1" src={Rahaf} alt="صورة الشخص" />
            <h3>{t("about-page-card-name4")} </h3>
            <p>{t("about-page-card-title4")} </p>
            <p>{t("about-page-card-description4")}</p>
          </div>
          <div className="card22">
            <img className="img1" src={Rana} alt="صورة الشخص" />
            <h3>{t("about-page-card-name5")} </h3>
            <p>{t("about-page-card-title5")} </p>
            <p>{t("about-page-card-description5")}</p>
          </div>
          <div className="card22">
            <img className="img1" src={Jenan} alt="صورة الشخص" />
            <h3>{t("about-page-card-name6")} </h3>
            <p>{t("about-page-card-title6")}</p>
            <p>{t("about-page-card-description6")}</p>
          </div>
        </div>
        <h2 className="h2">🎓 {t("about-page-Students-title")} </h2>
        <div className="nop">
          <motion.div
            className="container11"
            animate={{ x: isHovered ? 0 : "-30%" }}
            transition={{
              x: {
                repeat: Infinity,
                duration: isHovered ? 7 : 15,
                ease: "linear",
              },
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            {students.map((student, index) => (
              <div className="card11" key={index}>
                <img src={student.image || "default-avatar.png"} alt="Student" />
                <h3>{student.name}</h3>
              </div>
            ))}
          </motion.div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Header;
