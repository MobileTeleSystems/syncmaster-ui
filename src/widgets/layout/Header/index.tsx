import { Button, Typography } from 'antd';
import React, { memo } from 'react';
import { Avatar, Layout } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { useAuth, useLogout } from '@entities/auth';
import { SelectGroup } from '@features/group';

import classes from './styles.module.less';

const { Header: AntdHeader } = Layout;
const { Text } = Typography;

export const Header = memo(() => {
  const { username } = useAuth();
  const logout = useLogout();

  return (
    <AntdHeader className={classes.header}>
      {/* TODO: [DOP-20026] Need to add logo */}
      <div className={classes.main}>
        <div className={classes.logo} />
        <SelectGroup />
      </div>
      <div className={classes.user}>
        <div className={classes['user-info']}>
          <Avatar className={classes.avatar} size="large" icon={<UserOutlined />} />
          <Text className={classes.username} ellipsis>
            {username}
          </Text>
        </div>
        <Button size="middle" icon={<LogoutOutlined />} onClick={logout} />
      </div>
    </AntdHeader>
  );
});
