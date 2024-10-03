import React, { memo, PropsWithChildren } from 'react';
import { Layout } from 'antd';

import classes from './styles.module.less';

const { Content } = Layout;

export const ErrorLayout = memo(({ children }: PropsWithChildren) => {
  return (
    <Layout className={classes.layout}>
      <Content className={classes.layout__content}>{children}</Content>
    </Layout>
  );
});
