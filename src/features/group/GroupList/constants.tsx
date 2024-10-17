import React from 'react';
import { PaginationResponse } from '@shared/types';
import { TableColumns } from '@shared/ui';
import { Link } from 'react-router-dom';
import { GroupFromList } from '@entities/group';

export const GROUP_LIST_COLUMNS: TableColumns<PaginationResponse<GroupFromList>> = [
  {
    title: 'Id',
    dataIndex: 'id',
    render: (name, record) => record.data.id,
    width: 250,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    render: (name, record) => <Link to={`/groups/${record.data.id}`}>{record.data.name}</Link>,
    width: 500,
  },
  {
    title: 'Description',
    dataIndex: 'description',
    render: (name, record) => record.data.description,
  },
];
