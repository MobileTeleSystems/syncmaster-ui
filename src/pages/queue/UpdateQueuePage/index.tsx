import React from 'react';
import { Typography } from 'antd';
import { PageContentWrapper } from '@shared/ui';
import { useParams } from 'react-router-dom';
import { PageDetailParams, UserRole } from '@shared/types';
import { useGetQueue } from '@entities/queue';
import { UpdateQueue } from '@features/queue';
import { useGetGroup } from '@entities/group';
import { hasAccessByUserRole } from '@shared/utils';
import { AccessError } from '@shared/config';
import { useTranslation } from 'react-i18next';

const { Title } = Typography;

export const UpdateQueuePage = () => {
  const { t } = useTranslation('queue');
  const params = useParams<PageDetailParams>();
  const { data: queue } = useGetQueue({ id: Number(params.id) });
  const { data: group } = useGetGroup({ id: queue.group_id });

  if (!hasAccessByUserRole(UserRole.MAINTAINER, group.role)) {
    throw new AccessError();
  }

  return (
    <PageContentWrapper gap="large">
      <Title>{t('updateQueue')}</Title>
      <UpdateQueue queue={queue} group={group.data} />
    </PageContentWrapper>
  );
};
