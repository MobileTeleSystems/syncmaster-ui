import { Transfer } from '@entities/transfer';
import { PaginationResponse } from '@shared/types';
import { TableColumns } from '@shared/ui';
import { TFunction } from 'i18next';
import React from 'react';
import { Link } from 'react-router-dom';

export const getTransferListColumns = (t: TFunction<'shared'>) => {
  const columns: TableColumns<PaginationResponse<Transfer>> = [
    {
      title: t('id'),
      dataIndex: 'id',
      width: 160,
    },
    {
      title: t('name'),
      dataIndex: 'name',
      render: (name, record) => <Link to={`/transfers/${record.id}`}>{name}</Link>,
      width: 400,
    },
    {
      title: t('description'),
      dataIndex: 'description',
    },
  ];

  return columns;
};
