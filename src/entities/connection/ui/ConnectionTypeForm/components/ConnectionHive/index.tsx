import React from 'react';
import { Form, Input } from 'antd';

import { ConnectionAuthBasic } from '../ConnectionAuthBasic';

export const ConnectionHive = () => {
  return (
    <>
      <Form.Item label="Cluster" name={['connection_data', 'cluster']} rules={[{ required: true }]}>
        <Input size="large" />
      </Form.Item>
      <ConnectionAuthBasic />
    </>
  );
};
