import React from "react";
import {
  IoPersonSharp,
  IoTrophySharp,
  IoHeartSharp,
  IoBasketballSharp,
  IoCalendarSharp,
  IoLaptopSharp,
} from "react-icons/io5";
import "./activity.css";
import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation();
  return (
    <div id="Activity">
      <h1 className="speacial-heading">{t("activity")}</h1>
      <section className="services">
        <div className="container_services">
          <div className="serviceBox" style={{ backgroundColor: "#303030" }}>
            <div className="icon" style={{ "--i": "#674baf" }}>
              <IoTrophySharp
                color={"#303030"}
                beat
                height="70px"
                width="70px"
              />
            </div>
            <div className="content_services">
              <h2>{t("activity-title")} </h2>
              <p> {t("activity-description")} </p>
            </div>
          </div>
          <div className="serviceBox" style={{ backgroundColor: "#303030" }}>
            <div className="icon" style={{ "--i": "#f452c8" }}>
              <IoBasketballSharp
                color={"#303030"}
                rotate
                height="70px"
                width="70px"
              />
            </div>
            <div className="content_services">
              <h2>{t("activity-title1")}</h2>
              <p>{t("activity-description1")}</p>
            </div>
          </div>
          <div className="serviceBox" style={{ backgroundColor: "#303030" }}>
            <div className="icon" style={{ "--i": "#674baf" }}>
              <IoPersonSharp
                color={"#303030"}
                beat
                height="140px"
                width="140px"
              />
            </div>
            <div className="content_services">
              <h2>{t("activity-title2")}</h2>
              <p>{t("activity-description2")}</p>
            </div>
          </div>
          <div className="serviceBox" style={{ backgroundColor: "#303030" }}>
            <div className="icon" style={{ "--i": "#f452c8" }}>
              <IoCalendarSharp
                color={"#303030"}
                beat
                height="70px"
                width="70px"
              />
            </div>
            <div className="content_services">
              <h2> {t("activity-title3")} </h2>
              <p>{t("activity-description3")}</p>
            </div>
          </div>
          <div className="serviceBox" style={{ backgroundColor: "#303030" }}>
            <div className="icon" style={{ "--i": "#674baf" }}>
              <IoHeartSharp color={"#303030"} beat height="70px" width="70px" />
            </div>
            <div className="content_services">
              <h2>{t("activity-title4")}</h2>
              <p> {t("activity-description4")}</p>
            </div>
          </div>
          <div className="serviceBox" style={{ backgroundColor: "#303030" }}>
            <div className="icon" style={{ "--i": "#f452c8" }}>
              <IoLaptopSharp
                color={"#303030"}
                beat
                height="70px"
                width="70px"
              />
            </div>
            <div className="content_services">
              <h2> {t("activity-title5")}</h2>
              <p> {t("activity-description5")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
