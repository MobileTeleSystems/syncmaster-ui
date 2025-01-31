import React from 'react';
import { Form, Input } from 'antd';

import { TransferConnectionMySqlProps } from './types';

export const TransferConnectionMySql = ({ name }: TransferConnectionMySqlProps) => {
  return (
    <Form.Item label="Table name" name={[name, 'table_name']} rules={[{ required: true }]}>
      <Input className="nodrag" size="large" />
    </Form.Item>
  );
};
