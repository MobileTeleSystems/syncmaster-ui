import React from 'react';
import { ControlButtons } from '@shared/ui';
import { Typography } from 'antd';
import { useDeleteGroupUser } from '@entities/group';
import { WarningOutlined } from '@ant-design/icons';

import classes from './styles.module.less';
import { DeleteGroupUserProps } from './types';

const { Text } = Typography;

export const DeleteGroupUser = ({ groupId, user, onSuccess, onCancel }: DeleteGroupUserProps) => {
  const { mutate: deleteUser, isPending } = useDeleteGroupUser({ groupId, userId: user.id });

  const handleSubmit = () => {
    deleteUser(null, { onSuccess });
  };

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <WarningOutlined className={classes.icon} />
        <Text>
          Do you really want to delete user <b>«{user.username}»</b> from the group?
        </Text>
      </div>
      <ControlButtons isLoading={isPending} submitButtonText="Confirm" onSubmit={handleSubmit} onCancel={onCancel} />
    </div>
  );
};
