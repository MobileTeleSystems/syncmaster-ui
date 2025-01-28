import React from 'react';
import { Form, Input } from 'antd';

import { TransferConnectionMsSqlProps } from './types';

export const TransferConnectionMsSql = ({ name }: TransferConnectionMsSqlProps) => {
  return (
    <Form.Item label="Table name" name={[name, 'table_name']} rules={[{ required: true }]}>
      <Input className="nodrag" size="large" />
    </Form.Item>
  );
};
