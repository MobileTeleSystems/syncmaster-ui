import React from 'react';
import { PaginationResponse } from '@shared/types';
import { TableColumns } from '@shared/ui';
import { Link } from 'react-router-dom';
import { Transfer } from '@entities/transfer';

export const TRANSFER_LIST_COLUMNS: TableColumns<PaginationResponse<Transfer>> = [
  {
    title: 'Id',
    dataIndex: 'id',
    width: 150,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    render: (name, record) => <Link to={`/transfers/${record.id}`}>{name}</Link>,
    width: 400,
  },
  {
    title: 'Description',
    dataIndex: 'description',
  },
];
