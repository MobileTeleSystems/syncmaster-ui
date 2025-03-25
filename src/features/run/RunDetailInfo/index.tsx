import React from 'react';
import dayjs from 'dayjs';
import { Descriptions, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { RunStatusBadge } from '@entities/run';
import { useTranslation } from 'react-i18next';

import { RunDetailInfoProps } from './types';

const { Text } = Typography;

export const RunDetailInfo = ({ run, transfer, ...props }: RunDetailInfoProps) => {
  const { t } = useTranslation('run');

  return (
    <Descriptions title={t('runInfo')} bordered {...props}>
      <Descriptions.Item label={t('id', { ns: 'shared' })} span={3}>
        {run.id}
      </Descriptions.Item>
      <Descriptions.Item label={t('status')} span={3}>
        <RunStatusBadge status={run.status} />
      </Descriptions.Item>
      <Descriptions.Item label={t('startedAt')} span={3}>
        {run.started_at ? dayjs(run.started_at).format('DD-MM-YYYY HH:mm:ss') : ''}
      </Descriptions.Item>
      <Descriptions.Item label={t('endedAt')} span={3}>
        {run.ended_at ? dayjs(run.ended_at).format('DD-MM-YYYY HH:mm:ss') : ''}
      </Descriptions.Item>
      <Descriptions.Item label={t('logUrl')} span={3}>
        {run.log_url ? (
          <Text>
            <a href={run.log_url} target="_blank" rel="noreferrer">
              {run.log_url}
            </a>
          </Text>
        ) : (
          ''
        )}
      </Descriptions.Item>
      <Descriptions.Item label={t('transfer', { ns: 'transfer' })} span={3}>
        <Link to={`/transfers/${transfer.id}`}>{transfer.name}</Link>
      </Descriptions.Item>
    </Descriptions>
  );
};
