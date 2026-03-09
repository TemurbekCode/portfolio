import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translation: {
          home: "Home",
          about: "About",
          contact: "Contact",
          achievements: "Projects",
          skill: "Skills",

        }
      },
      uz: {
        translation: {
          home: "Bosh sahifa",
          about: "Men haqimda",
          contact: "Bog'lanish"
        }
      }
    }
  })

export default i18n