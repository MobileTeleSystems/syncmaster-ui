import React from 'react';
import { Form, Input } from 'antd';

import { useSensitiveFields } from '../../hooks';

export const ConnectionHive = () => {
  const { isRequired } = useSensitiveFields();

  return (
    <>
      <Form.Item label="Cluster" name="cluster" rules={[{ required: true }]}>
        <Input size="large" />
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
