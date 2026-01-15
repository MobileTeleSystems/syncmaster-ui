import React from 'react';
import { Layout, Menu } from 'antd';
import { useLocation } from 'react-router-dom';

import * as classes from './styles.module.less';
import { useGetSidebarMenu } from './hooks';

const { Sider } = Layout;

export const Sidebar = () => {
  const { pathname } = useLocation();
  const menuItems = useGetSidebarMenu();

  return (
    <Sider width={250}>
      <Menu
        className={classes.menu}
        selectedKeys={[pathname.split('/').filter(Boolean)[0]]}
        mode="inline"
        items={menuItems}
      />
    </Sider>
  );
};
