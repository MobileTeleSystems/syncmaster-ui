import React from 'react';
import { ControlButtons } from '@shared/ui';
import { Typography } from 'antd';
import { useDeleteUserFromGroup } from '@entities/group';
import { WarningOutlined } from '@ant-design/icons';

import classes from './styles.module.less';
import { DeleteUserFromGroupProps } from './types';

const { Text } = Typography;

export const DeleteUserFromGroup = ({ groupId, user, onSuccess, onCancel }: DeleteUserFromGroupProps) => {
  const { mutate: deleteUser, isPending } = useDeleteUserFromGroup({ groupId, userId: user.id });

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
