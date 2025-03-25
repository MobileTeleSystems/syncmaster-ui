import React from 'react';
import { Result } from 'antd';
import { useTranslation } from 'react-i18next';

import { BackHome } from './BackHome';

export const NotFoundError = () => {
  const { t } = useTranslation('error');

  return <Result status="404" title="404" subTitle={t('notFound')} extra={<BackHome />} />;
};
