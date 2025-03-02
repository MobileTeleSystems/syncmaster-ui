import React from 'react';
import { Form, Input } from 'antd';

import { useSensitiveFields } from '../../hooks';

export const ConnectionAuthBasic = () => {
  const { isRequired } = useSensitiveFields();

  return (
    <>
      {/* Hide Form.Item control, because its value is set in 'useSelectConnectionType' hook */}
      <Form.Item name={['auth_data', 'type']} hidden>
        <Input size="large" />
      </Form.Item>
      <Form.Item label="User" name={['auth_data', 'user']} rules={[{ required: true }]}>
        <Input size="large" />
      </Form.Item>
      <Form.Item label="Password" name={['auth_data', 'password']} rules={[{ required: isRequired }]}>
        <Input.Password size="large" />
      </Form.Item>
    </>
  );
};
