import { Typography } from 'antd';
import React from 'react';
import { Avatar, Layout } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useAuth } from '@entities/auth';
import { SelectGroup } from '@features/group';

import classes from './styles.module.less';
import { LogoutButton } from './components';

const { Header: AntdHeader } = Layout;
const { Text } = Typography;

export const Header = () => {
  const { username } = useAuth();

  return (
    <AntdHeader className={classes.header}>
      {/* TODO: [DOP-20026] Need to add logo */}
      <div className={classes.main}>
        <div className={classes.logo} />
        <div className={classes.select}>
          <SelectGroup />
        </div>
      </div>
      <div className={classes.user}>
        <div className={classes['user-info']}>
          <Avatar className={classes.avatar} size="large" icon={<UserOutlined />} />
          <Text className={classes.username} ellipsis>
            {username}
          </Text>
        </div>
        <LogoutButton />
      </div>
    </AntdHeader>
  );
};
