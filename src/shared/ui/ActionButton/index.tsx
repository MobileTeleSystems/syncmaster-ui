import React from 'react';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { ActionButtonProps } from './types';
import { BUTTON_SETTINGS } from './constants';
import classes from './styles.module.less';

export const ActionButton = ({ actionType, to, className, children, ...props }: ActionButtonProps) => {
  const { t } = useTranslation();

  const { displayText, ...buttonSettings } = BUTTON_SETTINGS[actionType];

  const button = (
    <Button className={classes.button} type="primary" size="large" {...buttonSettings} {...props}>
      {children || t(displayText)}
    </Button>
  );

  if (to) {
    return (
      <Link className={className} to={to}>
        {button}
      </Link>
    );
  }

  return button;
};
