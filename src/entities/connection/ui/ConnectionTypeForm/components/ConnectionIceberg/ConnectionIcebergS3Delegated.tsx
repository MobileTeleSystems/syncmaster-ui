import React from 'react';
import { Form, Input, Radio } from 'antd';
import { useTranslation } from 'react-i18next';

export const ConnectionIcebergS3Delegated = () => {
  const { t } = useTranslation('connection');

  return (
    <>
      <Form.Item label={t('iceberg.warehouseName')} name={['connection_data', 's3_warehouse_name']}>
        <Input size="large" placeholder="my-warehouse" />
      </Form.Item>
      <Form.Item
        label={t('s3.accessDelegation')}
        name={['connection_data', 's3_access_delegation']}
        rules={[{ required: true }]}
        initialValue="vended-credentials"
      >
        <Radio.Group>
          <Radio.Button value="vended-credentials">{t('s3.vendedCredentials')}</Radio.Button>
          <Radio.Button value="remote-signing">{t('s3.remoteSigning')}</Radio.Button>
        </Radio.Group>
      </Form.Item>
    </>
  );
};
