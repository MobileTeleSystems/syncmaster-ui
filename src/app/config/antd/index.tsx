import { ConfigProvider } from 'antd';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Locale } from 'antd/lib/locale-provider';
import { Language } from '@shared/config';

import { getValidateMessages } from './utils';
import { ANTD_LOCALES } from './constants';

export const AntdConfigProvider = ({ children }: PropsWithChildren) => {
  const { t, i18n } = useTranslation('error');
  const [locale, setLocale] = useState<Locale>();

  useEffect(() => {
    const loadLocale = async () => {
      const localeModule = await ANTD_LOCALES[i18n.language as Language]();
      setLocale(localeModule.default);
    };
    loadLocale();
  }, [i18n.language]);

  return (
    <ConfigProvider locale={locale} form={{ validateMessages: getValidateMessages(t) }}>
      {children}
    </ConfigProvider>
  );
};
