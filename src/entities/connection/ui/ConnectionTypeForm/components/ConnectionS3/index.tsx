import React from 'react';
import { Form, Input, InputNumber, Radio } from 'antd';
import { useTranslation } from 'react-i18next';

import { MAX_ALLOWED_PORT, MIN_ALLOWED_PORT } from '../../constants';
import { ConnectionAuthS3 } from '../ConnectionAuthS3';

export const ConnectionS3 = () => {
  const { t } = useTranslation('connection');

  return (
    <>
      <Form.Item label={t('host')} name={['connection_data', 'host']} rules={[{ required: true }]}>
        <Input size="large" placeholder="s3.mycompany.com" />
      </Form.Item>
      <Form.Item
        label={t('protocol')}
        name={['connection_data', 'protocol']}
        rules={[{ required: true }]}
        initialValue="https"
      >
        <Radio.Group>
          <Radio.Button value="http">HTTP</Radio.Button>
          <Radio.Button value="httpS">HTTPS</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label={t('port')} name={['connection_data', 'port']}>
        <InputNumber size="large" min={MIN_ALLOWED_PORT} max={MAX_ALLOWED_PORT} placeholder="443" />
      </Form.Item>
      <Form.Item label={t('s3.bucketStyle')} name={['connection_data', 'bucket_style']} rules={[{ required: true }]} initialValue="domain">
        <Radio.Group>
          <Radio.Button value="domain">bucket.s3.mycompany.com</Radio.Button>
          <Radio.Button value="path">s3.mycompany.com/bucket</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label={t('s3.bucket')} name={['connection_data', 'bucket']} rules={[{ required: true }]}>
        <Input size="large" />
      </Form.Item>
      <Form.Item label={t('s3.region')} name={['connection_data', 'region']}>
        <Input size="large" placeholder="us-east-1"/>
      </Form.Item>
      <ConnectionAuthS3 />
    </>
  );
};
