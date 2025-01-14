import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import English from './translations/en.json'
import 繁體中文 from './translations/tc.json'

const resources = {
  English,
  繁體中文,
}

export const availableLanguages = Object.keys(resources)

i18n.use(initReactI18next).use(LanguageDetector).init({
  resources,
  defaultNS: 'common',
  fallbackLng: 'English',
})
