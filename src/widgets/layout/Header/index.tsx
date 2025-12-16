import { Typography } from 'antd';
import React from 'react';
import { Avatar, Layout } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useAuth } from '@entities/auth';
import { SelectGroup } from '@features/group';
import { ChangeLanguageSelect } from '@shared/config';

import classes from './styles.module.less';
import { LogoutButton } from './components';
import { Logo } from './assets';

const { Header: AntdHeader } = Layout;
const { Text } = Typography;

export const Header = () => {
  const { username } = useAuth();

  return (
    <AntdHeader className={classes.header}>
      <div className={classes.left}>
        <Logo className={classes.logo} />
        <div className={classes.select}>
          <SelectGroup />
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.user}>
          <div className={classes.userInfo}>
            <Avatar className={classes.avatar} size="large" icon={<UserOutlined />} />
            <Text className={classes.username} ellipsis>
              {username}
            </Text>
          </div>
          <LogoutButton />
        </div>
        <ChangeLanguageSelect />
      </div>
    </AntdHeader>
  );
};
