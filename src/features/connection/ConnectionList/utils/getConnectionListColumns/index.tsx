import { Connection, CONNECTION_TYPE_NAMES } from '@entities/connection';
import { PaginationResponse } from '@shared/types';
import { TableColumns } from '@shared/ui';
import { TFunction } from 'i18next';
import React from 'react';
import { Link } from 'react-router-dom';

export const getConnectionListColumns = (t: TFunction<'shared'>) => {
  const columns: TableColumns<PaginationResponse<Connection>> = [
    {
      title: t('id'),
      dataIndex: 'id',
      width: 150,
    },
    {
      title: t('name'),
      dataIndex: 'name',
      render: (name, record) => <Link to={`/connections/${record.id}`}>{name}</Link>,
      width: 400,
    },
    {
      title: t('type'),
      dataIndex: 'connection_data',
      render: (data, record) => CONNECTION_TYPE_NAMES[record.type],
      width: 150,
    },
    {
      title: t('description'),
      dataIndex: 'description',
    },
  ];

  return columns;
};
