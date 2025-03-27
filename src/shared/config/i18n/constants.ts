import { Language } from './types';
import en from './translations/en.json';
import ru from './translations/ru.json';

export const resources = {
  [Language.EN]: en,
  [Language.RU]: ru,
};

export const LANGUAGE_LOCAL_STORAGE_KEY = 'LANGUAGE';
