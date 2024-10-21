import React from 'react';
import { ControlButtons, ManagedForm } from '@shared/ui';
import { Group, GroupQueryKey, groupService } from '@entities/group';
import { Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

export const CreateGroup = () => {
  const navigate = useNavigate();

  const onSuccess = (response: Group) => {
    navigate(`/groups/${response.id}`);
  };

  const onCancel = () => {
    navigate('/groups');
  };

  return (
    <ManagedForm
      mutationFunction={groupService.createGroup}
      onSuccess={onSuccess}
      keysInvalidateQueries={[[{ queryKey: [GroupQueryKey.GET_GROUPS] }]]}
    >
      <Form.Item label="Name" name="name" rules={[{ required: true }]}>
        <Input size="large" />
      </Form.Item>

      <Form.Item label="Description" name="description">
        <Input size="large" />
      </Form.Item>

      <ControlButtons onCancel={onCancel} />
    </ManagedForm>
  );
};
