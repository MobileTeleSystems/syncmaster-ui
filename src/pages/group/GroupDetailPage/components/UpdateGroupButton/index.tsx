import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import classes from './styles.module.less';
import { UpdateGroupButtonProps } from './types';

export const UpdateGroupButton = ({ groupId }: UpdateGroupButtonProps) => {
  const { t } = useTranslation('group');

  return (
    <Button className={classes.button} type="primary" size="large">
      <Link to={`/groups/${groupId}/update`}>{t('updateGroup')}</Link>
    </Button>
  );
};
