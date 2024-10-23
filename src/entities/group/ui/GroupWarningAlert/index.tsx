import React from 'react';
import { Alert } from 'antd';

import { GroupWarningAlertProps } from './types';
import classes from './styles.module.less';

export const GroupWarningAlert = ({ description }: GroupWarningAlertProps) => {
  return <Alert className={classes.alert} message="Warning" description={description} type="warning" showIcon />;
};
