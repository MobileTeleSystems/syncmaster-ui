import React from 'react';
import { ControlButtons, ManagedForm } from '@shared/ui';
import { Form, Select, Typography } from 'antd';
import { GroupQueryKey, groupService, USER_ROLE_IN_GROUP_SELECT_OPTIONS } from '@entities/group';

import { UpdateGroupUserForm, UpdateGroupUserProps } from './types';
import { getUpdateGroupUserInitialValues } from './utils';
import classes from './styles.module.less';

const { Text } = Typography;

export const UpdateGroupUser = ({ groupId, user, onSuccess, onCancel }: UpdateGroupUserProps) => {
  const handleUpdateGroupUser = (values: UpdateGroupUserForm) => {
    return groupService.updateGroupUser({ ...values, groupId, userId: user.id });
  };

  return (
    <ManagedForm<UpdateGroupUserForm, null>
      initialValues={getUpdateGroupUserInitialValues(user)}
      mutationFunction={handleUpdateGroupUser}
      onSuccess={onSuccess}
      keysInvalidateQueries={[[{ queryKey: [GroupQueryKey.GET_GROUP_USERS, groupId] }]]}
    >
      <div className={classes.formMain}>
        <Text className={classes.username}>
          Username: <b>«{user.username}»</b>
        </Text>

        <Form.Item label="Role" name="role" rules={[{ required: true }]}>
          <Select size="large" options={USER_ROLE_IN_GROUP_SELECT_OPTIONS} />
        </Form.Item>
      </div>

      <ControlButtons onCancel={onCancel} />
    </ManagedForm>
  );
};
