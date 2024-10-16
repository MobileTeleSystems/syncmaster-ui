import React from 'react';
import { Layout, Menu } from 'antd';
import { useLocation } from 'react-router-dom';

import classes from './styles.module.less';
import { SIDEBAR_ITEMS } from './constants';

const { Sider } = Layout;

export const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <Sider width={250}>
      <Menu
        className={classes.menu}
        selectedKeys={[pathname.split('/').filter(Boolean)[0]]}
        mode="inline"
        items={SIDEBAR_ITEMS}
      />
    </Sider>
  );
};
