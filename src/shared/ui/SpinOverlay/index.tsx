import { Spin } from 'antd';
import React from 'react';

import classes from './styles.module.less';

export const SpinOverlay = () => {
  return (
    <div className={classes.loader}>
      <Spin size="large" />
    </div>
  );
};
