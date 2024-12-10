import React from 'react';
import { Form, Input } from 'antd';

import { TransferConnectionMsSqlProps } from './types';

export const TransferConnectionMsSql = ({ name }: TransferConnectionMsSqlProps) => {
  return (
    <Form.Item label="Table name" name={[name, 'table_name']} rules={[{ required: true }]}>
      <Input size="large" />
    </Form.Item>
  );
};
