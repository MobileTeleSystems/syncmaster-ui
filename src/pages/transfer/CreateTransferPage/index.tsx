import React from 'react';
import { Typography } from 'antd';
import { PageContentWrapper } from '@shared/ui';

import { CreateTransferPageContent } from './components';

const { Title } = Typography;

export const CreateTransferPage = () => {
  return (
    <PageContentWrapper gap="large">
      <Title>Create Transfer</Title>
      <CreateTransferPageContent />
    </PageContentWrapper>
  );
};
