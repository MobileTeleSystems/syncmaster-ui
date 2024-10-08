import { Button, Typography } from 'antd';
import React, { memo } from 'react';
import { Avatar, Layout } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { useAuth, useLogout } from '@entities/auth';

import classes from './styles.module.less';

const { Header: AntdHeader } = Layout;
const { Text } = Typography;

export const Header = memo(() => {
  const { username } = useAuth();
  const logout = useLogout();

  return (
    <AntdHeader className={classes.header}>
      {/* TODO: [DOP-20245] Need to add logo and group select in task [DOP-20026] */}
      <div className="logo" />
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
