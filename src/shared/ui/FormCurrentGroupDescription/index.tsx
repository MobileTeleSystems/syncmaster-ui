import React, { memo } from 'react';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';

import classes from './styles.module.less';
import { FormCurrentGroupDescriptionProps } from './types';

const { Text } = Typography;

export const FormCurrentGroupDescription = memo(({ groupName }: FormCurrentGroupDescriptionProps) => {
  const { t } = useTranslation('group');

  return (
    <div className={classes.root}>
      <Text className={classes.text}>
        {t('group')}: <b>«{groupName}»</b>
      </Text>
    </div>
  );
});
