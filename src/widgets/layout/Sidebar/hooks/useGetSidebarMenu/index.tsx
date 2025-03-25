import { MergeCellsOutlined, OrderedListOutlined, PullRequestOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const useGetSidebarMenu = () => {
  const { t } = useTranslation();

  return useMemo(() => {
    const items: MenuProps['items'] = [
      {
        key: 'connections',
        label: <Link to="/connections">{t('connections', { ns: 'connection' })}</Link>,
        icon: <MergeCellsOutlined />,
      },
      {
        key: 'transfers',
        label: <Link to="/transfers">{t('transfers', { ns: 'transfer' })}</Link>,
        icon: <PullRequestOutlined />,
      },
      {
        key: 'queues',
        label: <Link to="/queues">{t('queues', { ns: 'queue' })}</Link>,
        icon: <OrderedListOutlined />,
      },
      {
        key: 'groups',
        label: <Link to="/groups">{t('groups', { ns: 'group' })}</Link>,
        icon: <UsergroupAddOutlined />,
      },
    ];

    return items;
  }, [t]);
};
