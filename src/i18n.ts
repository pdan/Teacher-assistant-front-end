import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationFA from './translations/fa.json';

const resources = {
    fa: { translation: translationFA }
}
const language: string = localStorage.getItem('language') || 'en';
// document.getElementsByTagName('html')[0].setAttribute('dir', language === 'fa' ? 'rtl' : 'ltr')

i18n.use(initReactI18next).init({
    resources,
    lng: language,
    keySeparator: false,
    interpolation: {
        escapeValue: false
    }
})

export default i18n