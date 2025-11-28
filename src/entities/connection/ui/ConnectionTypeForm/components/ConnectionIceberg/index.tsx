import React from 'react';
import { Divider, Form, Input, Radio, RadioChangeEvent } from 'antd';
import { useTranslation } from 'react-i18next';
import { ConnectionAuthType, ConnectionIcebergConnectionType } from '@entities/connection/api';

import { ConnectionAuthIcebergBearer } from './ConnectionAuthIcebergBearer';
import { ConnectionAuthIcebergOAuth2ClientCredentials } from './ConnectionAuthIcebergOAuth2ClientCredentials';
import { ConnectionIcebergS3Direct } from './ConnectionIcebergS3Direct';
import { ConnectionIcebergS3Delegated } from './ConnectionIcebergS3Delegated';

export const ConnectionIceberg = () => {
  const { t } = useTranslation('connection');

  // use values fetched from backend instead, avoid useState
  const formInstance = Form.useFormInstance();
  Form.useWatch(['connection_data', 'type']);
  Form.useWatch(['auth_data', 'type']);

  const authType = formInstance.getFieldValue(['auth_data', 'type']) as string | undefined;
  const connectionType = formInstance.getFieldValue(['connection_data', 'type']) as string | undefined;

  const restCatalogAuthType = authType?.includes('oauth2_client_credentials') ? 'oauth2_client_credentials' : 'bearer';
  const s3Impl = connectionType?.includes('delegated') ? 'delegated' : 'direct';

  const setRestCatalogAuthType = (restCatalogAuth: string, s3Type: string) => {
    let value: ConnectionAuthType;
    if (restCatalogAuth == 'bearer') {
      value = ConnectionAuthType.ICEBERG_REST_BEARER;
      if (s3Type == 'direct') {
        value = ConnectionAuthType.ICEBERG_REST_BEARER_S3_BASIC;
      }
    } else {
      value = ConnectionAuthType.ICEBERG_REST_OAUTH2_CLIENT_CREDENTIALS;
      if (s3Type == 'direct') {
        value = ConnectionAuthType.ICEBERG_REST_OAUTH2_CLIENT_CREDENTIALS_S3_BASIC;
      }
    }
    formInstance.setFieldValue(['auth_data', 'type'], value);
  };

  const setS3Impl = (value: string) => {
    if (value == 'delegated') {
      value = ConnectionIcebergConnectionType.ICEBERG_REST_S3_DELEGATED;
    } else {
      value = ConnectionIcebergConnectionType.ICEBERG_REST_S3_DIRECT;
    }
    formInstance.setFieldValue(['connection_data', 'type'], value);
  };

  const handleRestCatalogAuthTypeChange = (e: RadioChangeEvent) => {
    setRestCatalogAuthType(e.target.value, s3Impl);
  };

  // Auth type depends on S3 direct/delegate access
  const handleS3ImplChange = (e: RadioChangeEvent) => {
    setS3Impl(e.target.value);
    setRestCatalogAuthType(restCatalogAuthType, e.target.value);
  };

  return (
    <>
      <Divider>{t('iceberg.restCatalog')}</Divider>
      <Form.Item
        label={t('iceberg.restCatalogUrl')}
        name={['connection_data', 'rest_catalog_url']}
        rules={[{ type: 'url', required: true }]}
      >
        <Input size="large" />
      </Form.Item>

      <Form.Item name={['auth_data', 'type']} hidden />
      <Form.Item label={t('iceberg.restCatalogAuthType')}>
        <Radio.Group value={restCatalogAuthType} onChange={handleRestCatalogAuthTypeChange}>
          <Radio.Button value="bearer">Bearer Token</Radio.Button>
          <Radio.Button value="oauth2_client_credentials">OAuth2 Client Credentials</Radio.Button>
        </Radio.Group>
      </Form.Item>
      {restCatalogAuthType == 'bearer' && <ConnectionAuthIcebergBearer />}
      {restCatalogAuthType == 'oauth2_client_credentials' && <ConnectionAuthIcebergOAuth2ClientCredentials />}

      <Divider>{t('s3.name')}</Divider>
      <Form.Item name={['connection_data', 'type']} hidden />
      <Form.Item label={t('iceberg.s3AccessStyle')}>
        <Radio.Group value={s3Impl} onChange={handleS3ImplChange}>
          <Radio.Button value="direct">{t('iceberg.s3Direct')}</Radio.Button>
          <Radio.Button value="delegated">{t('iceberg.s3Delegated')}</Radio.Button>
        </Radio.Group>
      </Form.Item>
      {s3Impl == 'direct' && <ConnectionIcebergS3Direct />}
      {s3Impl == 'delegated' && <ConnectionIcebergS3Delegated />}
    </>
  );
};
