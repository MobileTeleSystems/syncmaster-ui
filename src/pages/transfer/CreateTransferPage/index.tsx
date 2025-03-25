import React from 'react';
import { Typography } from 'antd';
import { PageContentWrapper } from '@shared/ui';
import { useTranslation } from 'react-i18next';

import { CreateTransferPageContent } from './components';

const { Title } = Typography;

export const CreateTransferPage = () => {
  const { t } = useTranslation('transfer');

  return (
    <PageContentWrapper gap="large">
      <Title>{t('createTransfer')}</Title>
      <CreateTransferPageContent />
    </PageContentWrapper>
  );
};
