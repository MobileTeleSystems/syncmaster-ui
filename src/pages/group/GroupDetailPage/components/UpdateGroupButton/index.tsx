import React from 'react';
import { ActionButton } from '@shared/ui';

import * as classes from './styles.module.less';
import { UpdateGroupButtonProps } from './types';

export const UpdateGroupButton = ({ groupId }: UpdateGroupButtonProps) => {
  return <ActionButton className={classes.button} actionType="edit" to={`/groups/${groupId}/update`} />;
};
