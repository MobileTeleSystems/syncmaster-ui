import React from 'react';
import { MenuProps } from 'antd';
import {
  MergeCellsOutlined,
  OrderedListOutlined,
  PullRequestOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const SIDEBAR_ITEMS: MenuProps['items'] = [
  {
    key: 'users',
    label: <Link to="/users">Users</Link>,
    icon: <UserOutlined />,
  },
  {
    key: 'groups',
    label: <Link to="/groups">Groups</Link>,
    icon: <UsergroupAddOutlined />,
  },
  {
    key: 'queues',
    label: <Link to="/queues">Queues</Link>,
    icon: <OrderedListOutlined />,
  },
  {
    key: 'connections',
    label: <Link to="/connections">Connections</Link>,
    icon: <MergeCellsOutlined />,
  },
  {
    key: 'transfers',
    label: <Link to="/transfers">Transfers</Link>,
    icon: <PullRequestOutlined />,
  },
];
