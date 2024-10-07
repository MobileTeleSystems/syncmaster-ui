import React, { memo, Suspense } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { Header, Sidebar } from '@widgets/layout';
import { SpinOverlay } from '@shared/ui';

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
            <Suspense fallback={<SpinOverlay />}>
              <Outlet />
            </Suspense>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
});
