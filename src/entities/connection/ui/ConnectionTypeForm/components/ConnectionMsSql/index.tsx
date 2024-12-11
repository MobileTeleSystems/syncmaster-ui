import React from 'react';
import { Form, Input, InputNumber } from 'antd';

import { useSensitiveFields } from '../../hooks';
import { MAX_ALLOWED_PORT, MIN_ALLOWED_PORT } from '../../constants';

export const ConnectionMsSql = () => {
  const { isRequired } = useSensitiveFields();

  return (
    <>
      <Form.Item label="Database name" name="database_name" rules={[{ required: true }]}>
        <Input size="large" />
      </Form.Item>
      <Form.Item label="Host" name="host" rules={[{ required: true }]}>
        <Input size="large" />
      </Form.Item>
      <Form.Item label="Port" name="port" rules={[{ required: true }]}>
        <InputNumber size="large" min={MIN_ALLOWED_PORT} max={MAX_ALLOWED_PORT} />
      </Form.Item>
      <Form.Item label="User" name="user" rules={[{ required: true }]}>
        <Input size="large" />
      </Form.Item>
      <Form.Item label="Password" name="password" rules={[{ required: isRequired }]}>
        <Input.Password size="large" />
      </Form.Item>
    </>
  );
};
