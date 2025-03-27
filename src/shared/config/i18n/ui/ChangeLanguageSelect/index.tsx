import { Select } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Language } from '../../types';
import { LANGUAGE_LOCAL_STORAGE_KEY } from '../../constants';

import { LANGUAGE_SELECT_OPTIONS } from './constants';
import classes from './styles.module.less';

export const ChangeLanguageSelect = () => {
  const { i18n } = useTranslation();

  const handleChange = (value: Language) => {
    i18n.changeLanguage(value);
    localStorage.setItem(LANGUAGE_LOCAL_STORAGE_KEY, value);
  };

  return (
    <Select
      className={classes.select}
      size="middle"
      options={LANGUAGE_SELECT_OPTIONS}
      value={i18n.language as Language}
      onChange={handleChange}
    />
  );
};
