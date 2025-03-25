import React from 'react';
import { PageContentWrapper } from '@shared/ui';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';

import { TransferListPageContent } from './components';

const { Title } = Typography;

export const TransferListPage = () => {
  const { t } = useTranslation('transfer');

  return (
    <PageContentWrapper width="large">
      <Title>{t('transfers')}</Title>
      <TransferListPageContent />
    </PageContentWrapper>
  );
};
