import React from 'react';
import { ControlButtons, Fieldset, ManagedForm } from '@shared/ui';
import { GroupData, GroupQueryKey, groupService } from '@entities/group';
import { Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

export const CreateGroup = () => {
  const navigate = useNavigate();

  const onSuccess = (response: GroupData) => {
    navigate(`/groups/${response.id}`);
  };

  const onCancel = () => {
    navigate('/groups');
  };

  return (
    <ManagedForm
      mutationFunction={groupService.createGroup}
      onSuccess={onSuccess}
      successMessage="Group was created successfully"
      keysInvalidateQueries={[[{ queryKey: [GroupQueryKey.GET_GROUPS] }]]}
    >
      <Fieldset title="Main info">
        <Form.Item label="Name" name="name" rules={[{ required: true }]}>
          <Input size="large" />
        </Form.Item>

        <Form.Item label="Description" name="description" rules={[{ required: true }]}>
          <Input size="large" />
        </Form.Item>
      </Fieldset>

      <ControlButtons onCancel={onCancel} />
    </ManagedForm>
  );
};
