import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { enHome } from "./en/home";
import { enContact } from "./en/contact";

import { frHome } from "./fr/home";
import { frContact } from "./fr/contact";


i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  resources: {

    en: {
      translation: {
        home: enHome,
        contact: enContact
      }
    },

    fr: {
      translation: {
        home: frHome,
        contact: frContact
      }
    },
  },

  interpolation: {
    escapeValue: false
  },
  keySeparator: ".",
})

export default i18n
