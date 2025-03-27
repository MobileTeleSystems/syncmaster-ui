import React from 'react';
import { Typography } from 'antd';
import { PageContentWrapper } from '@shared/ui';
import { useTranslation } from 'react-i18next';

import { CreateQueuePageContent } from './components';

const { Title } = Typography;

export const CreateQueuePage = () => {
  const { t } = useTranslation('queue');

  return (
    <PageContentWrapper gap="large">
      <Title>{t('createQueue')}</Title>
      <CreateQueuePageContent />
    </PageContentWrapper>
  );
};
