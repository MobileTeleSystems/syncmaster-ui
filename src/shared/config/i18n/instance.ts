import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { LANGUAGE_LOCAL_STORAGE_KEY, resources } from './constants';
import { Language } from './types';

i18n.use(initReactI18next).init({
  lng: localStorage.getItem(LANGUAGE_LOCAL_STORAGE_KEY) || Language.EN,
  fallbackLng: Language.EN,
  resources,
  defaultNS: 'shared',
  keySeparator: '.',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
