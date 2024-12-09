import React from 'react';
import { PageContentWrapper } from '@shared/ui';
import { Typography } from 'antd';

import { TransferListPageContent } from './components';

const { Title } = Typography;

export const TransferListPage = () => {
  return (
    <PageContentWrapper width="large">
      <Title>Transfers</Title>
      <TransferListPageContent />
    </PageContentWrapper>
  );
};
