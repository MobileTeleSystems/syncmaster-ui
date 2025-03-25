import React from 'react';
import { Typography } from 'antd';
import { PageContentWrapper } from '@shared/ui';
import { useTranslation } from 'react-i18next';

import { CreateConnectionPageContent } from './components';

const { Title } = Typography;

export const CreateConnectionPage = () => {
  const { t } = useTranslation('connection');

  return (
    <PageContentWrapper gap="large">
      <Title>{t('createConnection')}</Title>
      <CreateConnectionPageContent />
    </PageContentWrapper>
  );
};
