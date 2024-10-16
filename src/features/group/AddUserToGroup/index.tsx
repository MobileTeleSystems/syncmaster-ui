import React from 'react';
import { FormButtons, ManagedForm, ManagedSelect } from '@shared/ui';
import { Form, Select } from 'antd';
import { GroupQueryKey, groupService, USER_ROLE_IN_GROUP_SELECT_OPTIONS } from '@entities/group';
import { UserQueryKey, userService } from '@entities/user';

import { AddUserToGroupForm, AddUserToGroupProps } from './types';

export const AddUserToGroup = ({ groupId, onSuccess, onCancel }: AddUserToGroupProps) => {
  const handleAddUserToGroup = (values: AddUserToGroupForm) => {
    return groupService.addUserToGroup({ ...values, groupId });
  };

  return (
    <ManagedForm<AddUserToGroupForm, null>
      mutationFunction={handleAddUserToGroup}
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

      <FormButtons onCancel={onCancel} />
    </ManagedForm>
  );
};
