import { ConfigProvider } from 'antd';
import React, { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';

import { getValidateMessages } from './utils';

export const AntdConfigProvider = ({ children }: PropsWithChildren) => {
  const { t } = useTranslation('error');

  return <ConfigProvider form={{ validateMessages: getValidateMessages(t) }}>{children}</ConfigProvider>;
};
