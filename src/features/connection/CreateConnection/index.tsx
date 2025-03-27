import React from 'react';
import { ControlButtons, Fieldset, FormCurrentGroupDescription, ManagedForm } from '@shared/ui';
import { Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Connection, ConnectionQueryKey, connectionService, ConnectionTypeForm } from '@entities/connection';
import { useTranslation } from 'react-i18next';

import { CreateConnectionForm, CreateConnectionProps } from './types';

export const CreateConnection = ({ group }: CreateConnectionProps) => {
  const { t } = useTranslation();
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
      successMessage={t('createConnectionSuccess', { ns: 'connection' })}
      keysInvalidateQueries={[[{ queryKey: [ConnectionQueryKey.GET_CONNECTIONS, group.id] }]]}
    >
      <Fieldset title={t('mainInfo')}>
        <FormCurrentGroupDescription groupName={group.name} />
        <Form.Item label={t('name')} name="name" rules={[{ required: true }]}>
          <Input size="large" />
        </Form.Item>
        <Form.Item label={t('description')} name="description" rules={[{ required: true }]}>
          <Input size="large" />
        </Form.Item>
      </Fieldset>

      <ConnectionTypeForm />

      <ControlButtons onCancel={onCancel} />
    </ManagedForm>
  );
};
