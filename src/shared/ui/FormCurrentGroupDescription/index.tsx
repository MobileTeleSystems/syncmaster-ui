import React, { memo } from 'react';
import { Typography } from 'antd';

import classes from './styles.module.less';
import { FormCurrentGroupDescriptionProps } from './types';

const { Text } = Typography;

export const FormCurrentGroupDescription = memo(({ groupName }: FormCurrentGroupDescriptionProps) => {
  return (
    <div className={classes.root}>
      <Text className={classes.text}>
        Group: <b>«{groupName}»</b>
      </Text>
    </div>
  );
});
