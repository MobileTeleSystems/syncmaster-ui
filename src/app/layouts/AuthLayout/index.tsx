import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import * as classes from './styles.module.less';

const { Content } = Layout;

export const AuthLayout = () => {
  return (
    <Layout className={classes.layout}>
      <Content className={classes.layout__content}>
        <Outlet />
      </Content>
    </Layout>
  );
};
