import React from 'react';
import { Button, Form, Input, Space } from 'antd';
import { useTranslation } from 'react-i18next';

import { useSensitiveFields } from '../../hooks';

import { ConnectionAuthIcebergOAuth2Scope } from './ConnectionAuthIcebergOAuth2Scope';

export const ConnectionAuthIcebergOAuth2ClientCredentials = () => {
  const { t } = useTranslation('connection');
  const { isRequired } = useSensitiveFields();

  return (
    <>
      <Form.Item
        label={t('iceberg.oauth2ClientId')}
        name={['auth_data', 'rest_catalog_oauth2_client_id']}
        rules={[{ required: true }]}
      >
        <Input size="large" />
      </Form.Item>
      <Form.Item
        label={t('iceberg.oauth2ClientSecret')}
        name={['auth_data', 'rest_catalog_oauth2_client_secret']}
        rules={[{ required: isRequired }]}
      >
        <Input.Password size="large" />
      </Form.Item>
      <Form.Item
        label={t('iceberg.oauth2TokenEndpoint')}
        name={['auth_data', 'rest_catalog_oauth2_token_endpoint']}
        rules={[{ type: 'url' }]}
      >
        <Input
          size="large"
          placeholder="http://keycloak.mycompany.com/auth/realms/myrealm/protocol/openid-connect/token"
        />
      </Form.Item>

      <Form.List name={['auth_data', 'rest_catalog_oauth2_scopes']}>
        {(fields, { add, remove }) => (
          <Form.Item label={t('iceberg.oauth2Scopes')}>
            <Button size="large" onClick={() => add()}>
              {t('add', { ns: 'shared' })}
            </Button>
            <Space direction="vertical">
              {fields.map((field) => (
                <ConnectionAuthIcebergOAuth2Scope key={field.key} field={field} remove={remove} />
              ))}
            </Space>
          </Form.Item>
        )}
      </Form.List>

      <Form.Item
        label={t('iceberg.oauth2Resource')}
        name={['auth_data', 'rest_catalog_oauth2_resource']}
        rules={[{ type: 'string', whitespace: true }]}
      >
        <Input size="large" />
      </Form.Item>
      <Form.Item label={t('iceberg.oauth2Audience')} name={['auth_data', 'rest_catalog_oauth2_audience']}>
        <Input size="large" />
      </Form.Item>
    </>
  );
};
