import React from 'react';
import { PaginationResponse } from '@shared/types';
import { TableColumns } from '@shared/ui';
import { Link } from 'react-router-dom';
import { Group } from '@entities/group';

export const GROUP_LIST_COLUMNS: TableColumns<PaginationResponse<Group>> = [
  {
    title: 'Id',
    dataIndex: 'id',
    width: 250,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    render: (name, record) => <Link to={`/groups/${record.id}`}>{name}</Link>,
  },
  {
    title: 'Description',
    dataIndex: 'description',
  },
];
