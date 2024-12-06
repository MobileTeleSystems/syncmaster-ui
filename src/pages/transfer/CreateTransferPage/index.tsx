import React from 'react';
import { Typography } from 'antd';
import { PageContentWrapper } from '@shared/ui';

import { CreateTransferPageContent } from './components';

const { Title } = Typography;

export const CreateTransferPage = () => {
  return (
    <PageContentWrapper width="small">
      <Title>Create Transfer</Title>
      <CreateTransferPageContent />
    </PageContentWrapper>
  );
};
