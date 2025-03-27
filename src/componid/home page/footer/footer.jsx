import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import "./footer.css";
import Imge1 from "../img/imagee.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer1">
      <img className="footer-img" src={Imge1} alt="a" />
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">{t("footer-title")}</h3>
          <p>{t("footer-description")}</p>
        </div>

        <nav className="footer-section">
          <h3 className="footer-title">{t("footer-title1")}</h3>
          <ul className="footer-links">
            <li>
              <a href="#" className="footer-link">
                {t("footer-title2")}
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                {t("footer-title3")}
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                {t("footer-title4")}
              </a>
            </li>
          </ul>
        </nav>

        <address className="footer-section">
          <h3 className="footer-title">{t("footer-title5")}</h3>
          <p>
            <FaMapMarkerAlt className="footer-icon" /> {t("footer-title6")}
          </p>
          <p>
            <FaPhone className="footer-icon" /> {t("footer-title7")}
          </p>
          <p>
            <FaEnvelope className="footer-icon" /> {t("footer-title8")}
          </p>
        </address>
      </div>

      <div className="footer-bottom">
        <p>&copy; {t("footer-title9")}</p>
      </div>
    </footer>
  );
};

export default Footer;
