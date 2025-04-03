import React from 'react';
import { ControlButtons, Fieldset, FormCurrentGroupDescription, ManagedForm } from '@shared/ui';
import { Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Connection, ConnectionQueryKey, connectionService, ConnectionTypeForm } from '@entities/connection';
import { useTranslation } from 'react-i18next';

import { UpdateConnectionForm, UpdateConnectionProps } from './types';

export const UpdateConnection = ({ connection, group }: UpdateConnectionProps) => {
  const { id: connectionId, group_id, ...connectionInitialValues } = connection;
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleUpdateConnection = (values: UpdateConnectionForm) => {
    return connectionService.updateConnection(Object.assign({ id: connectionId, group_id, ...values }));
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
      successMessage={t('updateConnectionSuccess', { ns: 'connection' })}
      keysInvalidateQueries={[
        [{ queryKey: [ConnectionQueryKey.GET_CONNECTIONS, group.id] }],
        [{ queryKey: [ConnectionQueryKey.GET_CONNECTION, connectionId] }],
      ]}
    >
      <Fieldset title={t('mainInfo')}>
        <FormCurrentGroupDescription groupName={group.name} />

        <Form.Item label={t('name')} name="name" rules={[{ required: true }]}>
          <Input size="large" />
        </Form.Item>

        <Form.Item label={t('description')} name="description" initialValue={""}>
          <Input size="large" />
        </Form.Item>
      </Fieldset>

      <ConnectionTypeForm initialType={connectionInitialValues.type} isRequiredSensitiveFields={false} />

      <ControlButtons onCancel={onCancel} />
    </ManagedForm>
  );
};
