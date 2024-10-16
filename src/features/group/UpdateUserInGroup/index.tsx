import React from 'react';
import { ControlButtons, ManagedForm, ManagedSelect } from '@shared/ui';
import { Form, Select } from 'antd';
import { GroupQueryKey, groupService, USER_ROLE_IN_GROUP_SELECT_OPTIONS } from '@entities/group';
import { UserQueryKey, userService } from '@entities/user';

import { UpdateUserInGroupForm, UpdateUserInGroupProps } from './types';
import { getUpdateUserInGroupInitialValues } from './utils';

export const UpdateUserInGroup = ({ groupId, user: userData, onSuccess, onCancel }: UpdateUserInGroupProps) => {
  const handleUpdateUserInGroup = (values: UpdateUserInGroupForm) => {
    return groupService.updateUserInGroup({ ...values, groupId });
  };

  return (
    <ManagedForm<UpdateUserInGroupForm, null>
      initialValues={getUpdateUserInGroupInitialValues(userData)}
      mutationFunction={handleUpdateUserInGroup}
      onSuccess={onSuccess}
      keysInvalidateQueries={[[{ queryKey: [GroupQueryKey.GET_USERS_IN_GROUP, groupId] }]]}
    >
      <Form.Item label="User" name="userId" rules={[{ required: true }]}>
        <ManagedSelect
          size="large"
          queryKey={[UserQueryKey.GET_USERS]}
          queryFunction={userService.getUsers}
          renderOptionValue={(user) => user.id}
          renderOptionLabel={(user) => user.username}
        />
      </Form.Item>

      <Form.Item label="Role" name="role" rules={[{ required: true }]}>
        <Select size="large" options={USER_ROLE_IN_GROUP_SELECT_OPTIONS} />
      </Form.Item>

      <ControlButtons onCancel={onCancel} />
    </ManagedForm>
  );
};
