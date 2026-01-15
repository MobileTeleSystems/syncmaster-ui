import React from 'react';
import { Alert } from 'antd';
import { useTranslation } from 'react-i18next';

import { GroupWarningAlertProps } from './types';
import * as classes from './styles.module.less';

export const GroupWarningAlert = ({ description }: GroupWarningAlertProps) => {
  const { t } = useTranslation('group');

  return <Alert className={classes.alert} message={t('warning')} description={description} type="warning" showIcon />;
};
