import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { useAuth } from '@entities/auth';

import classes from './styles.module.less';
import { UpdateGroupButtonProps } from './types';

export const UpdateGroupButton = ({ groupId, ownerId }: UpdateGroupButtonProps) => {
  const { id: currentUserId } = useAuth();

  //TODO: [DOP-20030] It needs to rewrite to "hasAccessByUserRole" util, when role will be in response in groupService.getGroup Api
  if (currentUserId !== ownerId) {
    return null;
  }

  return (
    <Button className={classes.button} type="primary" size="large">
      <Link to={`/groups/${groupId}/update`}>Update group</Link>
    </Button>
  );
};
