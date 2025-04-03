import { Queue } from '@entities/queue';
import { PaginationResponse } from '@shared/types';
import { TableColumns } from '@shared/ui';
import { TFunction } from 'i18next';
import React from 'react';
import { Link } from 'react-router-dom';

export const getQueueListColumns = (t: TFunction) => {
  const columns: TableColumns<PaginationResponse<Queue>> = [
    {
      title: t('id'),
      dataIndex: 'id',
      width: 160,
    },
    {
      title: t('name'),
      dataIndex: 'name',
      render: (name, record) => <Link to={`/queues/${record.id}`}>{name}</Link>,
      width: 400,
    },
    {
      title: t('slug'),
      dataIndex: 'slug',
    },
    {
      title: t('description'),
      dataIndex: 'description',
    },
  ];

  return columns;
};
