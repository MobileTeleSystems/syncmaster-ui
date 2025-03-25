import React from 'react';
import { Result } from 'antd';
import { useTranslation } from 'react-i18next';

import { BackHome } from './BackHome';

export const ServerError = () => {
  const { t } = useTranslation('error');

  return <Result status="500" title="500" subTitle={t('internalServer')} extra={<BackHome />} />;
};
