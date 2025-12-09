import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from './locales/en.json';
import ptTranslations from './locales/pt.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      'pt-PT': {
        translation: ptTranslations,
      },
      pt: {
        translation: ptTranslations,
      },
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'pt', 'pt-PT'],
    // Normalize pt-BR, pt-PT, pt to 'pt'
    load: 'languageOnly',
    nonExplicitSupportedLngs: true,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      // Convert pt-BR to pt-PT (Portugal)
      convertDetectedLanguage: (lng: string) => {
        if (lng.startsWith('pt')) {
          return 'pt'; // Use pt (which maps to pt-PT translations)
        }
        return lng;
      },
    },
  });

export default i18n;

