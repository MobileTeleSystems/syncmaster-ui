import React from 'react';
import { Descriptions } from 'antd';
import { Link } from 'react-router-dom';
import { RunStatusBadge } from '@entities/run';
import { Typography } from 'antd';

const { Text } = Typography;

import { RunDetailInfoProps } from './types';

export const RunDetailInfo = ({ run, transfer, ...props }: RunDetailInfoProps) => {
  return (
    <Descriptions title="Run info" bordered {...props}>
      <Descriptions.Item label="Id" span={3}>
        {run.id}
      </Descriptions.Item>
      <Descriptions.Item label="Status" span={3}>
        <RunStatusBadge status={run.status} />
      </Descriptions.Item>
      <Descriptions.Item label="Started at" span={3}>
        {/* //TODO: [DOP-20067] Rewrite on dayjs when "started_at" field will have not null value */}
        {run.started_at || ''}
      </Descriptions.Item>
      <Descriptions.Item label="Ended at" span={3}>
        {/* //TODO: [DOP-20067] Rewrite on dayjs when "ended_at" field will have not null value */}
        {run.ended_at || ''}
      </Descriptions.Item>
      <Descriptions.Item label="Log url" span={3}>
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
      <Descriptions.Item label="Transfer" span={3}>
        <Link to={`/transfers/${transfer.id}`}>{transfer.name}</Link>
      </Descriptions.Item>
    </Descriptions>
  );
};
