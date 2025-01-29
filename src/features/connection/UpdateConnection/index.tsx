import React from 'react';
import { ControlButtons, Fieldset, FormCurrentGroupDescription, ManagedForm } from '@shared/ui';
import { Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Connection, ConnectionQueryKey, connectionService, ConnectionTypeForm } from '@entities/connection';

import { UpdateConnectionForm, UpdateConnectionProps } from './types';

export const UpdateConnection = ({ connection, group }: UpdateConnectionProps) => {
  const { id: connectionId, group_id, ...connectionInitialValues } = connection;
  const navigate = useNavigate();

  const handleUpdateConnection = (values: UpdateConnectionForm) => {
    return connectionService.updateConnection(Object.assign({ id: connectionId, ...values }));
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
      initialValues={connectionInitialValues}
      onSuccess={onSuccess}
      successMessage="Connection was updated successfully"
      keysInvalidateQueries={[
        [{ queryKey: [ConnectionQueryKey.GET_CONNECTIONS, group.id] }],
        [{ queryKey: [ConnectionQueryKey.GET_CONNECTION, connectionId] }],
      ]}
    >
      <Fieldset title="Main info">
        <FormCurrentGroupDescription groupName={group.name} />

        <Form.Item label="Name" name="name" rules={[{ required: true }]}>
          <Input size="large" />
        </Form.Item>

        <Form.Item label="Description" name="description" rules={[{ required: true }]}>
          <Input size="large" />
        </Form.Item>
      </Fieldset>

      <ConnectionTypeForm initialType={connectionInitialValues.type} isRequiredSensitiveFields={false} />

      <ControlButtons onCancel={onCancel} />
    </ManagedForm>
  );
};
