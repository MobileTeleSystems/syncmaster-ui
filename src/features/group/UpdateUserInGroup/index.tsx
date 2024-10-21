import React from 'react';
import { ControlButtons, ManagedForm } from '@shared/ui';
import { Form, Select, Typography } from 'antd';
import { GroupQueryKey, groupService, USER_ROLE_IN_GROUP_SELECT_OPTIONS } from '@entities/group';

import { UpdateUserInGroupForm, UpdateUserInGroupProps } from './types';
import { getUpdateUserInGroupInitialValues } from './utils';
import classes from './styles.module.less';

const { Text } = Typography;

export const UpdateUserInGroup = ({ groupId, user, onSuccess, onCancel }: UpdateUserInGroupProps) => {
  const handleUpdateUserInGroup = (values: UpdateUserInGroupForm) => {
    return groupService.updateUserInGroup({ ...values, groupId, userId: user.id });
  };

  return (
    <ManagedForm<UpdateUserInGroupForm, null>
      initialValues={getUpdateUserInGroupInitialValues(user)}
      mutationFunction={handleUpdateUserInGroup}
      onSuccess={onSuccess}
      keysInvalidateQueries={[[{ queryKey: [GroupQueryKey.GET_USERS_IN_GROUP, groupId] }]]}
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
