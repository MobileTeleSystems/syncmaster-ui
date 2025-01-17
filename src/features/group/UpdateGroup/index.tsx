import React from 'react';
import { ControlButtons, ManagedForm, ManagedSelect } from '@shared/ui';
import { GroupData, GroupQueryKey, groupService } from '@entities/group';
import { Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { UserQueryKey, userService } from '@entities/user';

import { UpdateGroupForm, UpdateGroupProps } from './types';
import { getUpdateGroupInitialValues } from './utils';

export const UpdateGroup = ({ group }: UpdateGroupProps) => {
  const navigate = useNavigate();

  const handleUpdateGroup = (values: UpdateGroupForm) => {
    return groupService.updateGroup({ ...values, id: group.id });
  };

  const onSuccess = (response: GroupData) => {
    navigate(`/groups/${response.id}`);
  };

  const onCancel = () => {
    navigate('/groups');
  };

  return (
    <ManagedForm<UpdateGroupForm, GroupData>
      mutationFunction={handleUpdateGroup}
      initialValues={getUpdateGroupInitialValues(group)}
      onSuccess={onSuccess}
      successMessage="Group was updated successfully"
      keysInvalidateQueries={[
        [{ queryKey: [GroupQueryKey.GET_GROUPS] }],
        [{ queryKey: [GroupQueryKey.GET_GROUP, group.id] }],
      ]}
    >
      <Form.Item label="Name" name="name" rules={[{ required: true }]}>
        <Input size="large" />
      </Form.Item>

      <Form.Item label="Description" name="description" rules={[{ required: true }]}>
        <Input size="large" />
      </Form.Item>

      <Form.Item label="Owner" name="owner_id" rules={[{ required: true }]}>
        <ManagedSelect
          size="large"
          queryKey={[UserQueryKey.GET_USERS]}
          queryFunction={userService.getUsers}
          renderOptionValue={(user) => user.id}
          renderOptionLabel={(user) => user.username}
          detailQueryKey={[UserQueryKey.GET_USER]}
          detailQueryFunction={(value) => userService.getUser({ id: value })}
          //TODO: [DOP-20030] Need to delete prop "disabled" when the backend leaves the user with access to the group, even after changing the owner
          disabled
        />
      </Form.Item>

      <ControlButtons onCancel={onCancel} />
    </ManagedForm>
  );
};
