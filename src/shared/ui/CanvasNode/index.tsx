import React, { memo, PropsWithChildren } from 'react';
import { Typography } from 'antd';
import clsx from 'clsx';

import { CanvasNodeProps } from './types';
import * as classes from './styles.module.less';

const { Title } = Typography;

export const CanvasNode = memo(({ title, icon, children, className }: PropsWithChildren<CanvasNodeProps>) => {
  return (
    <div className={clsx(classes.root, className)}>
      <div className={classes.icon}>{icon}</div>
      <Title className={classes.title} level={4}>
        {title}
      </Title>
      {children}
    </div>
  );
});
