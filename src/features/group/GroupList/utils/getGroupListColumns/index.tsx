import { Group } from '@entities/group';
import { PaginationResponse } from '@shared/types';
import { TableColumns } from '@shared/ui';
import { TFunction } from 'i18next';
import React from 'react';
import { Link } from 'react-router-dom';

export const getGroupListColumns = (t: TFunction) => {
  const columns: TableColumns<PaginationResponse<Group>> = [
    {
      title: t('id'),
      dataIndex: 'id',
      render: (name, record) => record.data.id,
      width: 150,
    },
    {
      title: t('name'),
      dataIndex: 'name',
      render: (name, record) => <Link to={`/groups/${record.data.id}`}>{record.data.name}</Link>,
      width: 400,
    },
    {
      title: t('description'),
      dataIndex: 'description',
      render: (name, record) => record.data.description,
    },
  ];

  return columns;
};
