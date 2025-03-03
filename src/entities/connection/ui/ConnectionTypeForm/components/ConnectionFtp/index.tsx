import React from 'react';
import { Form, Input, InputNumber } from 'antd';

import { MAX_ALLOWED_PORT, MIN_ALLOWED_PORT } from '../../constants';
import { ConnectionAuthBasic } from '../ConnectionAuthBasic';

export const ConnectionFtp = () => {
  return (
    <>
      <Form.Item label="Host" name={['connection_data', 'host']} rules={[{ required: true }]}>
        <Input size="large" />
      </Form.Item>
      <Form.Item label="Port" name={['connection_data', 'port']} rules={[{ required: true }]}>
        <InputNumber size="large" min={MIN_ALLOWED_PORT} max={MAX_ALLOWED_PORT} />
      </Form.Item>
      <ConnectionAuthBasic />
    </>
  );
};
