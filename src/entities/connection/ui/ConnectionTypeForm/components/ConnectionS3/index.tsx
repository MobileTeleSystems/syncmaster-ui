import React from 'react';
import { Form, Input, InputNumber, Select } from 'antd';
import { CONNECTION_BUCKET_STYLE_SELECT_OPTIONS, CONNECTION_PROTOCOL_SELECT_OPTIONS } from '@entities/connection';

import { MAX_ALLOWED_PORT, MIN_ALLOWED_PORT } from '../../constants';
import { ConnectionAuthS3 } from '../ConnectionAuthS3';

export const ConnectionS3 = () => {
  return (
    <>
      <Form.Item label="Host" name={['connection_data', 'host']} rules={[{ required: true }]}>
        <Input size="large" />
      </Form.Item>
      <Form.Item label="Protocol" name={['connection_data', 'protocol']} rules={[{ required: true }]}>
        <Select size="large" options={CONNECTION_PROTOCOL_SELECT_OPTIONS} placeholder="Select connection protocol" />
      </Form.Item>
      <Form.Item label="Bucket style" name={['connection_data', 'bucket_style']} rules={[{ required: true }]}>
        <Select
          size="large"
          options={CONNECTION_BUCKET_STYLE_SELECT_OPTIONS}
          placeholder="Select connection bucket style"
        />
      </Form.Item>
      <Form.Item label="Bucket" name={['connection_data', 'bucket']} rules={[{ required: true }]}>
        <Input size="large" />
      </Form.Item>
      <Form.Item label="Port" name={['connection_data', 'port']}>
        <InputNumber size="large" min={MIN_ALLOWED_PORT} max={MAX_ALLOWED_PORT} />
      </Form.Item>
      <Form.Item label="Region" name={['connection_data', 'region']}>
        <Input size="large" />
      </Form.Item>
      <ConnectionAuthS3 />
    </>
  );
};
