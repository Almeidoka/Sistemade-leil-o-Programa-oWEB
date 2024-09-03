import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import pt from '../locales/pt.json';
import en from '../locales/en.json';

const recursos = {
    en:{
        translation: en,
    },
    pt:{
        translation: pt,
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        recursos,    
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    })

    export default i18n;