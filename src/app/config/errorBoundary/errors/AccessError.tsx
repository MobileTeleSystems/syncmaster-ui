import React from 'react';
import { Result } from 'antd';
import { useTranslation } from 'react-i18next';

import { BackHome } from './BackHome';

export const AccessError = () => {
  const { t } = useTranslation('error');

  return <Result status="403" title="403" subTitle={t('access')} extra={<BackHome />} />;
};
