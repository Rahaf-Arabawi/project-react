import React, { useState } from "react";
import "./contact.css";
import Image from "../img/jjj.jpg";
import { useTranslation } from "react-i18next";
const ContactUsForm = () => {
  const { t, i18n } = useTranslation();
  const selectedLanguage = i18n.language;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      style={{ direction: selectedLanguage === "ar" ? "rtl" : "ltr" }}
      id="Contact"
      className="contact-us-form22"
    >
      <div className="form-container">
        <div className="form-card">
          <h2 className="form-title">{t("contact")}</h2>

          {success && (
            <div className="success-message">{t("contact-title")}</div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t("contact-label")}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("contact-title1")}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t("contact-label1")}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("contact-title2")}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">{t("contact-label2")}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("contact-title3")}
                rows="4"
                required
              ></textarea>
            </div>

            <button type="button" className="submit-button">
              {t("contact-button")}
            </button>
          </form>
        </div>
      </div>
      <img src={Image} alt="a" />
    </div>
  );
};

export default ContactUsForm;
