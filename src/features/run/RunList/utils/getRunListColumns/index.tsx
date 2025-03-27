import { Run, RunStatusBadge } from '@entities/run';
import { PaginationResponse } from '@shared/types';
import { TableColumns } from '@shared/ui';
import dayjs from 'dayjs';
import { TFunction } from 'i18next';
import { Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const { Text } = Typography;

export const getRunListColumns = (t: TFunction<'run'>) => {
  const columns: TableColumns<PaginationResponse<Run>> = [
    {
      title: t('id', { ns: 'shared' }),
      dataIndex: 'id',
      render: (id, record) => <Link to={`/transfers/runs/${record.id}`}>{id}</Link>,
      width: 160,
    },
    {
      title: t('status'),
      dataIndex: 'status',
      render: (value, record) => <RunStatusBadge status={record.status} />,
      width: 150,
    },
    {
      title: t('startedAt'),
      dataIndex: 'started_at',
      render: (value, record) => (record.started_at ? dayjs(record.started_at).format('DD-MM-YYYY HH:mm:ss') : ''),
      width: 180,
    },
    {
      title: t('endedAt'),
      dataIndex: 'ended_at',
      render: (value, record) => (record.ended_at ? dayjs(record.ended_at).format('DD-MM-YYYY HH:mm:ss') : ''),
      width: 180,
    },
    {
      title: t('logUrl'),
      dataIndex: 'log_url',
      render: (value, record) =>
        record.log_url ? (
          <Text>
            <a href={record.log_url} target="_blank" rel="noreferrer">
              {record.log_url}
            </a>
          </Text>
        ) : (
          ''
        ),
    },
  ];

  return columns;
};
