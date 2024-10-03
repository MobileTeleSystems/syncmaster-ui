import React, { memo } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { Header, Sidebar } from '@widgets/layout';

import classes from './styles.module.less';

const { Content } = Layout;

export const PrivateLayout = memo(() => {
  return (
    <Layout className={classes.layout}>
      <Header />
      <Layout>
        <Sidebar />
        <Layout>
          <Content className={classes.layout__content}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
});
