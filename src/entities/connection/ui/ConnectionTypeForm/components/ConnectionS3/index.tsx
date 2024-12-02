import React from 'react';
import { Form, Input, InputNumber, Select } from 'antd';
import { CONNECTION_BUCKET_STYLE_SELECT_OPTIONS, CONNECTION_PROTOCOL_SELECT_OPTIONS } from '@entities/connection';

import { useSensitiveFields } from '../../hooks';
import { MAX_ALLOWED_PORT, MIN_ALLOWED_PORT } from '../../constants';

export const ConnectionS3 = () => {
  const { isRequired } = useSensitiveFields();

  return (
    <>
      <Form.Item label="Host" name="host" rules={[{ required: true }]}>
        <Input size="large" />
      </Form.Item>
      <Form.Item label="Protocol" name="protocol" rules={[{ required: true }]}>
        <Select size="large" options={CONNECTION_PROTOCOL_SELECT_OPTIONS} placeholder="Select connection protocol" />
      </Form.Item>
      <Form.Item label="Bucket style" name="bucket_style" rules={[{ required: true }]}>
        <Select
          size="large"
          options={CONNECTION_BUCKET_STYLE_SELECT_OPTIONS}
          placeholder="Select connection bucket style"
        />
      </Form.Item>
      <Form.Item label="Bucket" name="bucket" rules={[{ required: true }]}>
        <Input size="large" />
      </Form.Item>
      <Form.Item label="Port" name="port">
        <InputNumber size="large" min={MIN_ALLOWED_PORT} max={MAX_ALLOWED_PORT} />
      </Form.Item>
      <Form.Item label="Region" name="region">
        <Input size="large" />
      </Form.Item>
      <Form.Item label="Access key" name="access_key" rules={[{ required: true }]}>
        <Input size="large" />
      </Form.Item>
      <Form.Item label="Secret key" name="secret_key" rules={[{ required: isRequired }]}>
        <Input.Password size="large" />
      </Form.Item>
    </>
  );
};
