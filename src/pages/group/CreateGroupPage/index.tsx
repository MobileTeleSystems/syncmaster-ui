import React from 'react';
import { Typography } from 'antd';
import { CreateGroup } from '@features/group';
import { PageContentWrapper } from '@shared/ui';
import { useTranslation } from 'react-i18next';

const { Title } = Typography;

export const CreateGroupPage = () => {
  const { t } = useTranslation('group');

  return (
    <PageContentWrapper gap="large">
      <Title>{t('createGroup')}</Title>
      <CreateGroup />
    </PageContentWrapper>
  );
};
