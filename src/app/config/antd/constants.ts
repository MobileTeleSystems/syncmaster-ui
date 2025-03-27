import { Language } from '@shared/config';

export const ANTD_LOCALES = {
  [Language.EN]: () => import('antd/es/locale/en_US'),
  [Language.RU]: () => import('antd/es/locale/ru_RU'),
};
