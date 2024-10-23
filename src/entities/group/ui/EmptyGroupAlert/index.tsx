import React from 'react';
import { Alert } from 'antd';

import { EmptyGroupAlertProps } from './types';
import classes from './styles.module.less';

export const EmptyGroupAlert = ({ description }: EmptyGroupAlertProps) => {
  return <Alert className={classes.alert} message="Warning" description={description} type="warning" showIcon />;
};
