import React from 'react';
import { Typography } from 'antd';
import { PageContentWrapper } from '@shared/ui';

import { CreateQueuePageContent } from './components';

const { Title } = Typography;

export const CreateQueuePage = () => {
  return (
    <PageContentWrapper gap="large">
      <Title>Create Queue</Title>
      <CreateQueuePageContent />
    </PageContentWrapper>
  );
};
