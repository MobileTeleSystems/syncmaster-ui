import React, { PropsWithChildren } from 'react';
import { Typography } from 'antd';

import { FieldsetProps } from './types';
import classes from './styles.module.less';

const { Title } = Typography;

export const Fieldset = ({ title, children, headerSlot, hasShowContent = true }: PropsWithChildren<FieldsetProps>) => {
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Title level={4}>{title}</Title>
        {headerSlot}
      </div>
      {hasShowContent && <div className={classes.content}>{children}</div>}
    </div>
  );
};
