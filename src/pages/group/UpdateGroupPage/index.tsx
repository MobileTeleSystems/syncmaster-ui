import React from 'react';
import { Typography } from 'antd';
import { PageContentWrapper } from '@shared/ui';
import { useParams } from 'react-router-dom';
import { PageDetailParams, UserRole } from '@shared/types';
import { useGetGroup } from '@entities/group';
import { UpdateGroup } from '@features/group';
import { hasAccessByUserRole } from '@shared/utils';
import { AccessError } from '@shared/config';
import { useTranslation } from 'react-i18next';

const { Title } = Typography;

export const UpdateGroupPage = () => {
  const { t } = useTranslation('group');
  const params = useParams<PageDetailParams>();
  const { data: group } = useGetGroup({ id: Number(params.id) });

  if (!hasAccessByUserRole(UserRole.OWNER, group.role)) {
    throw new AccessError();
  }

  return (
    <PageContentWrapper gap="large">
      <Title>{t('updateGroup')}</Title>
      <UpdateGroup group={group.data} />
    </PageContentWrapper>
  );
};
