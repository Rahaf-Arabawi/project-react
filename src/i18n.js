import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import TranslateEn from "./en.json";
import TranslateAr from "./ar.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: TranslateEn,
    },
    ar: {
      translation: TranslateAr,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  react: { useSuspense: false },
});
