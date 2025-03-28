import React from 'react';
import { PageDetailParams } from '@shared/types';
import { PageContentWrapper } from '@shared/ui';
import { Typography } from 'antd';
import { useParams } from 'react-router-dom';
import { useGetQueue } from '@entities/queue';
import { useGetGroup } from '@entities/group';
import { QueueDetail } from '@widgets/queue';
import { useTranslation } from 'react-i18next';

const { Title } = Typography;

export const QueueDetailPage = () => {
  const { t } = useTranslation('queue');
  const params = useParams<PageDetailParams>();
  const { data: queue } = useGetQueue({ id: Number(params.id) });
  const { data: group } = useGetGroup({ id: queue.group_id });

  return (
    <PageContentWrapper gap="large">
      <Title>
        {t('queue')} «{queue.name}»
      </Title>
      <QueueDetail queue={queue} group={group} />
    </PageContentWrapper>
  );
};
