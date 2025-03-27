import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { resources } from './constants';
import { Language } from './types';

i18n.use(initReactI18next).init({
  lng: Language.EN,
  fallbackLng: Language.EN,
  resources,
  defaultNS: 'shared',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
