import React from 'react';
import { Typography } from 'antd';
import { PageContentWrapper } from '@shared/ui';

import { CreateConnectionPageContent } from './components';

const { Title } = Typography;

export const CreateConnectionPage = () => {
  return (
    <PageContentWrapper width="small">
      <Title>Create Connection</Title>
      <CreateConnectionPageContent />
    </PageContentWrapper>
  );
};
