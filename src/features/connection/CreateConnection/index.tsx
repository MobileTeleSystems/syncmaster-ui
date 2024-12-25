import React from 'react';
import { ControlButtons, FormCurrentGroupDescription, ManagedForm } from '@shared/ui';
import { Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Connection, ConnectionQueryKey, connectionService, ConnectionTypeForm } from '@entities/connection';

import { CreateConnectionForm, CreateConnectionProps } from './types';

export const CreateConnection = ({ group }: CreateConnectionProps) => {
  const navigate = useNavigate();

  const handleCreateConnection = (values: CreateConnectionForm) => {
    return connectionService.createConnection(Object.assign({ group_id: group.id, ...values }));
  };

  const onSuccess = (response: Connection) => {
    navigate(`/connections/${response.id}`);
  };

  const onCancel = () => {
    navigate('/connections');
  };

  return (
    <ManagedForm<CreateConnectionForm, Connection>
      mutationFunction={handleCreateConnection}
      onSuccess={onSuccess}
      successMessage="Connection was created successfully"
      keysInvalidateQueries={[[{ queryKey: [ConnectionQueryKey.GET_CONNECTIONS, group.id] }]]}
    >
      <FormCurrentGroupDescription groupName={group.name} />
      <Form.Item label="Name" name="name" rules={[{ required: true }]}>
        <Input size="large" />
      </Form.Item>
      <Form.Item label="Description" name="description" rules={[{ required: true }]}>
        <Input size="large" />
      </Form.Item>

      <ConnectionTypeForm />

      <ControlButtons onCancel={onCancel} />
    </ManagedForm>
  );
};
