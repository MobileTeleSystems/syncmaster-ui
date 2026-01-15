import React, { PropsWithChildren } from 'react';
import { Layout } from 'antd';

import * as classes from './styles.module.less';

const { Content } = Layout;

export const ErrorLayout = ({ children }: PropsWithChildren) => {
  return (
    <Layout className={classes.layout}>
      <Content className={classes.layout__content}>{children}</Content>
    </Layout>
  );
};
