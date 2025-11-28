import React from 'react';
import { Form, Input, InputNumber } from 'antd';
import { CONNECTION_BUCKET_STYLE_SELECT_OPTIONS, CONNECTION_PROTOCOL_SELECT_OPTIONS } from '@entities/connection';
import { Select } from '@shared/ui';
import { useTranslation } from 'react-i18next';

import { MAX_ALLOWED_PORT, MIN_ALLOWED_PORT } from '../../constants';
import { ConnectionAuthS3 } from '../ConnectionAuthS3';

export const ConnectionS3 = () => {
  const { t } = useTranslation('connection');

  return (
    <>
      <Form.Item label={t('host')} name={['connection_data', 'host']} rules={[{ required: true }]}>
        <Input size="large" />
      </Form.Item>
      <Form.Item label={t('protocol')} name={['connection_data', 'protocol']}>
        <Select size="large" options={CONNECTION_PROTOCOL_SELECT_OPTIONS} placeholder={t('selectProtocol')} />
      </Form.Item>
      <Form.Item label={t('port')} name={['connection_data', 'port']}>
        <InputNumber size="large" min={MIN_ALLOWED_PORT} max={MAX_ALLOWED_PORT} />
      </Form.Item>
      <Form.Item label={t('s3.bucketStyle')} name={['connection_data', 'bucket_style']}>
        <Select size="large" options={CONNECTION_BUCKET_STYLE_SELECT_OPTIONS} placeholder={t('s3.selectBucketStyle')} />
      </Form.Item>
      <Form.Item label={t('s3.bucket')} name={['connection_data', 'bucket']} rules={[{ required: true }]}>
        <Input size="large" />
      </Form.Item>
      <Form.Item label={t('s3.region')} name={['connection_data', 'region']}>
        <Input size="large" />
      </Form.Item>
      <ConnectionAuthS3 />
    </>
  );
};
