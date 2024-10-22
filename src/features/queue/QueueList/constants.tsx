import React from 'react';
import { PaginationResponse } from '@shared/types';
import { TableColumns } from '@shared/ui';
import { Link } from 'react-router-dom';
import { Queue } from '@entities/queue';

export const QUEUE_LIST_COLUMNS: TableColumns<PaginationResponse<Queue>> = [
  {
    title: 'Id',
    dataIndex: 'id',
    width: 150,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    render: (name, record) => <Link to={`/queues/${record.id}`}>{name}</Link>,
    width: 400,
  },
  {
    title: 'Description',
    dataIndex: 'description',
  },
];
