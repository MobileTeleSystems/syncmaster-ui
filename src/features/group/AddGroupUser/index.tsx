import React from 'react';
import { ControlButtons, ManagedForm, ManagedSelect, Select } from '@shared/ui';
import { Form } from 'antd';
import { GroupQueryKey, groupService, USER_ROLE_IN_GROUP_SELECT_OPTIONS } from '@entities/group';
import { UserQueryKey, userService } from '@entities/user';

import { AddGroupUserForm, AddGroupUserProps } from './types';

export const AddGroupUser = ({ groupId, onSuccess, onCancel }: AddGroupUserProps) => {
  const handleAddGroupUser = (values: AddGroupUserForm) => {
    return groupService.addGroupUser({ ...values, groupId });
  };

  return (
    <ManagedForm<AddGroupUserForm, null>
      mutationFunction={handleAddGroupUser}
      onSuccess={onSuccess}
      successMessage="User was added to group successfully"
      keysInvalidateQueries={[[{ queryKey: [GroupQueryKey.GET_GROUP_USERS, groupId] }]]}
    >
      <Form.Item label="User" name="userId" rules={[{ required: true }]}>
        <ManagedSelect
          size="large"
          queryKey={[UserQueryKey.GET_USERS]}
          queryFunction={userService.getUsers}
          renderOptionLabel={(user) => user.username}
          renderOptionValue={(user) => user.id}
          detailQueryKey={[UserQueryKey.GET_USER]}
          detailQueryFunction={(value) => userService.getUser({ id: value })}
        />
      </Form.Item>

      <Form.Item label="Role" name="role" rules={[{ required: true }]}>
        <Select size="large" options={USER_ROLE_IN_GROUP_SELECT_OPTIONS} />
      </Form.Item>

      <ControlButtons onCancel={onCancel} />
    </ManagedForm>
  );
};
