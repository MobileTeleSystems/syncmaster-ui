import React from 'react';
import { Form, Input, Radio } from 'antd';
import { useTranslation } from 'react-i18next';

import { useSensitiveFields } from '../../hooks';
import { ConnectionHttpProtocol } from '../ConnectionHttpProtocol';

export const ConnectionIcebergS3Direct = () => {
  const { t } = useTranslation('connection');
  const { isRequired } = useSensitiveFields();

  return (
    <>
      <Form.Item
        label={t('iceberg.warehousePath')}
        name={['connection_data', 's3_warehouse_path']}
        rules={[{ required: true }]}
      >
        <Input size="large" placeholder="/path/to/warehouse" />
      </Form.Item>
      <Form.Item label={t('host')} name={['connection_data', 's3_host']} rules={[{ required: true }]}>
        <Input size="large" placeholder="s3.mycompany.com" />
      </Form.Item>
      <ConnectionHttpProtocol fieldsPrefix="s3_" />
      <Form.Item label={t('s3.bucket')} name={['connection_data', 's3_bucket']} rules={[{ required: true }]}>
        <Input size="large" />
      </Form.Item>
      <Form.Item
        label={t('s3.bucketStyle')}
        name={['connection_data', 'bucket_style']}
        rules={[{ required: true }]}
        initialValue="domain"
      >
        <Radio.Group>
          <Radio.Button value="domain">{t('s3.bucketStyleDomain')}</Radio.Button>
          <Radio.Button value="path">{t('s3.bucketStylePath')}</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label={t('s3.region')} name={['connection_data', 's3_region']} rules={[{ required: true }]}>
        <Input size="large" placeholder="us-east-1" />
      </Form.Item>

      <Form.Item name={['auth_data', 'type']} hidden />
      <Form.Item label={t('s3.accessKey')} name={['auth_data', 's3_access_key']} rules={[{ required: true }]}>
        <Input size="large" />
      </Form.Item>
      <Form.Item label={t('s3.secretKey')} name={['auth_data', 's3_secret_key']} rules={[{ required: isRequired }]}>
        <Input.Password size="large" />
      </Form.Item>
    </>
  );
};
