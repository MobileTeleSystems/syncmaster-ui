import React, { memo } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import classes from './styles.module.less';

const { Content } = Layout;

export const AuthLayout = memo(() => {
  return (
    <Layout className={classes.layout}>
      <Content className={classes.layout__content}>
        <Outlet />
      </Content>
    </Layout>
  );
});
