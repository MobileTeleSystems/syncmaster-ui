import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import classes from './styles.module.less';
import { UpdateGroupButtonProps } from './types';

export const UpdateGroupButton = ({ groupId }: UpdateGroupButtonProps) => {
  return (
    <Button className={classes.button} type="primary" size="large">
      <Link to={`/groups/${groupId}/update`}>Update Group</Link>
    </Button>
  );
};
