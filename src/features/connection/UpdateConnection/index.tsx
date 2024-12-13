import React from 'react';
import { ControlButtons, FormCurrentGroupDescription, ManagedForm } from '@shared/ui';
import { Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Connection, ConnectionQueryKey, connectionService, ConnectionTypeForm } from '@entities/connection';

import { adaptConnectionTypeRequest } from '../utils';

import { UpdateConnectionForm, UpdateConnectionProps } from './types';
import { getUpdateConnectionInitialValues } from './utils';

export const UpdateConnection = ({ connection, group }: UpdateConnectionProps) => {
  const navigate = useNavigate();

  const handleUpdateConnection = ({ name, description, ...values }: UpdateConnectionForm) => {
    return connectionService.updateConnection(
      Object.assign({ id: connection.id, name, description }, adaptConnectionTypeRequest(values)),
    );
  };

  const onSuccess = (response: Connection) => {
    navigate(`/connections/${response.id}`);
  };

  const onCancel = () => {
    navigate('/connections');
  };

  return (
    <ManagedForm<UpdateConnectionForm, Connection>
      mutationFunction={handleUpdateConnection}
      initialValues={getUpdateConnectionInitialValues(connection)}
      onSuccess={onSuccess}
      successMessage="Connection was updated successfully"
      keysInvalidateQueries={[
        [{ queryKey: [ConnectionQueryKey.GET_CONNECTIONS, group.id] }],
        [{ queryKey: [ConnectionQueryKey.GET_CONNECTION, connection.id] }],
      ]}
    >
      <FormCurrentGroupDescription groupName={group.name} />

      <Form.Item label="Name" name="name" rules={[{ required: true }]}>
        <Input size="large" />
      </Form.Item>

      <Form.Item label="Description" name="description" rules={[{ required: true }]}>
        <Input size="large" />
      </Form.Item>

      <ConnectionTypeForm initialType={connection.auth_data.type} isRequiredSensitiveFields={false} />

      <ControlButtons onCancel={onCancel} />
    </ManagedForm>
  );
};
