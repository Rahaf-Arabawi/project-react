import React from "react";
import "./contactUs.css";
import Image from "./img/WhatsApp Image 2025-01-31 at 19.23.44_1e9f56dd.jpg";
import Contact from "../home page/contact/contact";
import Nav from "../home page/navBar/nav";
import Footer from "../home page/footer/footer";
import { useTranslation } from "react-i18next";

function ContactUs() {
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <Nav />
        <div className="body1">
          <div className="container5">
            <div className="box_brieff">
              <div className="single_brief">
                <div className="icon_breif">
                  <i className="icon-phone">📞</i>
                </div>
                <h2 className="pad">{t("contact-paga")}</h2>
                <p className="pad">+962 799379762</p>
              </div>
              <div className="single_brief">
                <div className="icon_breif">
                  <i className="icon-location">📍</i>
                </div>
                <h2 className="pad">{t("contact-paga-location")}</h2>
                <p className="pad">{t("contact-paga-title")}</p>
              </div>
              <div className="single_brief">
                <div className="icon_breif">
                  <i className="icon-appointment">💰</i>
                </div>
                <h2 className="pad">{t("contact-paga-title1")}</h2>
                <p className="pad">{t("footer-title8")}</p>
              </div>
            </div>
          </div>
        </div>
        <Contact />
        <section className="location-contact">
          <div className="location" style={{ marginLeft: "50px" }}>
            <h1>{t("contact-paga-title2")}</h1>
            <a href="https://www.google.com/maps/place/Orange+Digital+Village+Aqaba/@29.535652,35.0123723,17z/data=!3m1!4b1!4m6!3m5!1s0x150071875a9fca41:0xf5d61d999f967371!8m2!3d29.535652!4d35.0123723!16s%2Fg%2F11t2b3tv6d?entry=ttu&g_ep=EgoyMDI1MDEyNy4wIKXMDSoASAFQAw%3D%3D">
              <img style={{ width: "100%" }} src={Image} alt="Map" />
            </a>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default ContactUs;
