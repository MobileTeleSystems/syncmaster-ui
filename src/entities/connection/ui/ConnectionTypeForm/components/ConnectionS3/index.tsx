import React, { useEffect } from 'react';
import { Form, Input, Radio } from 'antd';
import { useTranslation } from 'react-i18next';

import { ConnectionHttpProtocol } from '../ConnectionHttpProtocol';
import { useSensitiveFields } from '../../hooks';

export const ConnectionS3 = () => {
  const { t } = useTranslation('connection');
  const { isRequired } = useSensitiveFields();

  // Reset auth type after switching connection type in form
  const formInstance = Form.useFormInstance();
  useEffect(() => {
    formInstance.setFieldValue(['auth_data', 'type'], 's3');
  }, [formInstance]);

  return (
    <>
      <Form.Item label={t('host')} name={['connection_data', 'host']} rules={[{ required: true }]}>
        <Input size="large" placeholder="s3.mycompany.com" />
      </Form.Item>
      <ConnectionHttpProtocol />
      <Form.Item label={t('s3.bucket')} name={['connection_data', 'bucket']} rules={[{ required: true }]}>
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
      <Form.Item label={t('s3.region')} name={['connection_data', 'region']}>
        <Input size="large" placeholder="us-east-1" />
      </Form.Item>

      <Form.Item name={['auth_data', 'type']} hidden />
      <Form.Item label={t('s3.accessKey')} name={['auth_data', 'access_key']} rules={[{ required: true }]}>
        <Input size="large" />
      </Form.Item>
      <Form.Item label={t('s3.secretKey')} name={['auth_data', 'secret_key']} rules={[{ required: isRequired }]}>
        <Input.Password size="large" />
      </Form.Item>
    </>
  );
};
