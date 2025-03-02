import React from 'react';
import { Form, Input } from 'antd';

import { useSensitiveFields } from '../../hooks';

export const ConnectionAuthS3 = () => {
  const { isRequired } = useSensitiveFields();

  return (
    <>
      {/* Hide Form.Item control, because its value is set in 'useSelectConnectionType' hook */}
      <Form.Item name={['auth_data', 'type']} hidden>
        <Input size="large" />
      </Form.Item>
      <Form.Item label="Access key" name={['auth_data', 'access_key']} rules={[{ required: true }]}>
        <Input size="large" />
      </Form.Item>
      <Form.Item label="Secret key" name={['auth_data', 'secret_key']} rules={[{ required: isRequired }]}>
        <Input.Password size="large" />
      </Form.Item>
    </>
  );
};
