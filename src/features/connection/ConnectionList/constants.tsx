import React from 'react';
import { PaginationResponse } from '@shared/types';
import { TableColumns } from '@shared/ui';
import { Link } from 'react-router-dom';
import { Connection, CONNECTION_TYPE_NAMES } from '@entities/connection';

export const CONNECTION_LIST_COLUMNS: TableColumns<PaginationResponse<Connection>> = [
  {
    title: 'Id',
    dataIndex: 'id',
    width: 150,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    render: (name, record) => <Link to={`/connections/${record.id}`}>{name}</Link>,
    width: 400,
  },
  {
    title: 'Type',
    dataIndex: 'connection_data',
    render: (data, record) => CONNECTION_TYPE_NAMES[record.type],
    width: 150,
  },
  {
    title: 'Description',
    dataIndex: 'description',
  },
];
