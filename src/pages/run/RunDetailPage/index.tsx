import React from 'react';
import { PageDetailParams } from '@shared/types';
import { PageContentWrapper } from '@shared/ui';
import { Typography } from 'antd';
import { useParams } from 'react-router-dom';
import { useGetGroup } from '@entities/group';
import { useGetRun } from '@entities/run';
import { useGetQueue } from '@entities/queue';
import { TransferDetailInfo } from '@features/transfer';
import { ConnectionDetailInfo } from '@features/connection';
import { useGetConnection } from '@entities/connection';
import { useGetTransfer } from '@entities/transfer';
import { RunDetailInfo } from '@features/run';
import { useTranslation } from 'react-i18next';

import classes from './styles.module.less';

const { Title } = Typography;

export const RunDetailPage = () => {
  const { t } = useTranslation('run');
  const params = useParams<PageDetailParams>();
  const { data: run } = useGetRun({ id: Number(params.id) });
  const { data: transfer } = useGetTransfer({ id: run.transfer_id });
  const { data: group } = useGetGroup({ id: transfer.group_id });
  const { data: connectionSource } = useGetConnection({ id: transfer.source_connection_id });
  const { data: connectionTarget } = useGetConnection({ id: transfer.target_connection_id });
  const { data: queue } = useGetQueue({ id: transfer.queue_id });

  return (
    <div className={classes.root}>
      <PageContentWrapper>
        <Title>
          {t('run')} #{run.id}
        </Title>
        <div className={classes.extra}>
          <RunDetailInfo run={run} transfer={transfer} />
          <TransferDetailInfo
            transfer={transfer}
            group={group.data}
            connectionSource={connectionSource}
            connectionTarget={connectionTarget}
            queue={queue}
          />
          <ConnectionDetailInfo
            title={t('sourceConnectionInfo', { ns: 'connection' })}
            group={group.data}
            connection={connectionSource}
          />
          <ConnectionDetailInfo
            title={t('targetConnectionInfo', { ns: 'connection' })}
            group={group.data}
            connection={connectionTarget}
          />
        </div>
      </PageContentWrapper>
    </div>
  );
};
