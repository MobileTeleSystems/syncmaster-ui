import React from 'react';
import { PaginationResponse } from '@shared/types';
import { TableColumns } from '@shared/ui';
import { Run, RunStatusBadge } from '@entities/run';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Text } = Typography;

export const RUN_LIST_COLUMNS: TableColumns<PaginationResponse<Run>> = [
  {
    title: 'Id',
    dataIndex: 'id',
    render: (id, record) => <Link to={`/transfers/runs/${record.id}`}>{id}</Link>,
    width: 150,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: (value, record) => <RunStatusBadge status={record.status} />,
    width: 150,
  },
  {
    title: 'Started at',
    dataIndex: 'started_at',
    //TODO: [DOP-20067] Rewrite on dayjs when "started_at" field will have not null value
    width: 150,
  },
  {
    title: 'Ended at',
    dataIndex: 'ended_at',
    //TODO: [DOP-20067] Rewrite on dayjs when "ended_at" field will have not null value
    width: 150,
  },
  {
    title: 'Log url',
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
